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

export default class UniversityCard extends PureComponent {
  render() {
    return (
      <Card
        style={cardStyle}
      >
        <div style={wrapperStyle}>
          <img
            src="https://brand.uark.edu/graphic-identity/logos-and-wordmarks/downloads/UA_Logo.png"
            alt="University of arkansas logo"
            style={uarkImgStyle}
          />
          <div style= { sideDivStyle}>
            <p> Sophomore </p>
            <p> Computer Science Major </p>
            <p> GPA: 4.0 </p>
          </div>
        </div>

      </Card>
    )
  }
}