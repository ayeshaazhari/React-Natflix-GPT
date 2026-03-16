import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
