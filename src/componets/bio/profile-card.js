import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const profileImgStyle = {
  height: "400px",
  borderRadius: "50%",
  display: "inline",
}

const cardStyle = {
  minWidth: "200px",
  display: "inline-block",
}

export default class ProfileImgCard extends PureComponent {
  render() {
    return (
      <Card
        style={cardStyle}
      >
        <CardContent>
          <img
            style={ profileImgStyle }
            alt="Tyler Tracy"
            // src="https://tgt101.com/images/profile.jpg"
            src="https://i.redd.it/tsgq7a9jgmsy.jpg"
          />
        </CardContent>
      </Card>
    )
  }
}