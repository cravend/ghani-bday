import styles from "../styles/page.module.scss";

import Footer from "./footer";
import Header from "./header";

const Page = ({
  isAuth = false,
  children,
  header,
}: {
  isAuth?: boolean;
  children?: React.ReactNode;
  header?: {
    full?: boolean;
    children: React.ReactNode;
  };
}) => (
  <>
    {header && <Header full={header.full}>{header.children}</Header>}
    {children && <main className={styles.container}>{children}</main>}
    <Footer isAuth={isAuth} />
  </>
);

export default Page;
