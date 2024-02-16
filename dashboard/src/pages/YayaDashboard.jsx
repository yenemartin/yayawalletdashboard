
import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../api/fetchTransactions';
import { Box, Typography } from '@mui/material';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


// eslint-disable-next-line react/prop-types
const TransactionsTable = ({userName}) => {
  
  const { status, data, error } = useQuery({ queryKey: ['transactions'], queryFn: () => fetchTransactions()})

  if (status === 'pending') {
    return <CircularProgress />
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>
  }


  return (
    <>
      <Box>
        <Typography variant='h4' component='h4' sx={{textAlign: 'left', mt: 3, mb: 3, mr: 20, display: 'inline-block'}} >
          Transactions
        </Typography>
        <Link to="/search"><button className='Button'>Search</button></Link>
      </Box>
    
      <Table transactions={data} userName={userName}/>
    </>
  );
};



export default TransactionsTable;

