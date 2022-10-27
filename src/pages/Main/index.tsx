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
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Main() {
  const [atorData, setAtorData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/ator")
      .then((res) => res.json())
      .then((atorData) => setAtorData(atorData));
  }, []);

  // end for card ator ------------------------------------------------------------

  const [clienteData, setClienteData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/cliente")
      .then((res) => res.json())
      .then((clienteData) => setClienteData(clienteData));
  }, []);

  // end for card cliente ------------------------------------------------------------

  const [funcionarioData, setFuncionarioData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/funcionario")
      .then((res) => res.json())
      .then((funcionarioData) => setFuncionarioData(funcionarioData));
  }, []);

  // end for card funcionario ------------------------------------------------------------

  // variados
  const getYear = (dateFrom: string) => {
    return dateFrom.split("T")[0];
  };

  const dataForChart = atorData.map((item) => {
    return {
      name: item.nome,
      date: getYear(item.dateFrom),
    };
  });

  const [modalAtorActive, setModalAtorActive] = useState(false);
  const [modalClienteActive, setModalClienteActive] = useState(false);
  const [modalFuncionarioActive, setModalFuncionarioActive] = useState(false);

  return (
    <div className={styles.container}>
      {modalAtorActive && <div className={styles.blurBackground}></div>}
      {modalAtorActive && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h1>Dados tabela atores</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell align="right">version</TableCell>
                    <TableCell align="right">dateFrom</TableCell>
                    <TableCell align="right">dateTo</TableCell>
                    <TableCell align="right">idOriginal</TableCell>
                    <TableCell align="right">nome</TableCell>
                    <TableCell align="right">primeiroNome</TableCell>
                    <TableCell align="right">ultimoNome</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {atorData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.version}</TableCell>
                      <TableCell align="right">
                        {row.dateFrom.split("T")[0]}
                      </TableCell>
                      <TableCell align="right">
                        {row.dateTo.split("T")[0]}
                      </TableCell>

                      <TableCell align="right">{row.idOriginal}</TableCell>
                      <TableCell align="right">{row.nome}</TableCell>
                      <TableCell align="right">{row.primeiroNome}</TableCell>
                      <TableCell align="right">{row.ultimoNome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button onClick={() => setModalAtorActive(false)}>Fechar</button>
          </div>
        </div>
      )}
      {modalClienteActive && <div className={styles.blurBackground}></div>}
      {modalClienteActive && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h1>Dados tabela clientes</h1>
            <TableContainer component={Paper}>
              <Table
                sx={{
                  // backgroundColor: "black",
                  minWidth: 650,
                }}
                aria-label="simple table"
              >
                <TableHead
                // sx={{ backgroundColor: "rgb(138, 150, 153)" }}
                >
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell align="right">version</TableCell>
                    <TableCell align="right">dateFrom</TableCell>
                    <TableCell align="right">dateTo</TableCell>
                    <TableCell align="right">idOriginal</TableCell>
                    <TableCell align="right">nome</TableCell>
                    <TableCell align="right">bairro</TableCell>
                    <TableCell align="right">cidade</TableCell>
                    <TableCell align="right">pais</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clienteData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: (theme) =>
                            theme.palette.action.hover,
                        },
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.version}</TableCell>
                      <TableCell align="right">
                        {row.dateFrom.split("T")[0]}
                      </TableCell>
                      <TableCell align="right">
                        {row.dateTo.split("T")[0]}
                      </TableCell>

                      <TableCell align="right">{row.idOriginal}</TableCell>
                      <TableCell align="right">{row.nome}</TableCell>
                      <TableCell align="right">{row.bairro}</TableCell>
                      <TableCell align="right">{row.cidade}</TableCell>
                      <TableCell align="right">{row.pais}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button onClick={() => setModalClienteActive(false)}>Fechar</button>
          </div>
        </div>
      )}
      <div className={styles.cards}>
        <div className={styles.block1}>
          <h1 className={styles.quantidade}>{atorData.length}</h1>
          <p className={styles.descricao}>Atores</p>
          <button
            className={styles.button}
            onClick={() => setModalAtorActive(true)}
          >
            Ver dados
          </button>
          <div className={styles.block1_chart}></div>
        </div>
        <div className={styles.block2}>
          <h1 className={styles.quantidade}>{clienteData.length}</h1>
          <p className={styles.descricao}>Clientes</p>
          <button
            className={styles.button}
            onClick={() => setModalClienteActive(true)}
          >
            Ver dados
          </button>
          <div className={styles.block1_chart}></div>
        </div>
        <div className={styles.block3}>
          <h1 className={styles.quantidade}>{atorData.length}</h1>
          <p className={styles.descricao}>Funcionários</p>
          <button className={styles.button}>Ver dados</button>
          <div className={styles.block1_chart}></div>
        </div>
      </div>
      <div className={styles.graficos}>
        <div className={styles.grafico1}>
          <h1>Quantidade de filmes por gênero</h1>
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
