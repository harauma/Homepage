import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function SelectBox(props) {
  const classes = useStyles();
  const {userInfo, setUserInfo} = props;

  const handleChange = (event) => {
    setUserInfo({...userInfo, age: event.target.value});
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">年齢</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInfo.age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10代</MenuItem>
          <MenuItem value={20}>20代</MenuItem>
          <MenuItem value={30}>30代</MenuItem>
          <MenuItem value={40}>40代</MenuItem>
          <MenuItem value={50}>50代</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}