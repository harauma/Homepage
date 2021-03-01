import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const dispUserInfo = [
  { name: '名前', desc: '', value: '' },
  { name: '性別', desc: '', value: '男性' },
  { name: '年齢', desc: '', value: '年齢' },
  { name: '住所', desc: '', value: '北海道札幌市' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const toggleFlg = true;

// const handleChange = event => {
//   if this.toggleFlg {
//     this.toggleFlg = false;
//   } else {
//     this.toggleFlg = true;
//   }
// };

export default function Review(props) {
  const classes = useStyles();
  const {userInfo, toggleFlg, setToggleFlg} = props;
  console.log(props)
  dispUserInfo[0].value = userInfo.lastName + props.userInfo.firstName;
  dispUserInfo[1].value = exchangeSex(userInfo.sex);
  dispUserInfo[2].value = userInfo.age;
  dispUserInfo[3].value = userInfo.address;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お客様情報
      </Typography>
      <List disablePadding>
        {dispUserInfo.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.value}</Typography>
          </ListItem>
        ))}
      <Typography variant="h6" gutterBottom>
        お問い合わせ内容
      </Typography>
        <p>{userInfo.text}</p>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" checked={!toggleFlg} onClick={() => setToggleFlg(!toggleFlg)} />}
            label="上記の内容でよろしいですか？"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function exchangeSex(sex) {
  switch (sex) {
    case 'male':
      return "男性";
    case 'female':
      return "女性";
    case 'other':
      return "その他";
    default:
      throw new Error('Unknown');
  }
}