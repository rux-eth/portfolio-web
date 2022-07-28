import { CommentedHeader } from "@src/components/commented";
import Layout from "@src/components/layouts/pages";
import { works } from "@src/components/works";
import { NextPage } from "next";

const Works: NextPage = () => {
  return (
    <Layout title="Works">
      <div className="text-white text-center flex flex-col space-y-3">
        <CommentedHeader content="All Works" textSize="7vw" />
        <CommentedHeader content="Filters Coming Soon..." textSize="4vw" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 p-6">
          {works.getAllPreviews()}
        </div>
      </div>
    </Layout>
  );
};
export default Works;
