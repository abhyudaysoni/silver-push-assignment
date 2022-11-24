import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10rem 0;
  padding: 0 5rem;
  height: 600px;
  #dots {
    height: 200px;
  }
  #box-solid {
    height: 200px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 2rem 0;
  }
  .earning-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    .earning-step {
      margin: 3rem 0;
      cursor: pointer;
    }
    .in-active {
      opacity: 50%;
    }
    .illustration-container {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 700px;
      }
    }
  }
`;
