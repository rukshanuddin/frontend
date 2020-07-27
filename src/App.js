import React, { Component } from "react";
import {  BrowserRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { fetchTopics, fetchAllLinks, fetchLink } from "./actions/index";
// material-ui for styling
import { Paper } from "@material-ui/core";
// Side Navigation
import Sidebar from "./navigation/Sidebar";
import Routes from "./navigation/Routes";

import Title from "./components/Title";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      topics: [],
      links: [],
      link: [
        {
          id: 0,
          name: "Loading",
          link: "http://loading.io/",
          category: "free loading",
          section: "Loading",
          language: "Loading",
          blurb:
            "What to do if you start loading. This isn't always loading in beginner loads",
          topic_id: 1,
          created_at: "1969-04-20T04:20:19.690Z",
          updated_at: "2020-07-23T21:55:56.264Z",
        },
      ],
    };
  }
  componentDidMount() {
    this.props.fetchTopics();
    this.props.fetchAllLinks();
    this.props.fetchLink(1)
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Paper square={true} elevation={10} style={{ height: "100%" }}>
              <Title />
              <Routes />
            </Paper>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    links: state.links,
    link: state.link
  };
};

export default connect(mapStateToProps, { fetchTopics, fetchAllLinks, fetchLink })(App);
