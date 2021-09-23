import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next&Docker hello</title>
        <meta
          name="description"
          content="This a simple hello world app using Next.js and Docker"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.paragraph}>
        <span className={styles["main-string"]}>Hello, world!</span>
      </p>
      <div className={styles.images}>
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="docker.png" alt="Docker logo" className={styles.image} />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <img src="next.svg" alt="Next logo" className={styles.image} />
        </a>
      </div>
    </div>
  );
}
