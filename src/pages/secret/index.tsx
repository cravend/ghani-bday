import Link from "next/link";

import Page from "../../components/page";

const Secret = () => (
  <Page header={{ children: <h1>Digital Hub</h1> }} isAuth>
    <h2>Welcome, Ghani, to your digital hub!</h2>
    <h3>FAQs</h3>
    <details>
      <summary>What&apos;s a digital hub?</summary>
      <p>
        I stole 10BVision&apos;s idea. It&apos;s a place where you can find all
        the information you need to know about me. It&apos;s also a place where
        I can put all the things I&apos;m working on and share them with you.
      </p>
    </details>
    <hr />
    <h3>Quick Links</h3>
    <ul>
      <li>
        <Link href="/secret/status">Status</Link>
      </li>
    </ul>
    <hr />
    <h3>Projects</h3>
    <ul>
      <li>
        <Link href="/secret/projects/desktop">Desktop Utility!</Link>
      </li>
    </ul>
  </Page>
);

export default Secret;
