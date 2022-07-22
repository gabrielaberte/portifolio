import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 300px;
    font-size: 10px !important;

  }
  @media (max-width: 4000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;


