import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import socket from "../services/socket";

export default function Video(props) {
  const [playPauseCounter, setPlayPauseCounter] = useState(0);
  const [syncCounter, setSyncCounter] = useState(0);
  const [event, setEvent] = useState(null);

  const opts = {
    display: "flex",
    playerVars: {
      autoplay: 1,
    },
  };

  const togglePause = () => {
    setPlayPauseCounter((prevCounter) => prevCounter + 1);
  };

  const sync = () => {
    setSyncCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    if (event) {
      console.log("Player state:", event.target.getPlayerState());

      socket.emit("ping", {
        action: "playpause",
        state: event.target.getPlayerState(),
      });
    }
  }, [playPauseCounter]);

  useEffect(() => {
    if (event) {
      console.log("Player time:", event.target.getCurrentTime());
      console.log("syncCounter:", syncCounter);
      // event.target.pauseVideo();
      socket.emit("ping", {
        action: "sync",
        timestamp: event.target.getCurrentTime(),
      });
    }
  }, [syncCounter]);

  useEffect(() => {
    const messageHandler = (message) => {
      if (event) {
        const target = event.target;
        if (message.action === "sync" && target) {
          target.seekTo(message.timestamp);
          // target.pauseVideo();
          // target.playVideo();
        } else if (message.action === "playpause" && target) {
          if (message.state === 2) target.pauseVideo();
          else target.playVideo();
        } else if (message.action === "newuser" && target && props.admin) {
          console.log("F");
          sync();
        }
      }
    };

    socket.on("ping", messageHandler);
    return () => {
      socket.off("ping", messageHandler);
    };
  }, [event]);

  return (
    <>
      <YouTube
        videoId={props.videoId}
        opts={opts}
        onReady={(e) => {
          setEvent(e);
          if (!props.admin) {
            console.log("Not Admin");
            socket.emit("ping", {
              action: "newuser",
            });
          }
        }}
        onStateChange={(e) => {
          setEvent(e);
          // console.log("Player state:", e.target.getPlayerState());
          // const playerState = e.target.getPlayerState();
          // socket.emit("ping", { action: "playpause", state: playerState });
          togglePause();
        }}
      />
      {/* <button id="play-pause-btn" onClick={togglePause}>
        Play/Pause
      </button> */}
      <button id="sync-btn" onClick={sync}>
        Sync
      </button>
    </>
  );
}
