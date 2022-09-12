import Link from "next/link";

import styles from "../styles/footer.module.scss";

const Footer = ({ isAuth }: { isAuth: boolean }) => (
  <footer>
    <ul className={styles.menu}>
      {isAuth ? (
        <li>
          <Link href="/">Home</Link>
        </li>
      ) : (
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      )}
      <li>
        <a href="https://github.com/cravend/ghani-bday">View Source Code</a>
      </li>
    </ul>
  </footer>
);
export default Footer;
