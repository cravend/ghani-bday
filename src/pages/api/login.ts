// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    username: "cravend",
    password: "oJXuVU-vUQyg@!2fZDwMbLY8",
  },
  {
    username: "ghani",
    password: "r-bZzGUGoXE8ofZQTDTqgmsw",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  if (_req.method === "POST") {
    const { username, password } = _req.body as {
      username: string;
      password: string;
    };
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  }
}
