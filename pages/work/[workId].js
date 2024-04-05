import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { projectsData } from '../../data/data'; 
import MyAccordion from "../../components/MyAccordion";
import Image from "next/image";
import Link from "next/link";
import Subheading from "../../components/SubHeading";

const WorkIdPage = ({ project }) => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="pt-36 mx-auto flex flex-col text-gray-Z00">
      {project ? (
        <div>
          <h1 className="text-3xl text-center mt-14 mb-3 font-bold pb-4 text-gray-700">{project.title}</h1>
          <div className="mb-8">
            <Image
              src={project.images[0].path} 
              alt={project.images[0].title}
              width={800}
              height={600} 
              quality={95}
              className="w-full sm:max-w-[50%] mx-auto my-1 rounded-2xl max-w-[80vw]"
            />
          </div>
          <div className="container text-center max-w-[60rem] mx-auto ">
          
            <p className="py-10 text-sm sm:text-lg text-black/700 ">{project.description}</p>

            <Subheading>Project Overview</Subheading>
            <p className="py-10 px-2 text-sm sm:text-lg">{project.overview}</p>
            <Subheading>Tool I Used</Subheading>
            <div className="my-4 text-black">
              {project.tags.map((tag, i) => (
                <span className="px-2 text-xl" key={i}>{tag}</span>
              ))}
            </div>

            <div className="container max-w-[60rem] mx-auto text-gray-200 dark:text-gray-900 ">
        
              <div className="flex justify-center my-16">
                <button className="text-sm sm:text-lg px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 text-white bg-gradient-to-br from-blue-400 via-blue-700 to-blue-400 	border border-white transition duration-200 transform hover:translate-y-1" href={project.liveSite}>Live Site</button>



                <button className="text-sm sm:text-lg px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-400 via-blue-700 to-blue-400 	border border-white transition duration-300 transform hover:translate-y-1" href={project.gitHub}>GitHub</button>
              </div>
            </div>
           
            <MyAccordion project={project} />

          </div>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { workId: project.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch project data using params.workId
  const project = projectsData.find((project) => project.slug === params.workId);
  
  return { props: { project } };
}

export default WorkIdPage;
