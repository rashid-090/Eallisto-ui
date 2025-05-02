import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ReactPlayer from "react-player";
import { Logowht } from "../assets";
import { Link } from "react-router-dom";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Sample video data with thumbnails and descriptions
  const videos = [
    {
      id: 1,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746012297/dji_fly_20250426_160138_0287_1745918704619_video_u18c9z.mov`,
      title: "2.5MW - land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013529/Screenshot_2025-04-30_171453_fml2rh.png",
      description:
        "This is a detailed description of Project 1 explaining what it is about and the technologies used.",
    },
    {
      id: 2,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746012292/BNGLR_SITE_04_005_imvfzd.mov`,
      title: "425KW - land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013525/Screenshot_2025-04-30_171429_gwqvig.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 3,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746012289/BNGLR_SITE_05_009_d2hrgp.mov`,
      title: "land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013527/Screenshot_2025-04-30_171342_o34i1a.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 4,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746012285/BNGLR_SITE_02_001_ssbeks.mov`,
      title: "50KW - land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013527/Screenshot_2025-04-30_171405_nrtych.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 5,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746013154/BNGLR_SITE_06_05_-_COMPRESS_ofp7ko.mp4`,
      title: "20MW - land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013527/Screenshot_2025-04-30_171202_na0hzc.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 6,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746013141/BNGLR_SITE_07_01_-_COMPRESS_iu4kjg.mp4`,
      title: "3MW - land",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746013526/Screenshot_2025-04-30_171229_cbqbhd.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 7,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746020792/WhatsApp_Video_2025-04-30_at_19.12.57_ec0150c8_tywtdg.mp4`,
      title: "10KW - roof",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746020736/Screenshot_2025-04-30_191400_jt694a.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 8,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746020787/WhatsApp_Video_2025-04-30_at_19.12.58_2dc4ac00_jw6hbg.mp4`,
      title: "12KW - roof",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746020744/Screenshot_2025-04-30_191434_jfsxkp.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
    {
      id: 9,
      url: `https://res.cloudinary.com/dichoxvts/video/upload/v1746020787/WhatsApp_Video_2025-04-30_at_19.13.56_01446f16_howzee.mp4`,
      title: "12KW - roof",
      thumbnail:
        "https://res.cloudinary.com/dichoxvts/image/upload/v1746020737/Screenshot_2025-04-30_191508_bkmovr.png",
      description:
        "Description for Project 2 highlighting its key features and development process.",
    },
  ];

  const openLightbox = (index) => {
    setCurrentVideo(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative group overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative pt-[56.25%] bg-black">
                {/* Thumbnail or Video Player */}
                {hoveredVideo === video.id ? (
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={false}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                ) : (
                  <>
                    {/* Thumbnail with play button overlay */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute top-0 left-0 w-full h-full object-cover object-left-top"
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
              </div>
              <div className="absolute bottom-3 right-3">
                <img className="w-16 object-contain" src={Logowht} alt="" />
              </div>
              {video.title &&(
                 <div className="absolute bottom-3 left-3">
                 {/* Description is intentionally not shown here */}
                 <h1 className="text-xs text-white uppercase">{video.title} Project</h1>
               </div>
              )}
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={videos.map((video) => ({
            type: "video",
            sources: [
              {
                src: video.url,
                type: "video/mp4",
              },
            ],
            title: video.title,
            description: video.description, // Include description for lightbox
          }))}
          index={currentVideo}
          controller={{ closeOnBackdropClick: true }}
          render={{
            slide: ({ slide }) => (
              <div className="w-full h-full flex flex-col">
                <div className="flex-grow relative">
                  <ReactPlayer
                    url={slide.sources[0].src}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={lightboxOpen}
                    style={{ position: "absolute", top: 0, left: 0 }}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload", // This disables the download button
                        },
                      },
                    }}
                  />
                </div>
                <div className="absolute bottom-32 md:bottom-10 right-5 xl:right-40">
                  <img
                    className="w-20 md:w-24 object-contain"
                    src={Logowht}
                    alt=""
                  />
            
                </div>
                <div className="absolute bottom-32 md:bottom-10 left-5 xl:left-40">
                {/* Description is intentionally not shown here */}
                {slide.title && (
                  <h3 className="text-lg font-medium uppercase text-gray-900 dark:text-white mb-2">
                    {slide.title} - Project
                  </h3>
                )}
              </div>
                {/* <div className="p-4 bg-white dark:bg-gray-800">
                {slide.title && (
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {slide.title}
                  </h3>
                )}
                {slide.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {slide.description}
                  </p>
                )}
              </div> */}
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
            Our experts are standing by to help you find the right solutions for
            your needs.
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
