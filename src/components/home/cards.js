import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import mastImage from '../../assets/images/mast.png'; // Make sure the path is correct

export default function MediaCard() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          sx={{ height: 200 }}
          image={mastImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Masts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          sx={{ height: 200 }}
          image={mastImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Masts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim.
          </Typography>
        </CardContent>
      </Card>     
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          sx={{ height: 200 }}
          image={mastImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Masts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
