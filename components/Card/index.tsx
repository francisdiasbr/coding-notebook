import * as React from 'react';
import { Card as MUICard, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

import { CardProps } from './types';

const Card = ({title, children}: CardProps) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="static/images/cards/JS.jpeg"
          alt="JS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}

export default Card