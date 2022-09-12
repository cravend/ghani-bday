import styles from "../styles/header.module.scss";

const Header = ({
  full,
  children,
}: {
  full?: boolean | undefined;
  children: React.ReactNode;
}) => {
  const classNames = [styles.header, full ? styles.full : undefined];

  return (
    <header className={classNames.join(" ")}>
      <div className={styles.headerChild}>{children}</div>
    </header>
  );
};

export default Header;
