import { LiCard } from "./styled";
import { ButtonAdd } from "../../Buttons/styled";
import { iProducts } from "../../../context/CartContext/types";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export interface iElem {
  elem: iProducts;
}

export function CardProduct({ elem }: iElem) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <LiCard>
      <img className="img-container" src={elem.img} alt="" />

      <div className="card-infos">
        <p className="name">{elem.name}</p>
        <p className="category">{elem.category}</p>
        <p className="price">
          R$ {elem.price.toFixed(2).toString().replace(".", ",")}
        </p>
        <ButtonAdd onClick={() => addProductToCart(elem)}>Adicionar</ButtonAdd>
      </div>
    </LiCard>
  );
}
