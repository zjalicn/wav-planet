import AudioPlayer from "react-h5-audio-player";
import { useColorModeValue } from "@chakra-ui/react";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  console.log();
  return (
    <AudioPlayer
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      showFilledVolume={true}
      customAdditionalControls={[]}
      style={{ background: bgColor }}
    />
  );
};

export default Player;
