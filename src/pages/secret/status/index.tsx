import Link from "next/link";

import Page from "../../../components/page";

const Status = () => (
  <div dir="rtl" lang="ar">
    <Page header={{ children: <h1>حالة</h1> }} isAuth>
      <h2>مرحبًا بك ، غني ، في مركزك الرقمي!</h2>
      <p>الحالة ليست متاحة بعد.</p>
      <Link href="/secret">العودة إلى الرئيسية</Link>
    </Page>
  </div>
);

export default Status;
