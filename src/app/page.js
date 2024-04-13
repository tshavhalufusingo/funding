import Image from "next/image";
import styles from "./page.module.css";
import "./styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <input type="email" placeholder="User email"></input>
        <input type="password" placeholder="User password"></input>
        <button type="submit">Login</button>
      </form>
      <p>If you have no account click register below</p>
      <button id="register" type="submit">
        <Link href="/register">Register</Link>
      </button>
    </main>
  );
}