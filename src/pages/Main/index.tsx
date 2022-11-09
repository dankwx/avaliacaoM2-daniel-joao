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
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  BarChart,
  Bar,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

  const [filmeData, setFilmeData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/filme")
      .then((res) => res.json())
      .then((filmeData) => setFilmeData(filmeData));
  }, []);

  // end for card filme ------------------------------------------------------------

  const [lojaData, setLojaData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/loja")
      .then((res) => res.json())
      .then((lojaData) => setLojaData(lojaData));
  }, []);

  // end for card loja ------------------------------------------------------------

  const [modalAtorActive, setModalAtorActive] = useState(false);
  const [modalClienteActive, setModalClienteActive] = useState(false);
  const [modalFuncionarioActive, setModalFuncionarioActive] = useState(false);
  const [modalLojaActive, setModalLojaActive] = useState(false);

  // data and chart for test
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
  ];

  const renderLineChart = (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
  // end of test

  // search from filme api, how many movies has each 'categoria', then console log the categories and the number of movies
  const [categoriaData, setCategoriaData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/filme")
      .then((res) => res.json())
      .then((categoriaData) => setCategoriaData(categoriaData));
  }, []);

  const categorias = categoriaData.map((categoria) => categoria.categoria);
  const categoriasUnicas = [...new Set(categorias)];
  const categoriasUnicasCount = categoriasUnicas.map((categoria) => {
    return {
      categoria: categoria,
      count: categorias.filter((c) => c === categoria).length,
    };
  });
  console.log(categoriasUnicasCount);

  // now create a new chart with the 'categoria' and the 'count' of movies
  const renderLineChart2 = (
    <LineChart
      width={730}
      height={250}
      data={categoriasUnicasCount}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="categoria" />
      <YAxis />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
  // search from loja api, how many lojas has each 'cidade', then console log the categories and the number of lojas
  const [cidadeData, setCidadeData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/loja")
      .then((res) => res.json())
      .then((cidadeData) => setCidadeData(cidadeData));
  }, []);

  const cidades = cidadeData.map((cidade) => cidade.cidade);
  const cidadesUnicas = [...new Set(cidades)];
  const cidadesUnicasCount = cidadesUnicas.map((cidade) => {
    return {
      cidade: cidade,
      count: cidades.filter((c) => c === cidade).length,
    };
  });

  // now create a new chart with the 'cidade' and the 'count' of lojas
  const renderLineChart3 = (
    <LineChart
      width={730}
      height={250}
      data={cidadesUnicasCount}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="cidade" />
      <YAxis />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );

  // search from funcionario api, how many funcionarios has each 'cidade', then console log the cidades and the number of funcionarios
  const [cidadeFuncionarioData, setCidadeFuncionarioData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/funcionario")
      .then((res) => res.json())
      .then((cidadeFuncionarioData) =>
        setCidadeFuncionarioData(cidadeFuncionarioData)
      );
  }, []);

  const cidadesFuncionario = cidadeFuncionarioData.map(
    (cidadeFuncionario) => cidadeFuncionario.cidade
  );
  const cidadesFuncionarioUnicas = [...new Set(cidadesFuncionario)];
  const cidadesFuncionarioUnicasCount = cidadesFuncionarioUnicas.map(
    (cidadeFuncionario) => {
      return {
        cidadeFuncionario: cidadeFuncionario,
        count: cidadesFuncionario.filter((c) => c === cidadeFuncionario).length,
      };
    }
  );

  // now create a new chart SimpleBarChar with the 'cidade' and the 'count' of funcionarios
  const renderSimpleBarChart = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={cidadesFuncionarioUnicasCount}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="cidadeFuncionario" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

  // search from cliente api, how many cliente has each 'cidade', then console log the cidades and the number of clientes
  const [cidadeClienteData, setCidadeClienteData] = useState<any[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/cliente")
      .then((res) => res.json())
      .then((cidadeClienteData) => setCidadeClienteData(cidadeClienteData));
  }, []);

  const cidadesCliente = cidadeClienteData.map(
    (cidadeCliente) => cidadeCliente.cidade
  );
  const cidadesClienteUnicas = [...new Set(cidadesCliente)];
  const cidadesClienteUnicasCount = cidadesClienteUnicas.map(
    (cidadeCliente) => {
      return {
        cidadeCliente: cidadeCliente,
        count: cidadesCliente.filter((c) => c === cidadeCliente).length,
      };
    }
  );

  // now create a new chart SimpleBarChar with the 'cidade' and the 'count' of clientes
  const renderSimpleBarChart2 = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={cidadesClienteUnicasCount}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="cidadeCliente" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

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
      {modalFuncionarioActive && <div className={styles.blurBackground}></div>}
      {modalFuncionarioActive && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h1>Dados tabela funcionarios</h1>
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
                  {funcionarioData.map((row) => (
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
            <button onClick={() => setModalFuncionarioActive(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
      {modalLojaActive && <div className={styles.blurBackground}></div>}
      {modalLojaActive && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h1>Dados tabela lojas</h1>
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
                    <TableCell align="right">gerente</TableCell>
                    <TableCell align="right">bairro</TableCell>
                    <TableCell align="right">cidade</TableCell>
                    <TableCell align="right">pais</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lojaData.map((row) => (
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
                      <TableCell align="right">{row.gerente}</TableCell>
                      <TableCell align="right">{row.bairro}</TableCell>
                      <TableCell align="right">{row.cidade}</TableCell>
                      <TableCell align="right">{row.pais}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button onClick={() => setModalLojaActive(false)}>Fechar</button>
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
          <h1 className={styles.quantidade}>{funcionarioData.length}</h1>
          <p className={styles.descricao}>Funcionários</p>
          <button
            className={styles.button}
            onClick={() => setModalFuncionarioActive(true)}
          >
            Ver dados
          </button>
          <div className={styles.block1_chart}></div>
        </div>
        <div className={styles.block4}>
          <h1 className={styles.quantidade}>{lojaData.length}</h1>
          <p className={styles.descricao}>Lojas</p>
          <button
            className={styles.button}
            onClick={() => setModalLojaActive(true)}
          >
            Ver dados
          </button>
        </div>
      </div>
      <div className={styles.graficos}>
        <div className={styles.grafico1}>
          <h1>Quantidade de filmes por gênero</h1>
          <div className={styles.grafico1_chart}>{renderLineChart2}</div>
        </div>
        <div className={styles.grafico2}>
          <h1>Quantidade de lojas por cidade</h1>
          <div className={styles.grafico1_chart}>{renderLineChart3}</div>
        </div>
      </div>
      <div className={styles.rightCharts}>
        <div className={styles.grafico3}>
          <h1>Quantidade de funcionarios por cidade</h1>
          <div className={styles.grafico1_chart}>{renderSimpleBarChart}</div>
        </div>
        <div className={styles.grafico4}>
          <h1>Quantidade de clientes por cidade</h1>
          <div className={styles.grafico1_chart}>{renderSimpleBarChart2}</div>
        </div>
      </div>
    </div>
  );
}
