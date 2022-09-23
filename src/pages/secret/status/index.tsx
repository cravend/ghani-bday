import Link from "next/link";

import Page from "../../../components/page";

const Status = () => (
  <div dir="rtl" lang="ar">
    <Page header={{ children: <h1>حالة</h1> }} isAuth>
      <h2>مرحبًا بك ، غني ، في مركزك الرقمي!</h2>
      <p>
        <strong>ها هي الحالة</strong>: ١ز٢٩ور٧٨٠٤٩٥٨٧٧١٠٧
      </p>
      <Link href="/secret">العودة إلى الرئيسية</Link>
    </Page>
  </div>
);

export default Status;
