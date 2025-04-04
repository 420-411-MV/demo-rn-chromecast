import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Button, TouchableHighlight, View } from "react-native";
import GoogleCast, { useRemoteMediaClient } from 'react-native-google-cast';

export const PlayButton = ({isPlay, isStarted, showPlay, startVideo, stopVideo, handlePlayPause}) => {
    const client = useRemoteMediaClient(); 
      
    const sessionManager = GoogleCast.getSessionManager();
    
    let iconePlayPause = <AntDesign name="play" size={60} color="black" />;
    if (isPlay) {
        iconePlayPause = <AntDesign name="pause" size={60} color="black" />;
    }

    // https://docs.expo.dev/guides/icons/
    // https://ant.design/components/icon

    return (
        <>
           <View style={{ display: showPlay ? 'flex' : 'none' }}>
                <View style={{ display: !isStarted ? 'flex' : 'none' }}>
                    <Button onPress={startVideo} title="Start" >
                        
                    </Button>
                </View>

                <View style={{ display: isStarted ? 'flex' : 'none' }}>
                    <Button onPress={stopVideo} title="Stop" >
                        
                    </Button>
                </View>

                <TouchableHighlight onPress={handlePlayPause} >
                    {iconePlayPause}
                </TouchableHighlight>
            </View>
        </>                    
    );
};