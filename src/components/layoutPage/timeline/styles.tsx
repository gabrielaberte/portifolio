import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;

  }
  @media (max-width: 4000px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: "5px";
    margin-top: 20px;
  }
`;


