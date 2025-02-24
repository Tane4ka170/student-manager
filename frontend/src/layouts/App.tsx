import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

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
