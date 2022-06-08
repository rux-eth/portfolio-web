import AboutMe from "@components/aboutme";
import { Container } from "@mui/material";
import Masthead from "@src/components/masthead";
import Wrapper from "@utils/hoc/wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <div className="min-w-screen min-h-screen bg-primary-dark">
        <Container>
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
        </Container>
      </div>
    </>
  );
};

export default Wrapper(Home);
