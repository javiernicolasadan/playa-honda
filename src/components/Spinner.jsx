import Spinner from "react-bootstrap/Spinner";

const SpinnerComponent = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner
            animation="grow"
            variant="secondary"
            role="status"
            className="spinner"
          >
            
          </Spinner>
        </div>
      ) : null}
    </>
  );
};

export default SpinnerComponent;
