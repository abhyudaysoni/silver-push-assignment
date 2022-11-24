import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
  padding: 0 5rem;
  z-index: 0;
  .section-1 {
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {
      color: white;
    }
    p {
      color: white;
    }
    .description {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
      }
      button {
        background: #f26b5b;
        border-radius: 5px;
        font-weight: 600;
        font-size: 20px;
        color: white;
      }
    }
    .description > * {
      margin: 0.5rem 0;
    }
    .illustration {
      display: flex;
    }
  }
  .section-2 {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    padding: 0 2rem;
    .profiles {
      display: flex;
      align-items: flex-end;
      .profile-container {
        width: 200px;
        margin: 0rem 2rem;
        img {
          width: 200px;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
`;
