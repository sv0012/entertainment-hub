import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    backgroundColor:"#2d313a",
     zIndex: 100,
     position:'fixed',
     margin:'auto',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();

  useEffect(() => {
    if(value===0) history.push("/")
    else if(value===1) history.push("/Movies")
    else if(value===2) history.push("/Series")
    else if(value===3) history.push("/Search")
    
}, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}