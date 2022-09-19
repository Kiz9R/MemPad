import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(10px)",
  },
  heading: {
    // color: "rgba(0,183,255, 1)",
    color: "teal",
    fontSize: "2rem",
  },

  [theme.breakpoints.up("md")]: {
    appBar: {
      flexDirection: "row",
    },
    heading: { fontSize: "3rem" },
  },

  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  signin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100wv",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#6e5774",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    profile: {
      justifyContent: "space-evenly",
    },
    profile2: {
      display: "flex",
      justifyContent: "center",
      width: "400px",
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
