import Layout from "@src/components/layout";
import TLDR from "@src/components/tldr";
import Wrapper from "@utils/hoc/wrapper";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Layout>
      <TLDR />
    </Layout>
  );
};
/* hi */
export default Wrapper(Home);
