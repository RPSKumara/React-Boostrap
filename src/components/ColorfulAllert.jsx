import React from "react";
import { Alert } from "react-bootstrap";

function ColorfulAllert() {
  return (
    <div>
      <Alert variant="primary">This is a Primary color alert</Alert>
      <Alert variant="secondary">This is a Secondary color alert</Alert>
      <Alert variant="success">This is a Success color alert</Alert>
      <Alert variant="danger">This is a Danger color alert</Alert>
      <Alert variant="warning">This is a Warning color alert</Alert>
      <Alert variant="info">This is a Info color alert</Alert>
      <Alert variant="light">This is a Light color alert</Alert>
      <Alert variant="dark">This is a Dark color alert</Alert>
    </div>
  );
}

export default ColorfulAllert;
