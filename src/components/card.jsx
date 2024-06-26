import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SellIcon from '@mui/icons-material/Sell';


export default function RecipeReviewCard({data}) {
    const {titulo, precio, imagen} = data  
    console.log(titulo)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={titulo}
      />
      <CardMedia
        component="img"
        height="50"
        image= {imagen}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {precio}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton>
          <SellIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
