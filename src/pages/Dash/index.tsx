import { ContainerHeader } from "../../Components/ContainerHeaderDash/styled";
import { ImSearch } from "react-icons/im";
import { BsFillCartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { SearchModal } from "../../Components/SearchModal";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { ListProducts } from "../../Components/ListProducts";
import { Modal } from "../../Components/Modal";

export function Dash() {
  const {
    setModalSearch,
    modalSearch,
    setInputData,
    productsInCart,
    modalCart,
    setModalCart,
  } = useContext(CartContext);
  const { logOut } = useContext(UserContext);
  return (
    <>
      {modalSearch && <SearchModal />}
      {modalCart && <Modal />}
      <ContainerHeader>
        <div className="header-infos">
          <div className="logo">
            <p className="kenzie">Burguer</p>
            <p className="burguer">Kenzie</p>
          </div>
          <div className="header-options">
            <div className="search-container">
              <input
                onChange={(event) => setInputData(event.target.value)}
                placeholder="Digitar pesquisa"
                type="text"
              />
              <div className="search-icon">
                <ImSearch size="20px" color="white" cursor="pointer" />
              </div>
            </div>
            <ImSearch
              className="search"
              size="25px"
              cursor="pointer"
              color="gray"
              onClick={() => setModalSearch(true)}
            />
            <div onClick={() => setModalCart(true)} className="container-cart">
              <BsFillCartFill size="25px" cursor="pointer" color="gray" />
              <p className="quantyd">{productsInCart.length}</p>
            </div>
            <FiLogOut
              onClick={() => logOut()}
              size="25px"
              cursor="pointer"
              color="gray"
            />
          </div>
        </div>
      </ContainerHeader>
      <ListProducts />
    </>
  );
}
