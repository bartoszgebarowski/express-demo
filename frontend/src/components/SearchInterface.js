import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../styles/Form.module.css";
import ResultsModal from "./ResultsModal";
import { useState } from "react";
import api from "../api/api";

function SearchInterface() {
  const [countryQuery, setCountryQuery] = useState();

  const eventHandler = async (event) => {
    setCountryQuery(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    api
      .get(`${countryQuery}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response.status));

    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col className={styles.MaxWidthMedium}>
            <Form>
              <InputGroup size="lg">
                <Form.Control
                  placeholder="Search..."
                  aria-label="Search Bar"
                  onChange={eventHandler}
                />
                <Button
                  type="submit"
                  variant="outline-primary"
                  id="submitButton"
                  onClick={submitHandler}
                  aria-label="Submit button to submit user query"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <ResultsModal show={show} onClose={handleClose} />
    </>
  );
}

export default SearchInterface;
