import Head from "next/head";
import styles from "../styles/Home.module.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const handleSubmit = (e) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state }),
  })
    .then(() => alert("Success!"))
    .catch((error) => alert(error));

  e.preventDefault();
};

const handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
