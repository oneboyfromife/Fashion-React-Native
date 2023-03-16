import {ImageSourcePropType} from "react-native";
import Colors from "../constants/Colors";

export const user = {
  id: 1,
  name: "Oneboyfromife",
  image: require("../assets/images/user/oneboyfromife.jpg"),
};

export const categories = [
  {
    id: 1,
    name: "Men's",
  },
  {
    id: 2,
    name: "Women",
  },
  {
    id: 3,
    name: "Sports",
  },
  {
    id: 4,
    name: "For Kids",
  },
  {
    id: 5,
    name: "Slay",
  },
  {
    id: 5,
    name: "Church Wears",
  },
  {
    id: 5,
    name: "Corporate",
  },
];

const colors = [
  {
    id: 1,
    code: Colors.primary,
  },
  {
    id: 2,
    code: Colors.secondary,
  },
  {
    id: 3,
    code: Colors.text,
  },
];

const sizes = [
  {id: 1, name: "S"},
  {id: 2, name: "M"},
  {id: 3, name: "L"},
  {id: 4, name: "XL"},
  {id: 5, name: "XXL"},
];

export const products = [
  {
    id: 1,
    name: "Skinny Fit Blazer",
    price: "15,000",
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/yellow-ss.jpg"),
    reviews: 80,
    rating: 2.5,
    colors: colors,
    brand: "Mimi",
    sizes,
  },
  {
    id: 2,
    name: "Men’s Kinnstor sportswear",
    price: "45,499",
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/green-j.jpg"),
    reviews: 28,
    rating: 3.7,
    colors: colors,
    brand: "Zara",
    sizes,
  },
  {
    id: 3,
    name: "Violet Hoodie",
    price: "6,150",
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/hdd.jpg"),
    reviews: 70,
    rating: 5,
    colors: colors,
    brand: "Thrift Store",
    sizes,
  },
  {
    id: 4,
    name: "Skinny Fit Blazer",
    price: "15,000",
    category: categories[1],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/blue-ish-w.jpg"),
    reviews: 65,
    rating: 4.2,
    colors: colors,
    brand: "Mimo Stiches",
    sizes,
  },
];
