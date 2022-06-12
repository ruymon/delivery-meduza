import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

import styles from './styles.module.css';

export function DashboardLayout() {
  return (
    <main className={styles.container}>
      <Navbar />

      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </main>
  );
}