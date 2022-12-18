import styled from "styled-components";

export const ContainerModalSearch = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-0);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  & > div {
  }
`;

export const ModalSearch = styled.div`
  border-radius: var(--radius);
  border: 1px solid var(--grey-100);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  gap: 1rem;

  & > input {
    padding: 1rem;
    border-radius: var(--radius);
    width: 100%;
    border: none;
  }

  .search-icon {
    background-color: var(--color-primary);
    border-radius: var(--radius);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
