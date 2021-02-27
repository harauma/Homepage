import React from "react";
import { Link } from 'react-router-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown.js';

import Header from './Header';
// import CircularStatic from './CircularStatic';

import "../styles/topComponent.css";

const createData = (
  name,
  category,
  weight,
  price
) => {
    return { name, category, weight, price };
};

const rows = [
  createData("東京ドーム", "東京", "1000円", "19:00 ~ 22:00"),
  createData("京セラドーム大阪", "大阪", "400円", "18:00 ~ 20:00"),
  createData("札幌ドーム", "札幌", "500円", "09:00 ~ 12:00"),
  createData("ナゴヤドーム", "名古屋", "200円", "15:00 ~ 24:00"),
  createData("福岡PayPayドーム", "福岡", "250円", "24:00 ~ 09:00"),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));


export default function TopComponent (props) {
  const classes = useStyles();
  const { posts, title } = props;
  return (
    <React.Fragment>
      {/* <CircularStatic /> */}
      <Header />
      <Box className="container">
        <div class="main">
          <h1>FCシステナ</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <p class="topText">全国複数拠点で活動しているフットサルチームです。<br/><strong>男性女性、未経験者</strong>も大歓迎です！</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={`${process.env.PUBLIC_URL}/image/soccer_futsal_man.png`} />
            </Grid>
          </Grid>
        </div>
        <h2>主な活動場所</h2>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>会場名</TableCell>
              <TableCell>場所</TableCell>
              <TableCell>参加費</TableCell>
              <TableCell>時間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <div>
          <h2>
          <Link to={`/form`}>
            <Button size="small">
              お問い合わせはこちら
            </Button>
          </Link>
          </h2>
        </div>
      </Box>
    </React.Fragment>
  );
}
