import React from 'react';
import {CardGroup} from '../CardGroup/CardGroup';
import {WordCard} from './WordCard';

export const WordCardGroup = props => {
  return <CardGroup component={WordCard} {...props} />;
};
