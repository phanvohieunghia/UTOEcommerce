import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './drawer.scss';
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
            <Box sx={{ width: 420 }}>{render()}</Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
