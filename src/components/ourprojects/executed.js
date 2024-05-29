import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
  borderRadius: '8px', // Rounded corners
  transition: 'transform 0.3s, background-color 0.3s, color 0.3s', // Smooth transition for transform, background color and text color
  '&:hover': {
    transform: 'scale(1.05)', // Slightly scale up on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
    backgroundColor: '#ec7c30', // Change background color on hover
    color: '#fff', // Change text color on hover
  },
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '80%', padding: '20px' }}>

      <Stack spacing={2}>
        <Item sx={{fontSize: '16px'}}><b>220 kms FTTH Rollout in UG executed in Delhi.
        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>70 kms FTTH Rollout  in UG executed in UP.

        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>35 Kms FTTH Rollout in UG executed in Rajasthan.
        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>15 FTTB sites executed in total in above Delhi, UP, Rajasthan
        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>7000+ Homepasses delivered in High Rise Buildings.

        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>40 kms FTTH Rollout in Overhead executed in UP.

        </b></Item>
        <Item sx={{fontSize: '16px'}}><b>250+ Tower Site Acquisitions done in NCR / Chandigarh.

</b></Item>

      </Stack>
    </Box>
  );
}
