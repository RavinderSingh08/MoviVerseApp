import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import './Search.css';

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  
  const handleKeyDown = (event) => {
    // For searching on pressing 'ENTER' key.
    if (event.key === "Enter") {
      fetchSearch();
    }
  };
  
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );

      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div className="search">
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          type="search"
          size="small"
          variant="outlined"
          color="secondary"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 5 }}
          onClick={fetchSearch}
        >
          <SearchIcon />
        </Button>
      </div>
      <Tabs
        value={type}
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 25 }}
      >
        <Tab icon={<MovieIcon />} label="Search Movies" />
        <Tab icon={<LiveTvIcon />} label="Search TV Series" />
      </Tabs>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {
      // @ts-ignore
      numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;