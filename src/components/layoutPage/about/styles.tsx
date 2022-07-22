import styled from "styled-components";

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    flex-wrap: wrap;
    width: fit-content;
    font-size: medium;
  }
`;
export const DivInside = styled.div`
  @media (max-width: 400px) {
    width: min-content;
    height: fit-content;
  }
  @media (max-width: 4000px) {
    width: fit-content;
    height: fit-content;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 1rem;
    }

    p {
      display: flex;
      font-size: medium;
      justify-content: flex-start;
    }

    h1 {
      font-size: larger;
    }
  }
`;

export const Container = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  @media (max-width: 4000px) {
    display: flex;
    flex-direction: column;
    margin: "20px";
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 20px;
  }
`;
