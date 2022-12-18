import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: var(--grey-0);
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .header-infos {
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  .kenzie {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .burguer {
    font-size: 0.8rem;
    color: var(--color-secondary);
    font-weight: bold;
  }

  .header-options {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.7rem;
  }

  .container-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .quantyd {
    background-color: var(--color-primary);
    border-radius: var(--radius);
    color: var(--white);
    font-weight: bold;
    padding: 0.5px 1px;
    position: absolute;
    top: -6px;
    right: 0;
    cursor: pointer;
  }

  .search-container {
    border-radius: var(--radius);
    border: 1px solid var(--grey-100);
    padding: 0.5rem 1rem;
    display: none;
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
  }

  @media (min-width: 600px) {
    .kenzie {
      font-size: 2rem;
    }
    .burguer {
      font-size: 1rem;
    }

    .search {
      display: none;
    }

    .search-container {
      display: flex;
    }
  }
`;
