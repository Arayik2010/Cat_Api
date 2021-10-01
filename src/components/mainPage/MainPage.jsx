import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./MainPage.scss";
import CatList from "../catList/CatList";

const MainPage = () => {
  return (
    <Router>
      <div className="page">
        <div className="page__sidebar">
          <Sidebar />
        </div>
        <div className="page__content">
          <Switch>
            <Route exact path="/">
              <CatList />
            </Route>
            <Route path="/cats/:categories/:id">
              <CatList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainPage;
