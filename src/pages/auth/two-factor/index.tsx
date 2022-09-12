import Link from "next/link";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import { useState } from "react";

import Page from "../../../components/page";

import type { FormEvent } from "react";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const username = router.query.username as string;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const target = event.target as typeof event.target & {
      token: { value: string };
    };

    // Get data from the form.
    const data = {
      username,
      token: target.token.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/two-factor";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    fetch(endpoint, options)
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-void
          void router.push("/secret");
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        /* discard */
      });
  };

  return (
    <Page header={{ children: <h1>Two-Factor Authentication</h1> }} isAuth>
      <form onSubmit={handleSubmit}>
        <label htmlFor="token">
          2FA: <input required type="text" name="token" id="token" />
        </label>
        <br />
        <span style={{ fontSize: "small" }}>
          <Link href="/auth/two-factor/request">
            Request two-factor authentication code
          </Link>
        </span>
        <br />
        <button type="submit">Login</button>
        <br />
      </form>
      {isError && (
        <p style={{ color: "red" }}>
          Invalid details. Have you requested a new two-factor authentication
          code?
        </p>
      )}
    </Page>
  );
};

export default Login;
