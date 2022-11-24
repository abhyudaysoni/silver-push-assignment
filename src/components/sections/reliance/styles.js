import styled from "styled-components";
import brushStroke from "../../../assets/sections/reliance/brush-stroke.svg";
import blob from "../../../assets/sections/reliance/blob.svg";

export const Container = styled.section`
  margin: 10rem 0;
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 800px;
  background-image: url(${blob});
  background-size: cover;
  .section-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: auto;
    height: 400px;
    button {
      background: #f26b5b;
      border-radius: 5px;
      font-weight: 600;
      font-size: 20px;
      color: white;
    }
    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin: 2rem 0;
    }
    p {
      font-size: 1.5rem;
    }
    .profile {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      #big-dots {
        align-self: flex-start;
        position: relative;
        top: 0;
      }
      #profile-img {
        align-self: center;
        position: relative;
        left: -90px;
        top: 50px;
      }
      .profile-details {
        align-self: flex-end;
        justify-self: end;
        position: relative;
        left: -150px;
        top: 120px;
        p {
          font-size: 1rem;
        }
      }
    }
  }
  .section-2 {
    display: block;
    height: 80%;
    margin: auto;
    width: 100%;
    align-items: center;
    .illustration-container {
      background-image: url(${brushStroke});
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
      height: 100%;
      margin: auto;
      justify-content: center;
      align-items: center;
    }
    #illustration-section-2 {
      width: 80%;
      align-self: center;
    }
  }
`;
