import React, { Component } from "react";
import { fetchAllLinks } from "../actions/linkActions";
import { connect } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import LinkList from "../components/LinkList";

class AllLinks extends Component {
  constructor(props) {
    super(props);
    let paramsId = parseInt(this.props.match.params.id, 10);
    let topic = props.topics.find((topic) => topic.id === paramsId);
    this.state = {
      topic: topic ? topic : { name: "N/A", img: "N/A" },
      links: [],
      link: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllLinks();
  }

  render() {
    return (
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
          <Typography variant="h3" component="h3">All the Links</Typography>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

export default connect(mapStateToProps, {
  fetchAllLinks,
})(AllLinks);
