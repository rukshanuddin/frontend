import React, { Component } from "react";
import { fetchTopics, fetchLinks, fetchAllLinks } from "../actions/index";
import { connect } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import LinkList from "../components/LinkList";

class TopicShow extends Component {
  constructor(props) {
    super(props);
    let paramsId = parseInt(this.props.match.params.id, 10);
    let topic = props.topics.find((topic) => topic.id === paramsId);
    this.state = {
      topic: topic ? topic : { name: "Links", img: "N/A" },
    };
  }
  componentDidMount() {
    this.props.fetchTopics();
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchLinks(paramsId);
  }

  render() {
    const { name } = this.state.topic;

    return (
      <Paper style={{ marginBottom: "1em" }}>
        <Paper
          elevation={24}
          square={true}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1em",
            paddingBottom: "1em",
            margin: "2em",
            width: "95%",
          }}
        >
          <Paper
            square={true}
            elevation={15}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
              width: "95%",
            }}
          >
            <Typography variant="h3" component="h3">
              {name}
            </Typography>
          </Paper>

          <Paper
            square={true}
            elevation={15}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
              width: "95%",
            }}
          >
            <LinkList links={this.props.links} />
          </Paper>
        </Paper>
      </Paper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    links: state.links,
  };
};

export default connect(mapStateToProps, {
  fetchTopics,
  fetchLinks,
  fetchAllLinks,
})(TopicShow);
