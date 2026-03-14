import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
      {/*
        - Main container 
         - Video Bag
         -Video title
        -SecondaryContainer
         - movielist * n
         - cards
        */}
    </div>
  );
};

export default Browse;
