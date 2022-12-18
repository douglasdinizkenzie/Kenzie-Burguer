import { iElem } from "../../ListProducts/CardProduct";
import { LiCardModal } from "./styled";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { iProducts } from "../../../context/CartContext/types";

export function CardCart({ elem }: iElem) {
  const { setProductsInCart, productsInCart } = useContext(CartContext);

  function removeItem(item: iProducts) {
    let filtredProducts = productsInCart.filter(
      (elemFilter) => elemFilter.id !== item.id
    );

    setProductsInCart(filtredProducts);
  }
  return (
    <>
      <LiCardModal>
        <div className="container-img-infos">
          <img src={elem.img} alt="" />
          <div className="container-infos-card-cart">
            <h3>{elem.name}</h3>
            <div className="container-button">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
          </div>
          <FaTrash
            onClick={() => removeItem(elem)}
            cursor="pointer"
            color="grey"
            className="trash"
          />
        </div>
      </LiCardModal>
    </>
  );
}
