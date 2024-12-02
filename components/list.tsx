import React, { ReactNode } from "react";

interface ListItemProps {
  icon: ReactNode;
  title: string;
  description: string | number;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  icon,
  description,
}) => (
  <div className="w-full max-w-[260px] px-1 py-2">
    <div className="flex gap-2 items-center">
      {icon}
      <div className="flex flex-col">
        {title}
        <div className="text-gray-500 flex">{description}</div>
      </div>
    </div>
  </div>
);

