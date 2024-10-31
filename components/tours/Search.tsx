import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FC } from "react";
import { Card, CardBody } from "@nextui-org/card";

const SearchBar: FC = () => {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center space-x-2">
          <Input
            label="Where"
            placeholder="Search destinations"
            fullWidth
            aria-label="Search destinations"
          />
          <Input
            label="Check in"
            placeholder="Add dates"
            fullWidth
            aria-label="Check in date"
          />
          <Input
            label="Check out"
            placeholder="Add dates"
            fullWidth
            aria-label="Check out date"
          />
          <Input
            label="Who"
            placeholder="Add guests"
            fullWidth
            aria-label="Number of guests"
          />
          <Button variant="solid" color="primary">
            Search
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default SearchBar;
