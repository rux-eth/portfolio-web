import Layout from "@src/components/layouts/pages";
import WorkPage from "@src/components/workPage";
import { WorkInfo } from "@src/types";
import { NextPage } from "next";
const info: WorkInfo = {
  title: "Personal Site",
  description:
    "Website for clients to check work progress and to display my work experience.",
  thumbnail: "/assets/thumbnails/portfolio-site.png",
  status: "Building",
  languages: new Set(["Typescript"]),
  stack: new Set(["NextJS/ReactJS"]),
  website: "maxrux.dev",
};
const Portfolio: NextPage = () => {
  return (
    <Layout title={info.title}>
      <WorkPage
        title={info.title}
        description={info.description}
        thumbnail={info.thumbnail}
        status={info.status}
        languages={info.languages}
        stack={info.stack}
        website={info.website}
      >
        <div className="h-screen"></div>
      </WorkPage>
    </Layout>
  );
};
export default Portfolio;
