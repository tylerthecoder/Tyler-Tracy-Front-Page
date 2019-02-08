import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const containerStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "black",
  flexWrap: "wrap",
}

const horCenter = {
  alignSelf: "center",
}

const titleStyle = {
  color: "white",
  fontSize: "4em",
  margin: "10px",
}

const contentStyle = {
  color: "white",
  padding: "20px",
}

export default class Banner extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <Grid style={ containerStyle } >
        <Grid item xs={12} sm={6} style={horCenter}>
          <h1 style={ titleStyle }> { title } </h1>
        </Grid>
        {
          content &&
          <Grid item xs={12} sm={6} style={horCenter}>
            <p style={ contentStyle }> { content } </p>
          </Grid>
        }
      </Grid>
    )
  }
}