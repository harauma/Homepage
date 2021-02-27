import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const products = [
  { name: '名前', desc: '', price: '' },
  { name: '性別', desc: '', price: '男性' },
  { name: '年齢', desc: '', price: '年齢' },
  { name: '住所', desc: '', price: '北海道札幌市' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
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
  products[0].price = userInfo.lastName + props.userInfo.firstName;
  products[1].price = userInfo.sex;
  products[2].price = userInfo.age;
  products[3].price = userInfo.address;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お客様情報
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
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
            control={<Checkbox color="secondary" name="saveAddress" value="yes" onClick={() => setToggleFlg(!toggleFlg)} />}
            label="上記の内容でよろしいですか？"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const onChangeCheckbox = () => {
  
}