import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import delhiImage from '../../assets/images/delhi-ncr.png'; 
import rajasthanImage from '../../assets/images/rajasthan.png'; 
import chandigarhImage from '../../assets/images/chandigarh.png'; 
import punjabImage from '../../assets/images/punjab.png'; 
import kolkataImage from '../../assets/images/kolkata.png'; 


export default function MediaCard() {
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap: '16px', justifyContent: 'center'}}>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={delhiImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Delhi NCR
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Noida, Ghaziabad, Faridabad & Gurugram          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={rajasthanImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Rajasthan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Jaipur, Ajmer, Chittorgarh, Jodhpur & Udaipur          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={chandigarhImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Chandigarh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mohali & Zirakpur
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={punjabImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Punjab
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jallandhar, Ludhiana & Amritsar
          </Typography>

        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minheight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={kolkataImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Kolkata
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim. */}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </div>
  );
}
