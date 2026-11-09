// categoryIcons
// The server stores each category's  icon as a material icon (e.g "devices")
// This list turns that name into the matching react icons component
// use it Like: const Icon = categoryIcons[category.icon] ?? DefaultCategoryIcon

import type { IconType } from "react-icons";
import {
  MdCheckroom,
  MdOutlineCategory,
  MdOutlineChair,
  MdOutlineDesk,
  MdOutlineFitnessCenter,
  MdOutlineMenuBook,
  MdOutlineSoupKitchen,
  MdOutlineSpa,
} from "react-icons/md";

export const categoryIcons: Record<string, IconType> = {
  devices: MdOutlineChair,
  checkroom: MdCheckroom,
  chair: MdOutlineChair,
  spa: MdOutlineSpa,
  fitness_center: MdOutlineFitnessCenter,
  menu_book: MdOutlineMenuBook,
  desk: MdOutlineDesk,
  soup_kitchen: MdOutlineSoupKitchen,
  category: MdOutlineCategory,
};

// a general icon for any name that is not in the list
export const DefaultCategoryIcon = MdOutlineCategory;

// Order Item only keep the category's name (e.g "Home & Living"), so this finds the icon by name
const iconNameByCategory: Record<string, string> = {
  Electronics: "devices",
  Fashion: "checkroom",
  "Home & Living": "spa",
  Beauty: "spa",
  Sports: "Fitness_center",
  Books: "menu_book",
  Office: "desk",
  Kitchen: "soup_kitchen",
};

export function getCategoryIconByName(name = ""): IconType {
  return categoryIcons[iconNameByCategory[name]] ?? DefaultCategoryIcon;
}
