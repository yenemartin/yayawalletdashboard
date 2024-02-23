/* eslint-disable react/prop-types */

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Table = ({transactions, userName}) => {
  
  const columns = [
    { field: 'id', headerName: 'Transaction ID', width: 300 },
    { 
      field: 'sender', 
      headerName: 'Sender', 
      width: 170,
      valueGetter: (params) =>
      `${params.row.sender.name}`,
    }, 
    { 
      field: 'receiver', 
      headerName: 'Receiver', 
      width: 170,
      valueGetter: (params) =>
      `${params.row.receiver.name}`,
    },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 90,},
    { field: 'currency', headerName: 'Currency', sortable: false, width: 90,},
    { field: 'outgoing/incoming', 
      headerName: 'In/Out', 
      sortable: false, 
      width: 50,
      renderCell: (params) => params.row.receiver.name === userName ? <ArrowDownward sx={{ color: 'green' }}      
      /> : <ArrowUpward sx={{ color: 'red' }} />
    },
    { field: 'cause', headerName: 'Cause', sortable: false, width: 200,},
    { field: 'createdAt', 
      headerName: 'CreatedAt', 
      sortable: false, 
      width: 250,
      renderCell: (params) => moment(params.row.created_at_time).format('MMMM DD YYYY, h:mm:ss a')
    },
  ];


  return (

    <Box sx={{height: 430, width: '95%'}}>
      <DataGrid 
       columns={columns}
       rows={transactions.data}
       initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20]} 
       getRowSpacing={params=>({
        top:params.isFirstVisible ? 0 : 5,
        bottom:params.isLastVisible ? 0 : 5
       })}
      />
    </Box>
  )
}

export default Table;