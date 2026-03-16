import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const LogViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [
        ...prev,
        `Log entry at ${new Date().toLocaleTimeString()}: Mining operation running...`
      ].slice(-10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Real-Time Log Viewer</Typography>
        <List>
          {logs.map((log, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={log} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default LogViewer;
