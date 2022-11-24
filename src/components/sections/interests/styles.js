import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  #lines {
    width: 200px;
    align-self: end;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 2rem 0;
  }
  #more {
    font-size: 2rem;
    font-weight: 700;
    align-self: end;
  }
  .interest-cards {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    .interest-card {
      background-color: white;
      height: 400px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .interest-image {
        width: 80%;
        align-self: center;
      }
      button {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #fa5959;
        font-weight: 700;
        height: 50px;
        padding: 0;
        #btn-content {
          p {
            color: #fa5959;
          }
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
`;
