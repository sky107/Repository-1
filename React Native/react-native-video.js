/*
Author : Siddharth Kumar Yadav
*/

//  npm install --save react-native-video
// npm install --save react-native-media-controls
//npm install --save react-native-slider
// cd ios pod install
// react native vector icons if needed

// import React in our code
import React, { useState, useRef } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";

//Import React Native Video to play video
import Video from "react-native-video";

//Media Controls to control Play/Pause/Seek and full screen
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";

import Modal from "react-native-modalbox";

const screen = Dimensions.get("window");
const App = () => {
  const show = React.useRef();
  const [isOpen, setIsOpen] = React.useState(true);
  const [flexVal, setFlexVal] = React.useState(0.3);
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState("content");

  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert("Oh! ", error);

  const exitFullScreen = () => {
    alert("Exit full screen");
  };

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);

    if (screenType == "content") {
      setScreenType("cc");
      setFlexVal(2);
    } else {
      setScreenType("content");
      setFlexVal(0.3);
    }
  };

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );

  const onSeeking = (currentTime) => setCurrentTime(currentTime);

  return (
    <>
      <View style={{ flex: flexVal }}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={videoPlayer}
          resizeMode={screenType}
          onFullScreen={isFullScreen}
          source={{
            uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4",
          }}
          style={styles.mediaPlayer}
          volume={10}
        />
        <MediaControls
          duration={duration}
          isLoading={isLoading}
          mainColor="dodgerblue"
          onFullScreen={onFullScreen}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          // playerState={playerState}
          progress={currentTime}
          toolbar={renderToolbar()}
        >
          {
            <MediaControls.Toolbar>
              <View style={styles.toolbar}>
                <Pressable
                  onPress={() => {
                    setIsOpen(true);
                  }}
                >
                  <Text>Siddharth</Text>
                </Pressable>
              </View>
            </MediaControls.Toolbar>
          }
        </MediaControls>
      </View>

      <Modal
        style={{
          width: screen.width - 80,
          height: 150,
          padding: 10,
          paddingTop: 12,
          borderRadius: 10,
        }}
        position="center"
        backdrop={true}
        ref={show}
        isOpen={isOpen}
        entry={"top"}
        backdropOpacity={0.07}
        animationDuration={0}
        onClosed={() => {
          setIsOpen(false);
        }}
      >
        <View style={{ flex: 2 }}>
          <Text style={{ fontWeight: "700" }}>Custom Confirmation</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.proceed}>PROCEED</Text>
          <Text style={styles.cancel}>CANCEL</Text>
        </View>
      </Modal>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    justifyContent: "center",
  },
  footer: { flexDirection: "row", justifyContent: "flex-end" },
  proceed: {
    backgroundColor: "dodgerblue",
    color: "white",
    padding: 2,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  cancel: {
    backgroundColor: "white",
    color: "black",
    padding: 2,
    paddingHorizontal: 10,
  },
});
