import { Container } from "@mui/material";
import Masthead from "@src/components/masthead";
import TLDR from "@src/components/tldr";
import Wrapper from "@utils/hoc/wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <div className="bg-primary-dark">
        <Container>
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
          <TLDR />
        </Container>
      </div>
    </>
  );
};
/* hi */
export default Wrapper(Home);
