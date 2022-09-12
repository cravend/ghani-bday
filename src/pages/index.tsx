import Countdown from "react-countdown";

import Page from "../components/page";

const Index = () => (
  <Page
    header={{
      full: true,
      children: (
        <>
          <h1>Something big is coming soon...</h1>
          <Countdown date="2022-09-27" />
        </>
      ),
    }}
  />
);

export default Index;
