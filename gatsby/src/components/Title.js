import React from 'react';
import styled from 'styled-components';
import {useMediaQuery} from "@mui/material";

const TitleBlock = styled('div')`
  font-size: ${({matches}) => matches ? '6rem' : '3rem'};
  font-weight: 700;
`

export const Title = ({title = 'Default Title'}) => {
  const matches = useMediaQuery('(min-width:600px)');
  // console.log('matches', matches);
  return (
    <TitleBlock matches={matches}>{title.toUpperCase()}</TitleBlock>
  )
}
