import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, fetchAllLinks, fetchLink } from "../actions/index";

import Home from "../containers/Home";
import TopicList from "../containers/TopicList";
import TopicShow from "../containers/TopicShow";
import LinkShow from "../containers/LinkShow";
import NotFound from "../components/NotFound";
import AllLinks from "../containers/AllLinks";
// import Signup from '../auth/Signup'
// import Login from '../auth/Login'

class Routes extends Component {
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
    this.props.fetchLink(0);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/topics"
          render={(props) => <TopicList {...props} />}
        />
        <Route
          exact
          path="/topics/:id"
          render={(props) => (
            <TopicShow {...props} topics={this.state.topics} />
          )}
        />
        <Route
          exact
          path="/links/:id"
          render={(props) => (
            <LinkShow
              {...props}
              topics={this.state.topics}
              links={this.state.links}
              link={this.state.link}
            />
          )}
        />
        <Route
          exact
          path="/links"
          render={(props) => (
            <AllLinks
              {...props}
              topics={this.state.topics}
              links={this.state.links}
            />
          )}
        />
        {/* <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} /> */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    links: state.links,
    link: state.link,
  };
};

export default connect(mapStateToProps, {
  fetchTopics,
  fetchAllLinks,
  fetchLink,
})(Routes);
