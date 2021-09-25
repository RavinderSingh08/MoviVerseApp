import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "8vh",
    position: "fixed",
    bottom: 0,
    backgroundColor: "hsl(210,100%,11%)",
    zIndex: 100,
  },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) {
            history.push("/");
        } else if (value === 1) {
            history.push("/movies");
        } else if (value === 2) {
            history.push("/series");
        } else if (value === 3) {
            history.push("/search");
        }
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Trending"
                // value=0
                icon={<WhatshotIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Movies"
                // value="movies"
                icon={<LocalMoviesIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="TV Series"
                // value="tvseries"
                icon={<LiveTvIcon />}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search"
                // value="search"
                icon={<SearchIcon />}
            />
        </BottomNavigation>
    );
}
