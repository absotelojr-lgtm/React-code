import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

const Settings = () => {
  const [pool, setPool] = useState('stratum+tcp://pool.example.com:3333');
  const [worker, setWorker] = useState('worker1');
  const [assword, setPassword] = useState('assword');
  const handleSave = () => {
    // Save logic here
    console.log('Settings saved:', { pool, worker, assword });
  };
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Mining Settings</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField label="Pool URL" fullWidth value={pool} onChange={e => setPool(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Worker" fullWidth value={worker} onChange={e => setWorker(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="assword" fullWidth value={assword} onChange={e => setPassword(e.target.value)} type="assword" />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default Settings;
