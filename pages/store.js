import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import shortid from 'shortid'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Todo = ({todos}) =>{
    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre de producto</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Accciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.products.map(({NameProduct,Category,Description,ProductQuantity,Status})=>(
              <TableRow >
                <TableCell component="th" scope="row">
                  {NameProduct}
                </TableCell>
                <TableCell align="right">{Category}</TableCell>
                <TableCell align="right">{Description}</TableCell>
                <TableCell align="right">{ProductQuantity}</TableCell>
                <TableCell align="right">{Status}</TableCell>
                <TableCell align="right"><Button variant="contained" color="secondary">Eliminar</Button>
                <Button variant="contained" color="primary">Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:5000/product')
    const todos = await res.json()
    return{
        props:{
            todos,
        },
    }
}



export default Todo
 










