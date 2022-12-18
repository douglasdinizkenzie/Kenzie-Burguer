import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { iCartProviderProps, iCartProviderValues, iProducts } from "./types";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartProviderValues);

export function CartProvider({ children }: iCartProviderProps) {
  const [modalSearch, setModalSearch] = useState(false);
  const [products, setProducts] = useState<iProducts[]>([]);
  const [inputData, setInputData] = useState("");
  const [productsInCart, setProductsInCart] = useState<iProducts[]>([]);
  const [modalCart, setModalCart] = useState(false);

  const productsFiltred = products.filter((elemFilter) => {
    return elemFilter.name
      .toLowerCase()
      .replace("-", "")
      .includes(inputData.replace("-", " ").toLowerCase());
  });

  function addProductToCart(data: iProducts) {
    const exist = productsInCart.some((elemSome) => elemSome.id === data.id);
    if (exist) {
      toast.error("Item já no carrinho");
    } else {
      setProductsInCart([...productsInCart, data]);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    async function getProducts() {
      const request = await api.get("/products", {
        headers: { authorization: `Bearer ${token}` },
      });

      setProducts(request.data);
    }

    getProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        modalSearch,
        setModalSearch,
        products,
        setInputData,
        productsFiltred,
        productsInCart,
        setProductsInCart,
        addProductToCart,
        modalCart,
        setModalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
