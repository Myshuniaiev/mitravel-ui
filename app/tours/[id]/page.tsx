import { ITour, SearchParams } from "@/types";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { FlagIcon, MapPinIcon, UsersGroup } from "@/components/icons";
import { ListItem } from "@/components/list";
import { Card } from "@nextui-org/card";
import { request } from "@/services/api";
import AutocompleteComponent from "@/components/autocomplete";
import BookButton from "@/components/BookButton";

interface IProps {
  params: { id: string };
}

export default async function Tour({ params }: IProps) {
  const { id } = params;
  const { data: res } = await request<ITour>({ url: `tours/${id}` });

  return (
    <div className="w-full px-8">
      <Image
        key={res.data.imageCover}
        width={1800}
        height={400}
        className="object-cover mt-4"
        alt="Tour Image"
        src={res.data.imageCover}
        isBlurred
      />
      <div className="flex flex-row gap-20">
        <div className="flex flex-col w-full">
          <span className="flex mt-6 font-semibold text-lg">
            {res.data.name}
          </span>
          <span className="flex mt-2 text-gray-500">{res.data.summary}</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-bold">
              ★ {res.data.ratingsAverage}
            </span>
            <span className="text-xs text-gray-500">
              ({res.data.ratingQuantity})
            </span>
          </div>
          <Divider orientation="horizontal" className="mt-4 mb-4" />
          <ListItem
            icon={<FlagIcon />}
            title={"Difficulty Level"}
            description={res.data.difficulty}
          />
          <ListItem
            icon={<UsersGroup />}
            title={"Maximum Group Size"}
            description={res.data.maxGroupSize}
          />
          <ListItem
            icon={<MapPinIcon />}
            title={"Address"}
            description={res.data.startLocation.address}
          />
          <Divider orientation="horizontal" className="mt-4" />
          <span className="flex mt-4 mb-4">{res.data.description}</span>
        </div>
        <Card
          shadow="sm"
          className="h-[200px] relative overflow-hidden rounded-lg w-2/3 mt-6 p-4"
        >
          <div className="flex font-semibold text-xl mb-4">
            ${res.data.price}
            <span className="font-normal text-sm ml-2">total</span>
          </div>
          <AutocompleteComponent startDates={res.data.startDates} />
          <div className="flex justify-end">
            <BookButton title={"Book Now"} link={"/book"} />
          </div>
        </Card>
      </div>
    </div>
  );
}
