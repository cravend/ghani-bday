import Link from "next/link";

import Page from "../../../components/page";

const Desktop = () => (
  <Page header={{ children: <h1>Desktop</h1> }} isAuth>
    <h2>Welcome, Ghani, to your digital hub!</h2>
    <h3>Desktop Utility!</h3>
    <p>Here is v1.0.1 of the desktop utility.</p>
    <p>
      <a href="/projects/desktop_util_v1-0-1.zip" download>
        Download
      </a>
    </p>
    <p>
      <Link href="/secret">Back to main</Link>
    </p>
  </Page>
);

export default Desktop;
