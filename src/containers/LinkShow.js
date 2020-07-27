import React from "react";

import { fetchLink } from "../actions";
import { Paper, Typography, Link } from "@material-ui/core";

import { connect } from "react-redux";
import {fetchAllLinks} from '../actions/index'

class LinkShow extends React.Component {
  constructor(props) {
    super(props);
    let paramsId = parseInt(this.props.match.params.id, 10);
    let link = props.links.find((link) => link.id === paramsId);
    this.state = {
      link: link ? link : { name: "N/A", blurb: "N/A", link: "N/A" },
    };
this.props.fetchAllLinks();

  }

  componentDidMount() {
    this.props.fetchAllLinks();
    let paramsId = parseInt(this.props.match.params.id, 10);
    this.props.fetchLink(paramsId);
    console.log("kdk")
  }
  
  render() {
   const showLink = this.props.link[0]
debugger
    return (
      <Paper
        square={true}
        elevation={13}
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1em",
          paddingBottom: "1em",
          margin: "2em",
        }}
      >
        <Typography square={true} elevation={14} variant="h3" component="h2">
          {showLink.name}
        </Typography>
        <Paper
          square={true}
          elevation={14}
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1em",
            paddingBottom: "1em",
            margin: "2em",
          }}
        >
          <Paper
            square={true}
            elevation={15}
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
            }}
          >
            <Typography variant="subtitle">{showLink.blurb}</Typography>
            <br />
            <Typography variant="subtitle2">
              Section
              <br />
              {showLink.section}
            </Typography>
          </Paper>
          <br />
          <Paper
            square={true}
            elevation={15}
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1em",
              paddingBottom: "1em",
              margin: "2em",
            }}
          >
            <Typography variant="p">
              Languages/Frameworks
              <br />
              {showLink.language}
            </Typography>
          </Paper>
          <Link href={showLink.link}>
            <Typography>{showLink.link}</Typography>
          </Link>
        </Paper>
      </Paper>
    );
    
  }
}

const mapStateToProps = state => {
  return {
    link: state.link,
    links: state.links
  };
};

export default connect(mapStateToProps, { fetchLink, fetchAllLinks })(LinkShow);
