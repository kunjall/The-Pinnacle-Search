import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Satisfaction from '../../assets/images/values/satisfaction.png'; 
import Delivery from '../../assets/images/values/delivery.png'; 
import Win from '../../assets/images/values/win.png'; 
import Quality from '../../assets/images/values/quality.png'; 
import Innovation from '../../assets/images/values/innovation.png'; 
import Cost from '../../assets/images/values/cost.png'; 
import Proactive from '../../assets/images/values/proactive.png'; 


export default function MediaCard() {
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap: '16px', justifyContent: 'center'}}>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Satisfaction}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Customer Satisfaction
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Noida, Ghaziabad, Faridabad & Gurugram          </Typography> */}
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Delivery}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
            Timely Delivery
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Jaipur, Ajmer, Chittorgarh, Jodhpur & Udaipur          </Typography> */}
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Win}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
          Win-Win Price
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Mohali & Zirakpur
          </Typography> */}
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minHeight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Quality}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
          Service Quality
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Jallandhar, Ludhiana & Amritsar
          </Typography> */}

        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minheight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Innovation}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
          Innovation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim. */}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minheight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Cost}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
          Cost Effectiveness
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor quam sed ipsum varius posuere ut tempor ante. Aenean tincidunt ornare ligula id pharetra. Duis ultricies nisl vitae purus dignissim, et dapibus dolor dignissim. */}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, '&:hover': { boxShadow: 6 }, width: 2000, minheight: 100, maxHeight: 250 }}>
        <CardMedia
          sx={{ height: 150}}
          image={Proactive}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color= "#ec7c30" fontWeight={'bold'}>
          Proactive approach
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
