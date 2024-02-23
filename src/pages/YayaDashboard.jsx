
import {  keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../api/fetchTransactions';
import { Box, Typography, Button } from '@mui/material';
import Table from '../components/table/Table';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



// eslint-disable-next-line react/prop-types
const TransactionsTable = ({userName, page, setPage}) => {


  const { status, data, error } = useQuery({ queryKey: ['transactions', page], queryFn: () => fetchTransactions(page), enabled: !!page, placeholderData: keepPreviousData}, )

  const handlePreviousClick = () => {
    setPage((prev) => prev - 1);
  }
  
  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  }


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
    
      {/* <Table transactions={data} userName={userName}/> */}
      <Table transactions={data} userName={userName}/>
      <Box sx={{textAlign: 'center', mt: 2}}>
        {page === 1 ? (<Button disabled ><KeyboardDoubleArrowLeftIcon /></Button>) : (<Button onClick={handlePreviousClick}><KeyboardDoubleArrowLeftIcon /></Button>)}
        {page === data.lastPage ? (<Button disabled ><KeyboardDoubleArrowRightIcon /></Button>) : (<Button onClick={handleNextClick}><KeyboardDoubleArrowRightIcon /></Button>)}        
      </Box>
    </>
  );
};



export default TransactionsTable;

