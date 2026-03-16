import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dashboard = () => {
  const [mining, setMining] = useState(false);
  const [hashrate, setHashrate] = useState(0);
  const [blocksFound, setBlocksFound] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    let interval;
    if (mining) {
      interval = setInterval(() => {
        setHashrate(getRandomInt(50, 150));
        setBlocksFound(prev => prev + (Math.random() < 0.01 ? 1 : 0));
        setEarnings(prev => prev + Math.random() * 0.0001);
      }, 1000);
    } else {
      setHashrate(0);
    }
    return () => clearInterval(interval);
  }, [mining]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Mining Statistics</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={4}>
            <Typography>Hashrate: {hashrate} H/s</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Blocks Found: {blocksFound}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Earnings: {earnings.toFixed(6)} BTC</Typography>
          </Grid>
        </Grid>
        <Button
          variant={mining ? 'contained' : 'outlined'}
          color={mining ? 'error' : 'primary'}
          sx={{ mt: 2 }}
          onClick={() => setMining(m => !m)}
        >
          {mining ? 'Stop Mining' : 'Start Mining'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
