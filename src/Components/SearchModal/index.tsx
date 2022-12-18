import { ContainerModalSearch, ModalSearch } from "./styled";
import { ImSearch } from "react-icons/im";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";

export function SearchModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { setModalSearch, setInputData } = useContext(CartContext);

  useEffect(() => {
    function modalOutClick(event: MouseEvent) {
      const element = modalRef.current;
      const target = event.target as HTMLDivElement;

      if (!element) {
        return null;
      }

      if (!element.contains(target)) {
        setModalSearch(false);
      }
    }
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  return (
    <ContainerModalSearch ref={modalRef}>
      <ModalSearch>
        <input
          onChange={(event) => setInputData(event.target.value)}
          placeholder="Digitar pesquisa"
          type="text"
        />
        <div className="search-icon">
          <ImSearch
            onClick={() => setModalSearch(false)}
            size="20px"
            color="white"
            cursor="pointer"
          />
        </div>
      </ModalSearch>
    </ContainerModalSearch>
  );
}
