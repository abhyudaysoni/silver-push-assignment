import React from "react";
import { Container } from "./styles.js";
import YouTube from "react-youtube";
import vids from "../../../constants/vids.json";
export const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key={YOUR_API_KEY}`;

const Modal = () => {
  console.log(vids.items);
  const id = Math.floor(Math.random() * vids.items.length);
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const options = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <Container>
      <YouTube
        videoId={vids.items[id].id}
        options={options}
        onReady={onPlayerReady}
      />{" "}
      ;
    </Container>
  );
};

export default Modal;
