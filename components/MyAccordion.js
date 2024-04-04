import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

export default function MyAccordion({ project }) {
  return (
    <div className="mb-20">
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="sm:text-xl font-medium">
            Development
          </div>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-blue-100">
          <div>
            <div className="flex flex-col sm:flex-row text-sm sm:text-[14px] justify-center items-center gap-5 p-4">
              <Image
                className="w-full "
                src={project.images[0].path}
                width={200}
                height={400}
                alt="accordionImage"
              />
              <p className="sm:text-lg/10">{project.development}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="sm:text-xl font-medium">Highlights</div>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-blue-100">
          <div>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base justify-center items-center gap-5">
              <Image
                className="w-full"
                src={project.accordionImage2}
                width={200}
                height={200}
                alt="accordionImage"
              />
              <p className="sm:text-lg/10">{project.highlights}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="bg-white sm:text-xl font-medium">What I learned</div>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-blue-100">
          <div>
            <div className="flex flex-col text-sm sm:text-base">
              <p className="p-4 sm:text-lg/10">{project.whatILearned}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
