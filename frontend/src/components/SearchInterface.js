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
  const [countriesReceivedData, setCountriesReceivedData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(false);

  const eventHandler = async (event) => {
    setCountryQuery(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    api
      .get(`${countryQuery}`)
      .then((response) => {
        setCountriesReceivedData([...response.data]);
        setIsLoaded(true);
      })
      .catch((err) => setErrors(err.response.status, setIsLoaded(true)));
    handleShow();
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col className={styles.MaxWidthMedium}>
            <Form onSubmit={submitHandler}>
              <InputGroup size="lg">
                <Form.Control
                  placeholder="Search..."
                  aria-label="Search Bar"
                  onChange={eventHandler}
                  required
                />
                <Button
                  type="submit"
                  variant="outline-primary"
                  id="submitButton"
                  aria-label="Submit button to submit user query"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <ResultsModal
        show={show}
        onClose={handleClose}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        errors={errors}
        setErrors={setErrors}
        setCountriesReceivedData={setCountriesReceivedData}
        countriesReceivedData={countriesReceivedData}
      />
    </>
  );
}

export default SearchInterface;
