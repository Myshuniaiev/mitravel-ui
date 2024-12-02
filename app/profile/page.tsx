import { title } from "@/components/primitives";
import { IUser } from "@/types";
import { request } from "@/services/api";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

export default async function ProfilePage() {
  const { data: res } = await request<IUser>({ url: `users/me` });

  return (
    <div>
      <h1 className={title()}>Profile</h1>
      <div className="flex flex-col mt-8 ">
      <Tabs aria-label="Options" isVertical={true}>
        <Tab key="music" title="Settings">
          <Card>
            <CardBody>
              <form className="flex flex-col gap-4">
                <Input
                  type="name"
                  label="Name"
                  defaultValue={res.data.name}
                  className="max-w-xs"
                />
                <Input
                  type="email"
                  label="Email"
                  defaultValue={res.data.email}
                  className="max-w-xs"
                />
                <Input
                  type="password"
                  label="Password"
                  defaultValue={res.data.password}
                  className="max-w-xs"
                />
                <Input
                  isRequired
                  type="password"
                  label="Confirm Password"
                  defaultValue={res.data.passwordConfirm}
                  className="max-w-xs"
                />
                <Input
                  isDisabled
                  type="role"
                  label="Role"
                  defaultValue={res.data.role}
                  className="max-w-xs"
                />
                <Button variant="solid" color="primary" className="w-1/2 mt-4">
                  Update
                </Button>
              </form>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
    </div>
  );
}
