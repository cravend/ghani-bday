import Countdown from "react-countdown";

import Footer from "../components/footer";
import styles from "../styles/Index.module.scss";

const Index = () => (
  <>
    <main>
      <div className={styles.primary}>
        <div>
          <h1>Something big is coming soon...</h1>{" "}
          <Countdown date="2022-09-27" />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
