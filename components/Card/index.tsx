import { Card as MUICard, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

import { CardProps } from './types';

const Card = ({ children, href, image, marginRight, title }: CardProps) => {
  const divStyle = {
    marginRight: marginRight ? '50px' : '0px', // Change '10px' to the desired margin value
  };

  return (
    <div style={divStyle}>
      <Link href={href}>
        <MUICard
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
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
      </Link>
    </div>
  );
}

export default Card