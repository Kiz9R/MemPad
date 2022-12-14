import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",

    fontFamily: "monospace",
    height: "100%",
    position: "relative",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      // backgroundColor: "rgba(255, 255, 255, 0.4)",
      // backdropFilter: "blur(10px)",
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  creator: {
    textTransform: "uppercase",
    color: "#00FFFF",
  },
  overlay: {
    position: "absolute",

    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    textTransform: "capitalize",
    color: "purple",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
