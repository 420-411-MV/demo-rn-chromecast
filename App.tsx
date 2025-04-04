import { Text, View } from "react-native";
import { CastButton } from "react-native-google-cast";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { PlayButton } from "./components/PlayButton";
import { initVideo } from "./util/initVideo.jsx";

export default function App() {
  const {
    handlePlayPause,
    startVideo,
    stopVideo,
    isPlay,
    isStarted,
    showPlay,
    status,
  } = initVideo();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <View style={s.workspace}>
          <Text>Bienvenu au DBill Cast avec React Native! v1.3</Text>
          <Text>Status : {status}</Text>
          <CastButton style={s.castButton} />
          <PlayButton
            showPlay={showPlay}
            isPlay={isPlay}
            isStarted={isStarted}
            startVideo={startVideo}
            stopVideo={stopVideo}
            handlePlayPause={handlePlayPause}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
