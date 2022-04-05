{
  /* <div id="drawer-detail">{'Chưa có sản phẩm trong giỏ hàng'}</div>; */
}
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Icons from 'assets/icons';

export default function SwipeableTemporaryDrawer({ show }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      Nghai asdhifsihd fsdhf oisdhfoi hsdofihsdoifh
    </Box>
  );

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)} style={{ height: '16px' }}>
            <Icons.BagShopping height={'16'} />
          </span>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
