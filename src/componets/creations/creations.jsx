import React from "react";
import Grid from "@material-ui/core/Grid";
import { Parallax } from "react-parallax";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./style.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import { SERVER_URL } from "../../constants";

class Creation extends React.PureComponent {
  render() {
    const { creation } = this.props;
    const { link, name, img, description } = creation;
    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Card className="creation">
          <CardActionArea href={link}>
            <CardMedia className="img" image={img} />
            <div>
              <h1> {name} </h1>
              <p> {description} </p>
            </div>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default class Creations extends React.Component {
  state = {
    creations: []
  };

  componentDidMount() {
    const url = `${SERVER_URL}/creations`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        try {
          const creations = JSON.parse(data).body;

          console.log(creations);

          // validate the data
          if (!creations || !creations.length) {
            throw new Error("Creation data malformed");
          }

          this.setState({ creations });
        } catch (err) {
          console.error(err);
        }
      });
  }

  render() {
    const { creations } = this.state;

    return (
      <Parallax
        blur={0}
        bgImage={require("../../images/white-background.jpg")}
        strength={500}
      >
        <div id="creations">
          <Grid
            container
            spacing={16}
            alignItems="stretch"
            direction="row"
            justify="center"
          >
            {creations.map(c => (
              <Creation creation={c} key={Math.random()} />
            ))}
          </Grid>
        </div>
      </Parallax>
    );
  }
}