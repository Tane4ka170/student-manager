import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
