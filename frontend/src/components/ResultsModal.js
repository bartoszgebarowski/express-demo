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
    isLoaded,
    setIsLoaded,
    setCountriesReceivedData,
    errors,
    setErrors,
    countriesReceivedData,
  } = props;

  useEffect(() => {
    const handleUnmount = () => {
      if (!show) {
        setIsLoaded(false);
        setErrors(false);
        setCountriesReceivedData([]);
      }
    };
    handleUnmount();
  }, [setIsLoaded, setErrors, setCountriesReceivedData, show]);

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
              {countriesReceivedData.map((countryData) => {
                return (
                  <div key={countryData.official_name}>
                    <div className={modalStyles.FlagContainer}>
                      <img
                        src={countryData.flag}
                        alt={countryData.flagDescription}
                      />
                    </div>
                    <div className="mt-2 fw-bold">
                      Official name: {countryData.official_name}
                    </div>
                    <div className="mt-2">
                      Common name: {countryData.common_name}
                    </div>
                    <div className="mt-2">Capital: {countryData.capital}</div>
                    <div className="mt-2">
                      Population: {countryData.population}
                    </div>
                    <div className="mt-2">
                      Time zones: {countryData.timezones.join(" ")}
                    </div>
                    <div className="mt-2">
                      Currency:
                      <br />
                      <span className="ms-2">
                        name: {Object.values(countryData.currencies)[0].name}
                      </span>
                      <br />
                      <span className="ms-2">
                        symbol:{" "}
                        {Object.values(countryData.currencies)[0].symbol}
                      </span>
                    </div>
                    <hr></hr>
                  </div>
                );
              })}
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
