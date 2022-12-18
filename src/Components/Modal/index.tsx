import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { ButtonRemoveAll } from "../Buttons/styled";
import { CardCart } from "./CardCart";
import { ModalContainer } from "./styled";

export function Modal() {
  const { modalCart, setModalCart, productsInCart, setProductsInCart } =
    useContext(CartContext);
  let total = productsInCart.reduce(
    (previous, current) => current.price + previous,
    0
  );
  let newTotal = total.toFixed(2).toString().replace(".", ",");
  console.log(productsInCart);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function modalOutClick(event: MouseEvent) {
      const element = modalRef.current;
      const target = event.target as HTMLDivElement;

      if (!element) {
        return null;
      }

      if (!element.contains(target)) {
        setModalCart(false);
      }
    }
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  return (
    <>
      <ModalContainer>
        <div ref={modalRef} className="modal">
          <div className="header-modal">
            <p>Carrinho de compras</p>
            <button onClick={() => setModalCart(false)}>x</button>
          </div>
          {productsInCart.length === 0 ? (
            <div className="message-modal">
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </div>
          ) : (
            <>
              <ul className="cart-modal">
                {productsInCart.map((elem) => (
                  <CardCart elem={elem} key={elem.id} />
                ))}
              </ul>
              <div className="total-container">
                <div className="container-total-value">
                  <p className="total">Total</p>
                  <p className="price">R$ {newTotal}</p>
                </div>
                <ButtonRemoveAll onClick={() => setProductsInCart([])}>
                  Remover Todos
                </ButtonRemoveAll>
              </div>
            </>
          )}
        </div>
      </ModalContainer>
    </>
  );
}
