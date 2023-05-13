import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "5 Mayo de 2023", "Aprobado"),
  createData("Big Baza Bang ", 18908424, "5 Mayo de  2023", "Pendiente"),
  createData("Mouth Freshner", 18908424, "5 Mayo de  2023", "Aprobado"),
  createData("Cupcake", 18908421, "5 Mayo de  2023", "Terminado"),
];

const makeStyle = (status) => {
  if (status === "Aprobado") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pendiente") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Ordenes Recientes</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Productos</TableCell>
              <TableCell align="left">Identidad</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Detalles
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
