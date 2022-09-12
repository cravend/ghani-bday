import Page from "../../../components/page";

const Code = () => (
  <Page
    header={{ children: <h1>Request two-factor authentication code</h1> }}
    isAuth
  >
    <p>
      Your two-factor authentication code has been mailed to your address on
      file. Please allow for 5–7 business days of processing time.
    </p>
  </Page>
);

export default Code;
