// // pages/[workId].js
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import fs from 'fs';
// import path from 'path';

// const WorkDetailPage = ({ work }) => {
//   const router = useRouter();
//   const { workId } = router.query;

//   if (router.isFallback || !work) { // Check if work data is available
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{work.title}</h1>
//       <Image src={work.imagePath} width={500} height={300} alt="" />
//       <p>{work.description}</p>

//       <h2>Project Overview</h2>
//       <p>{work.projectOverview}</p>

//       <h2>Project Duration</h2>
//       <p>{work.projectDuration}</p>

//       <h2>Collaboration</h2>
//       <p>{work.collaboration}</p>

//       <h2>Role(s)</h2>
//       <p>{work.roles}</p>

//       <h2>Project Requirements</h2>
//       <p>{work.projectRequirements}</p>

//       <h2>LIVE SITE</h2>
//       <button onClick={() => window.open(work.liveSiteUrl)}>Visit Live Site</button>

//       <h2>See Other Projects</h2>
//       {/* Render other projects here */}
//     </div>
//   );
// };

// export default WorkDetailPage;

// export async function getStaticPaths() {
//   // Read works.json file
//   const filePath = path.join(process.cwd(), 'works.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   const worksData = JSON.parse(jsonData);

//   // Extract work IDs from worksData
//   const workIds = worksData.works.map((work) => work.id.toString());

//   // Create paths array for getStaticPaths
//   const paths = workIds.map((workId) => ({
//     params: { workId: workId },
//   }));

//   return { paths, fallback: true }; // Set fallback to true
// }

// export async function getStaticProps({ params }) {
//   // Read works.json file
//   const filePath = path.join(process.cwd(), 'works.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   const worksData = JSON.parse(jsonData);

//   // Find work item by ID
//   const workItem = worksData.works.find((work) => work.id === parseInt(params.workId));

//   return {
//     props: {
//       work: workItem || null, // Return null if work item is not found
//     },
//   };
// }


