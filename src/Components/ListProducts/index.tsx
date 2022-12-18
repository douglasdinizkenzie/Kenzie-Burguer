import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CardProduct } from "./CardProduct";
import { UlProducts } from "./styled";

export function ListProducts() {
  const { products, productsFiltred } = useContext(CartContext);
  return (
    <UlProducts>
      {productsFiltred.map((elem) => (
        <CardProduct elem={elem} key={elem.id} />
      ))}
    </UlProducts>
  );
}
