import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Main.module.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Main() {
  //get data from the api http://localhost:8080/api/ator and put it on the state
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/ator")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1>Block 1</h1>
        <div className={styles.block1_chart}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="version" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      <div className={styles.block2}>
        <h1>Block 2</h1>
      </div>
    </div>
  );
}
