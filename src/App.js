import React from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import LogViewer from './components/LogViewer';

function App() {
  const [page, setPage] = React.useState('dashboard');

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bitcoin Mining Dashboard
          </Typography>
          <Box>
            <button onClick={() => setPage('dashboard')}>Dashboard</button>
            <button onClick={() => setPage('settings')}>Settings</button>
            <button onClick={() => setPage('logs')}>Logs</button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {page === 'dashboard' && <Dashboard />}
        {page === 'settings' && <Settings />}
        {page === 'logs' && <LogViewer />}
      </Container>
    </>
  );
}

export default App;
