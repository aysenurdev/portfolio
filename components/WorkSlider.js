import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projectsData } from '../data/data';

const WorkSlider = () => {
  const workSlider = {
    slides: [
      {
        images: [
          {
            title: 'CineDB Movie Database',
            path: '/lapp1.png',
            projectId: 1,
          },
          {
            title: 'Portfolio Site',
            path: '/girl-port.png',
            projectId: 2,
          },
          {
            title: 'Mountaintop Burger',
            path: '/burger.png',
            projectId: 3,
          },
          {
            title: 'Whack a monkey',
            path: '/monkey.png',
            projectId: 4,
          },
        ],
      },
    ],
  };

  const router = useRouter();

  const handleImageClick = (projectId) => {
    const project = projectsData.find((project) => project.id === projectId);
    if (project) {
      router.push(`/work/${project.slug}`);
    }
  };

  return (
    <div className="mt-10 mb-16  grid gap-12 justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:mt-20 lg:mt-20 xl:mt-20">
      {workSlider.slides.map((slide, slideIndex) => (
        <React.Fragment key={slideIndex}>
          {slide.images &&
            slide.images.map((image, imageIndex) => {
              return (
                <div
                  className="relative rounded-lg overflow-hidden flex flex-col items-center group border border-gray-300 p-4 md:p-2 lg:p-4 hover:transform hover:translate-y-1 hover:shadow-lg transition-all duration-300"
                  key={imageIndex}
                  style={{ flex: '1 0 48%', marginBottom: '20px', minWidth: '250px' }}
                >
                  <div className="flex items-center justify-center relative">
                    <Image
                      src={image.path}
                      width={230}
                      height={50}
                      layout="intrinsic"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-xs sm:text-sm text-gray-600">{image.title}</h2>
                    <a
                      className="inline-flex items-center mt-1 text-xs sm:text-sm font-cinzel font-semibold text-secondary  hover:text-secondary/400 transition duration-300 transform hover:translate-y-1 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleImageClick(image.projectId);
                      }}
                    >
                      More Info
                      <svg
                        className="w-4 h-4 ml-0.4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <svg
                        className="w-4 h-4 ml-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkSlider;
