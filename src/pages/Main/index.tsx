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

  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1>Block 1</h1>
        <div className={styles.block1_chart}>
          {/* // create a simple table with material ui and put the data on it, data
          values are from object = 'id', 'version' */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Version</TableCell>
                  <TableCell align="right">Date From</TableCell>
                  <TableCell align="right">Date To</TableCell>
                  <TableCell align="right">ID Original</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Primeiro Nome</TableCell>
                  <TableCell align="right">Sobrenome</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  (row: {
                    ultimoNome: ReactNode;
                    primeiroNome: ReactNode;
                    nome: ReactNode;
                    idOriginal: ReactNode;
                    dateTo: string;
                    dateFrom: string;
                    version: ReactNode;
                    id: any;
                  }) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.version}</TableCell>
                      {/* // dateFrom will be like: 2021-09-01T00:00:00.000+00:00,
                      so we need to split it and be like: 2021-09-01 */}
                      <TableCell align="right">
                        {getYear(row.dateFrom.split("T")[0])}
                      </TableCell>
                      <TableCell align="right">
                        {row.dateTo.split("T")[0]}
                      </TableCell>
                      <TableCell align="right">{row.idOriginal}</TableCell>
                      <TableCell align="right">{row.nome}</TableCell>
                      <TableCell align="right">{row.primeiroNome}</TableCell>
                      <TableCell align="right">{row.ultimoNome}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className={styles.block2}>
        <h1>Block 2</h1>
      </div>
    </div>
  );
}
