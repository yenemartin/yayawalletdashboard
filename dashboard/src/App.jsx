import { keepPreviousData, useQuery } from '@tanstack/react-query';
import './App.css'
import TransactionsTable from './pages/YayaDashboard';
import { fetchTransactions } from './api/fetchTransactions';
import Search from './pages/Search';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';

function App() {
  const [transactionPage, setTransactionPage] = useState(1);

  const userName = 'Anteneh Gebeyaw';

  const { status, data, error } = useQuery({ queryKey: ['transactions', transactionPage], queryFn: () => fetchTransactions(transactionPage), enabled: !!transactionPage, placeholderData: keepPreviousData});


  if (status === 'pending') {
    return <CircularProgress />
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TransactionsTable userName={userName} transactions={data} page={transactionPage} setPage={setTransactionPage}/>}/>
        <Route path='/search' element={<Search userName={userName} />}/>
      </Routes>
      
      
    </>
  )
}

export default App;
