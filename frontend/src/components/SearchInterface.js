import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../styles/Form.module.css";

function SearchInterface() {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col className={styles.MaxWidthMedium}>
          <Form>
            <InputGroup size="lg">
              <Form.Control
                placeholder="Search..."
                aria-label="Search Bar"
                required
              />
              <Button type="submit" variant="outline-primary" id="submitButton">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchInterface;
