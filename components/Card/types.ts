import {CardMediaProps} from '@mui/material/CardMedia';
import {Url} from 'next/dist/shared/lib/router/router';
import {ReactNode} from 'react';

export interface CardProps extends CardMediaProps{
  children: ReactNode
  href: Url
  image: string
  marginRight?: boolean
  title: string
}