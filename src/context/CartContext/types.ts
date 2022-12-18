export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iCartProviderValues {
  modalSearch: boolean;
  setModalSearch: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  productsFiltred: iProducts[];
  productsInCart: iProducts[];
  setProductsInCart: React.Dispatch<React.SetStateAction<iProducts[]>>;
  addProductToCart: (data: iProducts) => void;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  modalCart: boolean;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
