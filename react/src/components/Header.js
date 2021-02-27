import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
}));

// const onClickTop = () => {
//   this.props.history.push("/");
// }

export default function Checkout() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        <Link to="/"><Button size="small">フットサルやろう</Button></Link>
      </Typography>
    </Toolbar>
    </AppBar>
  )
}