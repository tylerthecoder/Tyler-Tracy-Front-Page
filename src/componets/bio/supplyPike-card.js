import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';

const uarkImgStyle = {
  height: "100px",
  margin: "10px",
}

const cardStyle = {
  minWidth: "200px",
  display: "inline-block",
  margin: "10px",
  padding: "10px",
}

const wrapperStyle = {
  display: "flex",
}

const sideDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: "center",
}

export default class SupplyPikeCard extends PureComponent {
  render() {
    return (
      <Card
        style={cardStyle}
      >
        <div style={wrapperStyle}>
          <a
            href="https://supplypike.com/"
          >
            <img
              src={require('../../images/supplyLogo.png')}
              alt="University of arkansas logo"
              style={uarkImgStyle}
            />
          </a>

          <div style= { sideDivStyle}>
            <p> Summer 18 - Present </p>
            <p> Software engineering Intern </p>
          </div>
        </div>

      </Card>
    )
  }
}