import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import uniqid from 'uniqid'
import MenuNavigation from './MenuComponents/MenuNavigation'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function History(props) {
  const classes = useStyles();

  return (
      <>
      <MenuNavigation/>
    <TableContainer component={Paper} className='history_table'>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">#</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Items</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.menu.user.history ? props.menu.user.history.length !== 0 ? props.menu.user.history.map((value,i)=>{
                return <StyledTableRow key={uniqid()}>
                <StyledTableCell align="center">{i + 1}</StyledTableCell>
                <StyledTableCell align="center">{value.date}</StyledTableCell>
                <StyledTableCell align="center">${value.amount}</StyledTableCell>
                <StyledTableCell align="center">{value.items.length}</StyledTableCell>
                </StyledTableRow>
            }): ()=>{
                return <StyledTableRow key={uniqid()}>
                <StyledTableCell align="center">No Purchase History</StyledTableCell>
                </StyledTableRow>
            } : ''}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

const mapStateToProps = state =>{
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(History);
