import Layout from "@src/components/layouts/main";
import TLDR from "@src/components/tldr";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Layout>
      <TLDR />
    </Layout>
  );
};
export default Home;
