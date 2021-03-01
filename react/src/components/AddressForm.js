import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import RadioButtonsGroup from './Radio';
import SelectBox from './SelectBox';

export default function AddressForm(props) {
  const {userInfo, setUserInfo} = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お客様情報
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="名字"
            fullWidth
            autoComplete="family-name"
            onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
            value={userInfo.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="名前"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
            value={userInfo.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioButtonsGroup
          userInfo = {userInfo}
          setUserInfo = {setUserInfo}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectBox
          userInfo = {userInfo}
          setUserInfo = {setUserInfo}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="住所"
            fullWidth
            onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
            value={userInfo.address}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// const onChangeLastName = (lastName, setUserInfo) => {
//   setUserInfo((userInfo) => {

//   })
//   console.log(userInfo)
// }