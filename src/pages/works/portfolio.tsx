import Layout from "@src/components/layout";
import WorkPage from "@src/components/workPage";
import { WorkInfo } from "@src/types";
import { NextPage } from "next";
const info: WorkInfo = {
  title: "Portfolio Site",
  description: "Website to display my portfolio and work experience",
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
        <div></div>
      </WorkPage>
    </Layout>
  );
};
export default Portfolio;
