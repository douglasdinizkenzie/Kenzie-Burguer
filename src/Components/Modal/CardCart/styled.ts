import styled from "styled-components";

export const LiCardModal = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;

  .trash {
    position: absolute;
    top: 3px;
    right: 3px;
  }

  .container-img-infos {
    /* width: 55%; */
    display: flex;
    justify-content: space-between;

    @media (min-width: 500px) {
      /* width: 20%; */
    }

    & > img {
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      background-color: var(--grey-0);
      border-radius: var(--radius);
      height: 90px;
      width: 90px;
    }
  }

  .container-infos-card-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-button {
    display: flex;
    align-items: center;

    & > button {
      color: var(--color-secondary);
      border: none;
      background-color: var(--grey-6);
      padding: 0.5rem;
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
    }

    & > p {
      padding: 0rem 0.5rem;
    }
  }
`;
