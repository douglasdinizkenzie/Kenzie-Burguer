import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonRegisterForm = styled.button`
  width: 100%;
  border-radius: var(--radius);
  padding: 1.2rem;
  color: var(--grey-300);
  background-color: var(--grey-0);
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;
  font-size: 1rem;

  :hover {
    color: var(--white);
    background-color: var(--color-primary);
  }
`;

export const ButtonLoginForm = styled.button`
  width: 100%;
  border-radius: var(--radius);
  padding: 1.2rem;
  color: var(--white);
  background-color: var(--color-primary);
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;
  font-size: 1rem;
`;

export const ToRegisterButton = styled(Link)`
  width: 100%;
  border-radius: var(--radius);
  padding: 1.2rem;
  color: var(--grey-300);
  background-color: var(--grey-0);
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  :hover {
    color: var(--white);
    background-color: var(--grey-600);
  }
`;

export const ButtonAdd = styled.button`
  padding: 1rem;
  font-weight: bold;
  font-size: 14px;
  background-color: var(--grey-4);
  border-radius: var(--radius);
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  width: 50%;
  :hover {
    background-color: var(--color-primary);
  }
`;

export const ButtonRemoveAll = styled.button`
  width: 100%;
  border-radius: var(--radius);
  padding: 1.2rem;
  color: var(--grey-300);
  background-color: var(--grey-100);
  font-weight: bold;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;
  font-size: 1rem;
`;
