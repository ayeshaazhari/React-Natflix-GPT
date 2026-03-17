import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { Banner_Img } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <img alt="BannerImage" className="fixed -z-10" src={Banner_Img}></img>

      <GptSearchBar className="searchbar" />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
