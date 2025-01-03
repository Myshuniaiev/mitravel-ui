import BookButton from "@/components/BookButton";
import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";

export default async function BookingPage() {
  return (
    <div className="w-full flex items-center flex-col mt-6 px-6 mb-6">
      <h1 className={title()}>Confirm and Pay</h1>
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 w-2/3">
          <Card shadow="sm" className="h-auto p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">
                <p className="text-red-500 flex items-center">
                  <span className="mr-2">This is a rare find.</span>
                  <span>💎</span>
                </p>
              </div>
            </div>
            <Divider orientation="horizontal" className="mb-4" />
            <div className="mb-6">
              <h3 className="font-semibold text-lg">Your trip</h3>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Dates</span>
                  <span className="text-gray-600">Dec. 9-12</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Guests</span>
                  <span className="text-gray-600">1 guest</span>
                </div>
              </div>
            </div>
            <Divider orientation="horizontal" className="mb-4" />
            <RadioGroup label="Choose how to pay">
              <Radio value="buenos-aires">Pay $79.80 CAD now</Radio>
              <Radio value="sydney">
                Pay in 4 payments (4 payments of $19.95 every 2 weeks for 6
                weeks. Interest-free.)
              </Radio>
            </RadioGroup>
          </Card>
        </div>
        <div className="flex flex-col">
          {/* Right Section */}
          <div>
            <Card shadow="sm" className="h-auto p-4 rounded-lg">
              <div className="flex mb-4">
                <Image
                  width={120}
                  height={80}
                  className="object-cover rounded-md"
                  alt="Room Image"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Tour Title</h3>
                  <p className="text-sm text-gray-500">Summary</p>
                  <p className="text-sm font-semibold">
                    ★ 4.72{" "}
                    <span className="text-gray-500">(2,784 reviews)</span>
                  </p>
                </div>
              </div>
              <Divider orientation="horizontal" className="mb-4" />
              <div>
                <h3 className="font-semibold text-lg">Price details</h3>
                <div className="flex justify-between mt-4">
                  <span>$26.60 CAD</span>
                  <span>$79.80 CAD</span>
                </div>
                <Divider orientation="horizontal" className="my-4" />
                <div className="flex justify-between font-bold">
                  <span>Total (CAD)</span>
                  <span>$79.80 CAD</span>
                </div>
              </div>
            </Card>
          </div>
          {/* Billing Section */}
          <Card shadow="sm" className="h-auto p-6 rounded-lg mt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">
                Credit Card Details
              </h3>
              <Input
                label="Full Name"
                id="full-name"
                type="text"
                placeholder="Joe Doe"
              />
              <Input
                label="Card Number"
                id="card-number"
                type="text"
                placeholder="1234 5678 9012 3456"
              />
              <div className="flex gap-4">
                <Input
                  label="Expiration Date"
                  id="expiration-date"
                  type="text"
                  placeholder="MM/YY"
                />
                <Input label="CVV" id="cvv" type="text" placeholder="123" />
              </div>
            </div>
            <BookButton title={"Confirm and Pay"} link={"/"} />
          </Card>
        </div>
      </div>
    </div>
  );
}
