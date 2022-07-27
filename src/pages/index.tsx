import Layout from "@src/components/layout";
import Masthead from "@src/components/masthead";
import TLDR from "@src/components/tldr";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <Masthead />

      <Layout>
        <TLDR />
      </Layout>
    </>
  );
};
export default Home;
