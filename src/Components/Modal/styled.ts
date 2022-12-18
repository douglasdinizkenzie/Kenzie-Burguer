import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;

  justify-content: center;
  z-index: 2;

  .modal {
    margin-top: 5rem;
    width: 80%;
    height: auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
  }

  .header-modal {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    border-radius: var(--radius) var(--radius) 0 0;

    & > p {
      font-size: 18px;
      color: var(--white);
      font-weight: bold;
    }

    & > button {
      border: none;
      color: var(--white);
      font-size: 25px;
      cursor: pointer;
      background-color: transparent;
    }
  }

  .message-modal {
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    height: 30%;
    border-radius: 0 0 var(--radius) var(--radius);
    gap: 1rem;

    & > h2 {
      color: var(--grey-600);
    }

    & > p {
      color: var(--grey-300);
    }
  }

  .cart-modal {
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: auto;
    max-height: 50%;
    overflow-y: scroll;
    gap: 1rem;
    border-bottom: 2px solid var(--grey-100);
    list-style: none;
  }

  .total-container {
    padding: 1rem;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .container-total-value {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .total {
        color: var(--grey-600);
        font-size: 14px;
        font-weight: bold;
      }

      .price {
        color: var(--grey-300);
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
