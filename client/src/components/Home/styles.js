import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
