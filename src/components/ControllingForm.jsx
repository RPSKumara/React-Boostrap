import React from "react";
import {
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  FloatingLabel,
  Button,
} from "react-bootstrap";

// Important
// mb-4 -> margin bottom (1-5)
// mt , ms (start - left) , me (end right) -> margin
//pt , pb , ps , pe -> padding
// mx-auto -> align center
// bg-light -> baground light collor
function ControllingForm() {
  return (
    <Container>
      <Form>
        <Row>
          <h1>Form</h1>
        </Row>
        <Row className="mb-3">
          <Col md>
            <Form.Group controlId="formEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPassword">
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formMobile">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Readonly input here..."
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Col xs={7}>
            <Form.Control placeholder="City" />
          </Col>
          <Col>
            <Form.Control placeholder="State" />
          </Col>
          <Col>
            <Form.Control placeholder="Zip" />
          </Col>
        </Row>
        <Row>
          <InputGroup className="mb-3">            
            <Form.Control aria-label="First name" placeholder="First name" />
            <Form.Control aria-label="Last name" placeholder="Last name" />
          </InputGroup>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripton</Form.Label>
            <Form.Control
              size="lg"
              variant="outline-secondary"
              as="textarea"
              aria-label="With textarea"
              rows={4}
            />
          </Form.Group>
        </Row>
        <Row>
          <InputGroup controlId="formDescriptionGroup">
            <InputGroup.Text>Descripton</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Row>
        <Row>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input</Form.Label>
            <Form.Control type="file" multiple />
            <Form.Text muted>
              Without multiple i can select only one file
            </Form.Text>
          </Form.Group>
        </Row>
        <Row className="mb-3 mx-auto item-center">
          <Form.Group className="mb-3" controlId="formRadioButton">
            <Form.Check
              inline
              type="radio"
              label="Female"
              name="Gender"
              id="female"
            />
            <Form.Check
              inline
              type="radio"
              label="Male"
              name="Gender"
              id="male"
            />
            <Form.Check
              inline
              type="radio"
              label="Other"
              name="Gender"
              id="other"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 mx-auto item-center">
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check
              inline
              type="checkbox"
              label="Samsung"
              name="smartPhone"
              id="samsung"
            />
            <Form.Check
              inline
              type="checkbox"
              label="Apple"
              name="smartPhone"
              id="apple"
            />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <FloatingLabel controlId="floatingSelect" label="Works with selects">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Row>
        <Row className="mb-5 mx-auto item-center">
          <Form.Group controlId="formSelect">
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-5">
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default ControllingForm;
