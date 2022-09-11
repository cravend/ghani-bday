import { useState } from "react";

import Footer from "../../../components/footer";

const Code = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  if (!isSubmitted) {
    return (
      <>
        <main>
          <div>
            <h1>Request two-factor authentication code</h1>
            <label htmlFor="username">
              Username
              <input required type="string" name="username" id="username" />
            </label>
            <button type="submit" onClick={() => setIsSubmitted(true)}>
              Request code
            </button>
          </div>
        </main>
        <Footer isAuth />
      </>
    );
  }
  return (
    <>
      <main>
        <div>
          <h1>Request two-factor authentication code</h1>
          <p>
            Your two-factor authentication code has been mailed to your address
            on file. Please allow for 5–7 business days of processing time.
          </p>
        </div>
      </main>
      <Footer isAuth />
    </>
  );
};

export default Code;
