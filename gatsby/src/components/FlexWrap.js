import * as React from 'react';
import Box from "@mui/material/Box";
import {Item} from './Item'

export function FlexWrap() {
  return (
    <div style={{ width: '100%', border: '1px solid red' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: '100%',
          borderRadius: 1,
        }}
      >
        <Item sx={{flex: 1}}>Item 1</Item>
        <Item sx={{flex: 1}}>Item 2</Item>
      </Box>
    </div>
  );
}
