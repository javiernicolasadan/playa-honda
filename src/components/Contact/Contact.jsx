
import Spinner from 'react-bootstrap/Spinner';
const Contact = () => {
    return ( 
        <>
            

            <div style={{ marginTop: "30rem" }} className="text-center"> 
                <Spinner animation="grow" variant="secondary" role="status"> 
                <span className="visually-hidden">Loading...</span> 
                </Spinner>
            </div>
        </>
     );
}
 
export default Contact;