import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#fff', mb: 2,}}>
      <Toolbar>
        <Link to='/'>  
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'block', color: '#213547', marginRight: '20px', fontWeight: 'bolder', textDecoration: 'none' }}
            >
            Yaya Wallet
          </Typography>
        </Link>          
        <Box sx={{ flexGrow: 1 }} />          
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;