/* eslint-disable react/prop-types */
import moment from "moment";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import './table.css';


const Table = ({transactions, userName}) => {

  console.log('Transaction table: ', transactions);
  const renderRow = (transaction) => {  

    return (
      <tr key={transaction.id}>
        <td>{transaction.id}</td>
        <td>{transaction.sender.name}</td>
        <td>{transaction.receiver.name}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
        <td>{transaction.receiver.name === userName ? <ArrowDownward sx={{ color: 'green' }}/> : <ArrowUpward sx={{ color: 'red' }} />}</td>
        <td>{transaction.cause}</td>
        <td>{moment(transaction.created_at_time).format('MMMM DD YYYY, h:mm:ss a')}</td>
      </tr>
    );
  };


  return (
    <div className="table-body">
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
            <th>Cause</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {transactions.data.map((transaction) => renderRow(transaction))}
        </tbody>
      </table>
    </div>
  )
}

export default Table