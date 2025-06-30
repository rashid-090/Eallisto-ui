import React, { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ReactPlayer from "react-player";
import { Logowht } from "../assets";
import { Link } from "react-router-dom";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const playerRefs = useRef([]);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videos = [
    {
      id: 1,
      url: "https://youtu.be/ovlc72Z6sXU?si=5S4dCDvEDFocN-EV",
      title: "Video 1",
    },
    {
      id: 2,
      url: "https://youtu.be/vx8nVI9VZ3M?si=YfbRNhuVJ9ph-ZzU",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://youtu.be/q8nleXaO_DM?si=nvrOOPM23JoHv4lW",
      title: "Video 3",
    },
    {
      id: 4,
      url: "https://youtu.be/KPccVRl4OJg?si=RkFDs0VVUGnq2-fP",
      title: "Video 4",
    },
    {
      id: 5,
      url: "https://youtu.be/7jPrgquJUh4?si=NY29w3pBbnRfG0xO",
      title: "Video 5",
    },
    {
      id: 6,
      url: "https://youtu.be/OFctUw9QVY0?si=oDOoTU4kveMjJWPm",
      title: "Video 6",
    },
    {
      id: 7,
      url: "https://youtu.be/ptH3sp-DnFg?si=kFWD5uLbpgioLqRK",
      title: "Video 7",
    },
    {
      id: 8,
      url: "https://youtu.be/Ta2NrkqgXSI?si=7Bw6onH-gAJ8XXpM",
      title: "Video 8",
    },
  ].map((video, index) => {
    const youtubeId = getYouTubeId(video.url);
    return {
      ...video,
      thumbnail: youtubeId
        ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
        : "",
      uniqueId: `${video.id}-${index}`,
    };
  });

  const openLightbox = (index) => {
    setCurrentVideo(index);
    setLightboxOpen(true);
  };

  const stopAllVideos = () => {
    playerRefs.current.forEach((ref) => {
      const internal = ref?.getInternalPlayer?.();
      if (internal?.pauseVideo) {
        internal.pauseVideo(); // YouTube
      } else if (internal?.pause) {
        internal.pause(); // HTML5 video
      }
    });
  };

  const handleClose = () => {
    stopAllVideos();
    setLightboxOpen(false);
  };

  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.uniqueId}
              className="relative group overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredVideo(video.uniqueId)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative pt-[56.25%] bg-black">
                {hoveredVideo === video.uniqueId ? (
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    playing
                    muted
                    loop
                    controls={false}
                    style={{ position: "absolute", top: 0, left: 0 }}
                    config={{
                      youtube: {
                        playerVars: {
                          fs: 0,
                          modestbranding: 1,
                          rel: 0,
                        },
                      },
                    }}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x450";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
                      <svg
                        className="w-16 h-16 text-white opacity-100 group-hover:opacity-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </>
                )}

                {/* 🔸 Clickable overlay */}
                <div
                  className="absolute inset-0 z-10"
                  onClick={() => openLightbox(index)}
                />
              </div>

              {/* Logo */}
              <div className="absolute bottom-3 left-3">
                <img
                  className="w-16 object-contain opacity-70"
                  src={Logowht}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={handleClose}
          index={currentVideo}
          slides={videos.map((video) => ({
            type: "video",
            sources: [
              {
                src: video.url,
                type: video.url.includes("youtube")
                  ? "video/youtube"
                  : "video/mp4",
              },
            ],
            title: video.title,
          }))}
          controller={{ closeOnBackdropClick: true }}
          carousel={{ finite: true }}
          on={{
            view: ({ index }) => {
              stopAllVideos(); // Pause previous video
              setCurrentVideo(index);
            },
          }}
          render={{
            slide: ({ slide, offset, rect, index }) => (
              <div className="w-full h-full flex flex-col relative">
                <div
                  className="flex-grow relative"
                  style={{
                    width: rect.width,
                    height: rect.height,
                  }}
                >
                  <ReactPlayer
                    ref={(ref) => (playerRefs.current[index] = ref)}
                    url={slide.sources[0].src}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={lightboxOpen && offset === 0}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: offset === 0 ? 1 : 0.5,
                      transition: "opacity 0.3s",
                    }}
                    config={{
                      youtube: {
                        playerVars: {
                          controls: 1,
                          disablekb: 1,
                          modestbranding: 1,
                          rel: 0,
                          fs: 0,
                        },
                      },
                      file: {
                        attributes: {
                          controlsList:
                            "nodownload noremoteplayback noplaybackrate nofullscreen",
                          disablePictureInPicture: true,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ),
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 bg-main text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your energy infrastructure?
          </h2>
          <p className="text-xl mb-8">
            Our experts are standing by to help you find the right solutions for your needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-white text-main hover:bg-gray-100 font-semibold py-2 px-8 rounded-full xl:text-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
