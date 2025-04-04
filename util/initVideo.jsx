import React, { useState } from 'react';
import GoogleCast, { useRemoteMediaClient } from 'react-native-google-cast';

export const initVideo = () => {
    const client = useRemoteMediaClient(); 
    const [showPlay, setShowPlay] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [status, setStatus] = useState('initial');
    
    const videoList = [
        'https://transfertco.ca/video/DBillPrelude.mp4',
        'https://transfertco.ca/video/DBillSpotted.mp4',
        'https://transfertco.ca/video/usa23_7_02.mp4',
    ];
    
    const sessionManager = GoogleCast.getSessionManager();

    React.useEffect(() => {
        const listener = sessionManager.onSessionStarted((session) => {
            setShowPlay(true);
            if (client) {
                client.loadMedia({
                    autoplay: true,
                    mediaInfo: {
                        contentUrl: videoList[0],
                        contentType: 'video/mp4'
                    },
                });

                const listenerPlayback = client.onMediaStatusUpdated((mediaStatus) => {
                    if (mediaStatus) {
                        setStatus("status updated = " + mediaStatus.playerState);
                    } else {
                        setStatus("no media status!");
                    }
                    
                });

                
                const listenerStarted = client.onMediaPlaybackStarted((mediaStatus) => {
                    setIsStarted(true);
                    if (mediaStatus) {
                        setStatus("status started updated = " +mediaStatus.playerState);
                    } else {
                        setStatus("no media status!");
                    }
                    
                });

                const listenerStoped = client.onMediaPlaybackEnded((mediaStatus) => {
                    setIsStarted(false);
                    if (mediaStatus) {
                        setStatus("status ended updated = " + mediaStatus.playerState);
                    } else {
                        setStatus("no media status!");
                    }
                    
                });

                const listenerProgress = client.onMediaProgressUpdated((streamPosition) => {
                    if (streamPosition) {
                        setStatus("stream pos = " +streamPosition);
                    } else {
                        setStatus("no media status!");
                    }
                    
                }, 1);

                startVideo();

            }
        });

        if (showPlay) {
            listener.remove()
        }

        return () => {}
    
    }, [client]);


    const startVideo = () => {
        client.loadMedia({
            autoplay: true,
            mediaInfo: {
                contentUrl: videoList[currentVideoIndex],
                contentType: 'video/mp4'
            },
        });
    }

    const stopVideo = () => {
        sessionManager.endCurrentSession();
    }

    const handlePlayPause = () => {

        if (isPlay) {
            client.pause();
            setIsPlay(false);
        } else {
            client.play();
            setIsPlay(true);
        }
    };

    return {
        handlePlayPause,
        startVideo,
        stopVideo,
        isPlay,
        isStarted,
        showPlay,
        status,
      };

};