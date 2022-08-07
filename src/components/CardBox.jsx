import React from "react";
import { Button, Card } from "react-bootstrap";

function CardBox() {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <Card.Img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" />
          <Card.Title>Card Example</Card.Title>
          <Card.Text>This is an example of bootsrap card</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBox;
