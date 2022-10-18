import styles from "./Header.module.css";

import logo from "../../assets/todoLogo.svg";
import { Taskbar } from "../Taskbar";

export function Header({ handleCreateNewTask }) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <Taskbar handleCreateNewTask={handleCreateNewTask} />
    </header>
  );
}
