"use client";

import { ITour } from "@/types";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { useRouter } from "next/navigation";

export function TourCard(tour: ITour) {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      isPressable
      isHoverable
      onClick={() => router.push(`/tours/${tour.id}`)}
      className="col-span-12 sm:col-span-4 h-[400px] relative overflow-hidden rounded-lg"
    >
      <CardBody className="overflow-hidden rounded-t-lg p-0 w-full h-[280px] relative">
        {tour.imageCover ? (
          <Image
            key={tour.imageCover}
            src={tour.imageCover}
            alt={tour.name || "Tour Image"}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-black/30 to-transparent">
            No Image Available
          </div>
        )}
      </CardBody>
      <CardFooter className="flex flex-col items-start p-4">
        <b className="text-sm">{tour.name}</b>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-bold">★ {tour.ratingsAverage}</span>
          <span className="text-xs text-gray-500">({tour.ratingQuantity})</span>
        </div>
        <p className="text-sm text-gray-500">
          {tour.startLocation.description}
        </p>
        <p className="text-xs text-gray-500 mt-1">{tour.duration} days</p>
        <div className="flex items-center justify-between w-full mt-2">
          <p
            className={`text-sm font-semibold ${
              tour.priceDiscount ? "line-through text-gray-400" : ""
            }`}
          >
            ${tour.price} CAD
          </p>
          {tour.priceDiscount ? (
            <p className="text-sm font-bold text-red-500">
              ${tour.priceDiscount} CAD
            </p>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
