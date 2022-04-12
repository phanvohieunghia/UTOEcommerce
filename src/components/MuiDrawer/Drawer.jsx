// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Icons from 'assets/icons';

// export default function SwipeableTemporaryDrawer({ show }) {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <div id="drawer-detail">{'Chưa có sản phẩm trong giỏ hàng'}</div>
//     </Box>
//   );

//   return (
//     <>
//       {['right'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <div
//             onClick={toggleDrawer(anchor, true)}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <Icons.BagShopping height={'16'} />
//           </div>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './drawer.scss';
export default function TemporaryDrawer({ arrow, callback, state, setState }) {
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
