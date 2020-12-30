import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.scss";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            arial-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link to="/auteure">Auteure</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/livres">Livres</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/partenariats">Partenaires</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/actualites">Actus</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/ateliers">Mes ateliers</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/precommande">Précommande</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/contact">Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
