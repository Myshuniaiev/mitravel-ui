import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SearchParams {
  name?: string | undefined;
  page?: number | undefined;
}

export enum TourDifficultyEnum {
  EASY = "easy",
  MEDIUM = "medium",
  DIFFICULT = "difficult",
}

export interface ILocation {
  type: "Point";
  coordinates: number[];
  address: string;
  description: string;
}

export interface ITour {
  id: string;
  name: string;
  slug?: string;
  duration: number;
  maxGroupSize: number;
  difficulty: TourDifficultyEnum;
  ratingsAverage: number;
  ratingQuantity: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: Date[];
  secretTour: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  startLocation: ILocation;
  locations: (ILocation & { day: number })[];
  guides: IUser[];
}

export enum UserRoleEnum {
  USER = "user",
  GUIDE = "guide",
  LEAD_GUIDE = "lead-guide",
  ADMIN = "admin",
}

export interface IUser extends Document {
  name: string;
  email: string;
  photo: string;
  role: UserRoleEnum;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active: boolean;
}
