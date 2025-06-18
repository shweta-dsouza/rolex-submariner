import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { videoSlides, smallVideoSlides } from "../constants";
import { pauseSvg, playSvg, replaySvg } from "../utils";

const VideoSlider = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [carouselSlides, setCarouselSlides] = useState(window.innerWidth < 760 ? smallVideoSlides : videoSlides)
  const [video, setVideo] = useState({
    videoId: 0,
    startVideoPlay: false,
    isVideoEnd: false,
    isVideoPlaying: false,
    isLastVideo: false
  });
  const [data, setData] = useState([]);

  const { videoId, startVideoPlay, isVideoEnd, isVideoPlaying, isLastVideo } = video;

  useGSAP(() => {
    const loadAndAnimate = async () => {
      const { default: gsap } = await import('gsap');
      const pluginModule = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(pluginModule.default);

      gsap.to('#carousel', {
        transform: `translateX(${-100 * videoId}%)`,
        duration: 1.5,
        ease: 'power2.inOut'
      })

      gsap.to('#video', {
        scrollTrigger: {
          trigger: '#video',
          toggleActions: 'restart none none none' //  {onEnter, onLeave, onEnterBack, onLeaveBack}
        },
        onComplete: () => {
          setVideo(prev => ({ ...prev, startVideoPlay: true, isVideoPlaying: true }))
        }
      })
    }
    loadAndAnimate();
  }, [videoId, isVideoEnd])

  const handleVideoSource = () => {
    if (window.innerWidth < 760) {
      setCarouselSlides(smallVideoSlides)
    } else {
      setCarouselSlides(videoSlides)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSource);

    return () => {
      window.removeEventListener('resize', handleVideoSource)
    }
  }, [])

  useEffect(() => {
    if (data.length > 3) {
      if (!isVideoPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startVideoPlay && videoRef.current[videoId].play();
      }
    }
  }, [data, startVideoPlay, isVideoPlaying, videoId])

  useEffect(() => {
    const onLoadAnimate = async () => {
      const { default: gsap } = await import('gsap');

      let currProgress = 0;
      let currSpan = videoSpanRef.current;

      if (currSpan[videoId]) {
        // animate the slider progress of video
        let anim = gsap.to(currSpan[videoId], {
          onUpdate: () => {
            const animProgress = Math.ceil(anim.progress() * 100);
            if (animProgress != currProgress) {
              currProgress = animProgress;

              gsap.to(videoDivRef.current[videoId], {
                width: window.innerWidth < 760 ? '10vw' : '4vw'
              })

              gsap.to(currSpan[videoId], {
                width: `${currProgress}%`,
                backgroundColor: 'white'
              })
            }
          },
          onComplete: () => {
            if (isVideoPlaying) {
              gsap.to(videoDivRef.current[videoId], {
                width: '12px'
              })
              gsap.to(currSpan[videoId], {
                backgroundColor: '#afafaf'
              })
            }
          }
        })

        if (videoId === 0) {
          anim.restart();
        }

        const animProgressUpdate = () => {
          anim.progress(videoRef.current[videoId]?.currentTime / videoSlides[videoId].videoDuration)
        }

        if (isVideoPlaying) {
          gsap.ticker.add(animProgressUpdate);
        } else {
          gsap.ticker.remove(animProgressUpdate);
        }
      }
    }
    onLoadAnimate()
  }, [startVideoPlay, videoId])

  const handleMetaData = (i, e) => {
    setData(prev => [...prev, e])
  }

  const handleVideoPlay = () => {
    setVideo((prev) => ({
      ...prev, isVideoPlaying: true
    }))
  }

  const handleVideoActions = (action, i) => {
    switch (action) {
      case 'replay':
        setVideo(prev => ({ ...prev, isLastVideo: false, videoId: 0 }))
        break;

      case 'play':
        setVideo(prev => ({ ...prev, isVideoPlaying: !prev.isVideoPlaying }))
        break;

      case 'pause':
        setVideo(prev => ({ ...prev, isVideoPlaying: !prev.isVideoPlaying }))
        break;

      case 'end':
        setVideo(prev => ({ ...prev, isVideoEnd: true, videoId: i + 1 }))
        break;

      case 'last':
        setVideo(prev => ({ ...prev, isLastVideo: true }))
        break;

      default:
        return video;
    }
  }

  const handleVideoEnd = (index) => {
    if (index === 3) {
      handleVideoActions('last');
    } else {
      handleVideoActions('end', index);
    }
  }

  return (
    <>
      <div className="flex items-center">
        {carouselSlides.map((item, idx) => (
          <div id="carousel" key={item.id} className="sm:pr-20 pr-10">
            <div className="video-container">
              <div className="w-full h-full bg-black rounded-xl overflow-hidden flex-center">
                <video id="video" playsInline={true} preload="auto" muted
                  poster={item.thumbnail}
                  ref={(e) => (videoRef.current[idx] = e)}
                  onEnded={() => handleVideoEnd(idx)}
                  onPlay={() => handleVideoPlay}
                  onLoadedMetadata={(e) => handleMetaData(idx, e)}>
                  <source src={item.videoSrc} type="video/mp4" />
                </video>
              </div>

              <div className="absolute sm:top-12 top-4 left-[5%] z-10">
                {item.descriptionList.map(desc => (
                  <p key={desc} className="md:text-xl text-sm font-medium">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-7">
        <div className="sm:py-5 py-4 sm:px-7 px-5 bg-zinc-700 backdrop-blur rounded-full flex-center">
          {videoRef.current.map((_, idx) => (
            <span key={idx} ref={(e) => (videoDivRef.current[idx] = e)}
              className="relative mx-2 sm:w-3 w-1 sm:h-3 h-1 bg-zinc-500 rounded-full">
              <span className="absolute rounded-full h-full w-full" ref={(e) => (videoSpanRef.current[idx] = e)} />
            </span>
          ))}
        </div>

        <button className="ml-4 sm:p-4 p-2 bg-zinc-700 backdrop-blur rounded-full flex-center"
          onClick={isLastVideo ? () => handleVideoActions('replay') :
            isVideoPlaying ? () => handleVideoActions('pause') :
              () => handleVideoActions('play')
          }
        >
          <img src={isLastVideo ? replaySvg : isVideoPlaying ? pauseSvg : playSvg}
            alt={isLastVideo ? "replay" : isVideoPlaying ? "pause" : 'play'} />
        </button>
      </div>
    </>
  )
}

export default VideoSlider;