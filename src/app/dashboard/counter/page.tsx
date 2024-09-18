import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shoping Cart",
  description: "Un simple contador",
};

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter />
    </div>
  );
}
