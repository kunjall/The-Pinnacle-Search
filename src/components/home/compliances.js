import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  borderRadius: '8px', 
  transition: 'transform 0.3s, background-color 0.3s, color 0.3s', 
  display: 'flex', // Ensure the icon and text are on the same line
  alignItems: 'center', // Center align items vertically
  margin: theme.spacing(1), // Add margin for spacing between items
  '&:hover': {
    transform: 'scale(1.05)', 
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
    backgroundColor: '#ec7c30', 
    color: '#fff', 
  },
}));

export default function BasicStack() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
      <Item sx={{ fontSize: '16px' }}><CheckIcon style={{ color: 'green', marginRight: '8px' }} /><b>GST</b></Item>
      <Item sx={{ fontSize: '16px' }}><CheckIcon style={{ color: 'green', marginRight: '8px' }} /><b>PAN</b></Item>
      <Item sx={{ fontSize: '16px' }}><CheckIcon style={{ color: 'green', marginRight: '8px' }} /><b>ESI</b></Item>
      <Item sx={{ fontSize: '16px' }}><CheckIcon style={{ color: 'green', marginRight: '8px' }} /><b>PF</b></Item>
    </Box>
  );
}
