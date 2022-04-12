import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './drawer.scss';
export default function MuiDrawer({ arrow, callback, state }) {
  return (
    <div>
      {[...arrow].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={callback(anchor, false)}
          >
            <Box sx={{ width: 350 }}>
              <div id="drawer-detail">Chưa có sản phẩm trong giỏ hàng</div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
