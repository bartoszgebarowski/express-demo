import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import modalStyles from "../styles/ResultsModal.module.css";
import Spinner from "react-bootstrap/Spinner";
import spinnerStyles from "../styles/Spinner.module.css";
import { useEffect } from "react";

const ResultsModal = (props) => {
  const {
    show,
    onClose,
    capital,
    common_name,
    flag,
    flagDescription,
    official_name,
    population,
    timezones,
    isLoaded,
    setIsLoaded,
    errors,
    setErrors,
  } = props;

  useEffect(() => {
    const handleUnmount = () => {
      if (!show) {
        setIsLoaded(false);
        setErrors(false);
      }
    };
    handleUnmount();
  }, [setIsLoaded, setErrors, show]);

  return (
    <>
      <Modal
        show={show}
        size="xl"
        onHide={onClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title className="ms-auto">
            {!isLoaded ? (
              <>Processing query ...</>
            ) : errors ? (
              <>Error {errors}</>
            ) : (
              <>Search results</>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoaded ? (
            <>
              <div className={`${spinnerStyles.SpinnerContainer} text-center`}>
                <Spinner
                  animation="border"
                  role="status"
                  variant="primary"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            </>
          ) : errors ? (
            errors === 404 ? (
              <>Sorry, but we could not find any matching results</>
            ) : (
              <>Please, adjust your request, or try again later</>
            )
          ) : (
            <>
              <div className={modalStyles.FlagContainer}>
                <img src={flag} alt={flagDescription} />
              </div>
              <div className="mt-2">Common Name : {common_name}</div>
              <div className="mt-2">Official Name: {official_name}</div>
              <div className="mt-2">Capital: {capital}</div>
              <div className="mt-2">Population: {population}</div>
              <div className="mt-2">Time zones: {timezones.join(" ")}</div>
              <div className="mt-2">
                Currency name: <span>Currency Symbol</span>
              </div>
            </>
          )}
        </Modal.Body>
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
