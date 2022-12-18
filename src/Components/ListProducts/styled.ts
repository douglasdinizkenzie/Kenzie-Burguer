import styled from "styled-components";

export const UlProducts = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  gap: 3rem;
  height: auto;
  list-style: none;
  justify-content: center;

  @media (max-width: 600px) {
    max-height: 450px;
    overflow-y: auto;
    align-items: center;
    gap: 1rem;
  }
`;
