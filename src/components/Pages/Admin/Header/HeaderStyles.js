import { makeStyles } from "@material-ui/core";
import { blueGrey} from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import * as Colors from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({


  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logo: {
    color: "white",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },

  //wrapper of main contianer
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "#efefef",
    marginTop: "60px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    backgroundColor: '#384A55', 
    width: "260px",
    marginTop: "64px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },

  navlinks: {
   
   
    color: "#e1e9fc",
    
    "& :hover , &:hover div": {
      color: blue["A700"],
    },

    " & div": {
      color: "#e1e9fc",
    },
    
  },
  activeNavlinks: {
    color: blue["A700"],
    "& div": {
      color: blue["A700"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },
}));
