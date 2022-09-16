import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import useStyles from "./styles";
// image
import memory from "../../img/memories.png";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const location = useLocation();

  const Logout = () => {
    dispatch({ type: LOGOUT });
    navigateTo("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Typography className={classes.heading} variant="h2" align="center">
            MemoPAD
          </Typography>
        </Link>

        <img
          src={memory}
          alt="memories"
          height="60"
          className={classes.image}
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={Logout}
            >
              LogOut
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
