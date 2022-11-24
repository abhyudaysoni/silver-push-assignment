import styled from "styled-components";
import illustrationBg from "../../assets/footer/illustration-bg.svg";
import footerBg1 from "../../assets/footer/footer-bg1.png";

export const Container = styled.footer`
  background-image: url(${footerBg1});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 1440px 400px;
  height: 800px;
  .footer-description {
    padding: 3rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1440px;
    margin: auto;
    .footer-details {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 60%;
      margin: auto;
      h1 {
        font-size: 3rem;
        font-weight: 700;
        margin: 2rem 0;
      }
      p {
        font-size: 1rem;
      }
      button {
        background: #f26b5b;
        border-radius: 5px;
        font-weight: 600;
        font-size: 20px;
        color: white;
        margin: 2rem 0;
      }
    }
    .illustration-container {
      display: flex;
      flex-wrap: wrap;
      padding: 2rem;
      width: 700px;
      background-image: url(${illustrationBg});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .footer-footnotes {
    text-align: center;
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
    .utils {
      display: flex;
      justify-content: space-between;
      p {
        cursor: pointer;
      }
    }
    .copyrights {
    }
    img {
      width: 100%;
      position: absolute;
    }
  }
`;
