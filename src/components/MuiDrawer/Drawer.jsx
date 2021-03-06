import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './drawer.scss';

const style = {
  // maxWidth: 500,
  // width: '100%',
};

export default function MuiDrawer({ arrow, callback, state, render }) {
  return (
    <div>
      {[...arrow].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={callback(anchor, false)}
          >
            <Box sx={style}>{render()}</Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
