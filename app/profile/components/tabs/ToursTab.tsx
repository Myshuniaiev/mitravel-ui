import React from "react";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

function TourBooking() {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt="Acme Creators"
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"
        />
        <div className="px-4 py-3">
          <div className="w-full flex justify-between">
            <h3 className="text-large font-medium">Lorem, ipsum dolor.</h3>
            <div className="flex gap-2">
              <Button size="sm" color="default">
                Manage
              </Button>
              <Button size="sm" color="danger">
                Delete
              </Button>
            </div>
          </div>
          <div className="flex flex-col pt-2 text-small text-default-400">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates nobis numquam, ullam vero libero optio. Obcaecati quos
              tempora unde?
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function ToursTab() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-2xl">Booked Tours</h4>
      <Divider />
      <div className="flex flex-col gap-4">
        <TourBooking />
        <TourBooking />
        <TourBooking />
      </div>
    </div>
  );
}
