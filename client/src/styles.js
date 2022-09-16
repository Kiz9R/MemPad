import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // appBar: {
  //   borderRadius: 15,

  //   backgroundColor: "rgba(255, 255, 255, 0.4)",
  //   backdropFilter: "blur(10px)",
  //   margin: "30px 0",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
