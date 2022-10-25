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
import { ReactNode, useState } from "react";

export default function Main() {
  //get data from the api http://localhost:8080/api/ator and put it on the state
  const [data, setData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/ator")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // function that will make:'dateFrom' inside data will be like this: 2021-09-01T00:00:00.000Z. split it and get the first part
  const getYear = (dateFrom: string) => {
    return dateFrom.split("T")[0];
  };

  // create a object that have name, date
  const dataForChart = data.map((item) => {
    return {
      name: item.nome,
      date: getYear(item.dateFrom),
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.block1}>
          <h1 className={styles.quantidade}>{data.length}</h1>
          <p className={styles.descricao}>Atores</p>
          <div className={styles.block1_chart}></div>
        </div>
        <div className={styles.block2}>
          <h1 className={styles.quantidade}>{data.length}</h1>
          <p className={styles.descricao}>Clientes</p>
          <div className={styles.block1_chart}></div>
        </div>
        <div className={styles.block3}>
          <h1 className={styles.quantidade}>{data.length}</h1>
          <p className={styles.descricao}>Funcionários</p>
          <div className={styles.block1_chart}></div>
        </div>
      </div>
      <div className={styles.grafico}>
        {/* // create a graph with two values: nome and dateFrom from the api */}
        <LineChart
          width={500}
          height={300}
          data={dataForChart}
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
          <Line type="monotone" dataKey="date" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}
