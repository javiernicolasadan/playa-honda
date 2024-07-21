import CarouselComponent from "./Carousel";
import Text from "./Text";
import Grid from "./Grid";
import Parallax from "./Parallax/Parallax";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";

const Home = ({ isLoading, handleLoadingChange, language, onLanguageChange }) => {
  
   useEffect(()=>{
    handleLoadingChange(true)
   },[]) 
  
  setTimeout(() => {
    handleLoadingChange(false);
    
  }, 2000); 

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CarouselComponent />
          <Text  language={language} onLanguageChange={onLanguageChange}/>
          
          <Parallax />
          <Grid />
        </>
      )}
    </>
  );
};

export default Home;
