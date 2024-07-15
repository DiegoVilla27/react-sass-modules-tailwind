import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <input
        placeholder="Email"
        type="email"
      />
      <input
        placeholder="Password"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HomePage;
