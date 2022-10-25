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

  const [data, setData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/ator")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const getYear = (dateFrom: string) => {
    return dateFrom.split("T")[0];
  };


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
      <div className={styles.graficos}>
        <div className={styles.grafico1}>
          <h1>Valores por data</h1>
          <LineChart
            width={500}
            height={300}
            data={dataForChart}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
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
    </div>
  );
}
