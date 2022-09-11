// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    username: "admin",
    token: process.env.TWO_FACTOR_SECRET_ADMIN,
  },
  {
    username: "cravend",
    token: process.env.TWO_FACTOR_SECRET_CRAVEND,
  },
  {
    username: "ghani",
    token: process.env.TWO_FACTOR_SECRET_GHANI,
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  if (_req.method === "POST") {
    const { username, token } = _req.body as {
      username: string;
      token: string;
    };
    const user = users.find(
      (u) => u.username === username && u.token === token
    );
    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  }
}
