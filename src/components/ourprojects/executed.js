import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  borderRadius: '8px', 
  transition: 'transform 0.3s, background-color 0.3s, color 0.3s', 
  '&:hover': {
    transform: 'scale(1.05)', 
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
    backgroundColor: '#ec7c30', 
    color: '#fff', 
  },
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '80%', padding: '20px' }}>

      <Stack spacing={1}>
        <Item sx={{fontSize: '16px'}}><b>FTTH Rollout in UG in Delhi, UP & Rajasthan.
        </b></Item>
        {/* <Item sx={{fontSize: '16px'}}><b>100+ kms FTTH Rollout  in UG executed in UP.

        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>95+ Kms FTTH Rollout in UG executed in Rajasthan.
        </b></Item> */}
        <Item sx={{fontSize: '16px'}}><b>FTTB sites executed Delhi, UP & Rajasthan
        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>Home passes delivered in Flat Bed Areas, High Rise Buildings & through Structured Aerial Cabling.

        </b></Item>
       
        <Item sx={{fontSize: '16px'}}><b>Acquired Tower Sites in Delhi, NCR & Chandigarh.

</b></Item>


      </Stack>
    </Box>
  );
}
