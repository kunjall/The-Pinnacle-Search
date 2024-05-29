import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2" fontWeight={'bold'} fontSize= '16px'>
      THE PINNACLE SEARCH
with locations in New Delhi , Gurugram & Chandigarh was established in 2014. We began as a sapling under MIG Group which is a 110 years old Business house, having established their mark in multiple businesses from Textiles, Defence & then telecom.
As our reach grew, we felt the need to broaden our focus to include telecom with our highly qualified team of experts from reputable Organizations.
With a wide variety of Telecom Operators and Channel Partners, we have been able to develop our presence.
Our core strength is our technical knowledge , market dynamics and our committed team, who are dedicated to provide customer satisfaction with their zeal to stand in the toughest conditions and high integrity.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 1000, marginBottom: '20px', marginTop: '-10px'}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
