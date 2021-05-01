import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { setAllNews } from "../../redux/actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

function App() {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const headers = { "X-Api-Key": process.env.REACT_APP_X_API_KEY };

    (async function () {
      await fetch("https://newsapi.org/v2/top-headlines?country=us", {
        headers,
      })
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          dispatch(setAllNews(result.articles));
        })
        .catch((err) => {
          setIsLoaded(true);
          setError(err.message);
          console.log(err.message);
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.header}>
          <Header></Header>
        </div>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.main}>
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    </div>
  );
}

export default App;
