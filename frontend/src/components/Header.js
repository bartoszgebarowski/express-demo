import Container from "react-bootstrap/Container";
import styles from "../styles/App.module.css";

function Header() {
  return (
    <Container className="text-center">
      <h1>Countries Info</h1>
      <div className={styles.FontSizeMedium}>Information on every country</div>
    </Container>
  );
}

export default Header;
