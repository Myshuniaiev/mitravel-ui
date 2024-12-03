import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";

export default async function BookingPage() {
  return (
    <div className="w-full">
      <h1 className={title()}>Book your Trip</h1>
      <Card
        shadow="sm"
        className="h-auto relative overflow-hidden rounded-lg mt-6 p-4 w-full"
      >
        <div className="flex flex-row font-semibold text-xl mb-4 items-center">
          <Image
            width={200}
            height={100}
            className="object-cover"
            alt="Tour Image"
            src={"https://nextui.org/images/hero-card-complete.jpeg"}
          />
          <div className="ml-4 w-full">
            <span className="flex font-semibold text-lg">
              {/* {res.data.name} */}
              frie
            </span>
            {/* <span className="flex mt-2 text-gray-500">{res.data.summary}</span> */}
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold">
                {/* ★ {res.data.ratingsAverage} */}★ text
              </span>
              <span className="text-xs text-gray-500">
                {/* ({res.data.ratingQuantity}) */}
                (text)
              </span>
            </div>
            <span className="flex text-xs text-gray-500 mt-4">Address</span>
          </div>
        </div>
        <Divider orientation="horizontal" className="mt-4 mb-4" />
            <span className="flex text-lg font-semibold">Price Details</span>
            <div className="flex mb-4 font-normal mt-4">
            <span className="flex font-semibold  mr-2">Total: </span>
            {/* ${res.data.price} */}
            400CAD
          </div>
        <div className="flex justify-end">
          <Button variant="solid" color="primary" className="w-1/2 mt-4">
            Confirm
          </Button>
        </div>
      </Card>
    </div>
  );
}
