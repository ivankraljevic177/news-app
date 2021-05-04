import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Category } from "../Category/Category";

function App() {


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
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/general" /> 
                    )
                }}
              />
          <Route exact path="/:category" component={Category} />
        </div>
      </Router>
    </div>
  );
}

export default App;
