import { ITour } from "../../types";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

interface IProps {
  tours: ITour[];
}

function TourItem(tour: ITour) {
  return (
    <Card
      shadow="sm"
      className="col-span-12 sm:col-span-4 h-[400px] relative overflow-hidden rounded-lg"
    >
      <CardBody className="overflow-hidden rounded-t-lg p-0 w-full h-[280px] bg-amber-500">
        {/* TODO Replace bg-amber-500 with an image background or tour image if available */}
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
            className={`text-sm font-semibold ${tour.priceDiscount ? "line-through" : ""} text-gray-400`}
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

export default function TourList({ tours }: IProps) {
  console.log("%c%s", "color: #733d00", "tours: ", tours);
  return (
    <div className="w-full gap-4 grid grid-cols-12 px-8">
      {tours.map((tour, index) => (
        <TourItem {...tour} key={tour.id} />
      ))}
    </div>
  );
}
