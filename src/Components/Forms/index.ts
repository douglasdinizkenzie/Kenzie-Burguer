import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
  border-radius: var(--radius);
  background-color: var(--white);

  .container-form-header {
    display: flex;
    justify-content: space-between;

    align-items: center;
    margin-bottom: 2rem;

    & > p {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--grey-600);
    }

    & > a {
      color: var(--grey-300);
      font-size: 14px;
    }
  }

  .sub-p {
    color: var(--grey-300);
    font-size: 14px;
    text-align: center;
  }
`;
