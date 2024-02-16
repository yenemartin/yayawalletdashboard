import { useQuery } from '@tanstack/react-query';
import './App.css'
import TransactionsTable from './pages/YayaDashboard';
import { fetchTransactions } from './api/fetchTransactions';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function App() {

  const userName = 'Anteneh Gebeyaw';

  const { status, data, error } = useQuery({ queryKey: ['transactions'], queryFn: () => fetchTransactions()});


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
        <Route path='/' element={<TransactionsTable transactions={data.data} userName={userName}/>}/>
        <Route path='/search' element={<Search userName={userName} />}/>
      </Routes>
      
      
    </>
  )
}

export default App;
