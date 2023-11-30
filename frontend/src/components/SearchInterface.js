import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../styles/Form.module.css";
import ResultsModal from "./ResultsModal";
import { useState } from "react";

function SearchInterface() {
  const submitHandler = async (event) => {
    event.preventDefault();
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
                <Form.Control placeholder="Search..." aria-label="Search Bar" />
                <Button
                  type="submit"
                  variant="outline-primary"
                  id="submitButton"
                  onClick={submitHandler}
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
