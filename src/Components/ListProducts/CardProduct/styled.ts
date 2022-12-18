import styled from "styled-components";

export const LiCard = styled.li`
  width: 300px;
  height: 346px;
  border-radius: var(--radius);
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--grey-0);
  transition: 0.5s ease;

  :hover {
    border: 2px solid var(--color-primary);
  }

  :hover button {
    background-color: var(--color-primary);
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-color: var(--grey-0);
    border-radius: var(--radius) var(--radius) 0 0;
    height: 45%;
  }

  .card-infos {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    height: 55%;
    border-radius: 0 0 var(--radius) var(--radius);
  }

  .name {
    color: var(--grey-600);
    font-weight: bold;
    font-size: 18px;
  }

  .category {
    color: var(--grey-300);
    font-size: 12px;
  }

  .price {
    color: var(--color-primary);
    font-weight: bold;
    font-size: 14px;
  }
`;
