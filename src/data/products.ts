import Image1 from "../assets/images/products-1.jpg";
import Image2 from "../assets/images/products-2.jpg";
import Image3 from "../assets/images/products-3.jpg";
import Image4 from "../assets/images/products-4.jpg";
import Image5 from "../assets/images/products-5.jpg";
import Image6 from "../assets/images/products-6.jpg";
import { ProductProps } from "../types";

export const products: ProductProps[] = [
  {
    name: "Women's costume",
    image: Image1,
    price: 100,
    description:
      "Fashion is something we deal with everyday. Even people who say t…",
  },
  {
    name: "Men's black hat",
    image: Image2,
    price: 54,
    description:
      "The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroidered label de...",
  },
  {
    name: "Dress Karl Lagerfeld",
    image: Image3,
    price: 640,
    description:
      "Another masterpiece from the legendary designer. He designed new dress dev…",
  },
  {
    name: "Men's black tie",
    image: Image4,
    price: 22,
    description: "Jacquard Valentino tie with Valentino logo motif.",
  },
  {
    name: "Men’s jacket Off-white",
    image: Image5,
    price: 21,
    description:
      "Off-White scuffed denim jacket. Faded effect, baggy cut, pointed collar, clasp…",
  },
  {
    name: "Cotton blouse Dries van noten",
    image: Image6,
    price: 180,
    description:
      "The fedora hat is reimagined for pre-fall 202 with a maxi embroided label design",
  },
];
