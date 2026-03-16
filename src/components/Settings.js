import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

const Settings = () => {
  const [pool, setPool] = useState('stratum+tcp://pool.example.com:3333');
  const [worker, setWorker] = useState('worker1');
  const [password, setPassword] = useState('x');

  const handleSave = () => {
    alert('Settings saved (not really, this is a demo).');
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
            <TextField label="Password" fullWidth value={password} onChange={e => setPassword(e.target.value)} type="password" />
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
