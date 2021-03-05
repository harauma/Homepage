import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default function ContactUsForm(props) {
  const {userInfo, setUserInfo} = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お問い合わせ内容
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
          required
          id="contact"
          label="お問い合わせ内容"
          multiline
          rows={4}
          variant="outlined"
          value={userInfo.text}
          onChange={(e) => setUserInfo({...userInfo, text: e.target.value})}
          fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}