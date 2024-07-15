import styles from "./styles.module.scss";

const HeaderShared = () => {
  return (
    <header>
      <nav>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderShared;
