import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

const ResultsModal = (props) => {
  const { show, onClose } = props;
  return (
    <>
      <Modal
        show={show}
        size="xl"
        onHide={onClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Test modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>test</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={onClose}>
            Return
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResultsModal;
