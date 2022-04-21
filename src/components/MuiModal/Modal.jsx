import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import Icons from 'assets/icons';
import './modal.scss';

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: 40,
  padding: 0,
  borderRadius: 1,
  outlineStyle: 'none',
};

export default function BasicModal({ show, callback }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={callback}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <div id="model-detail">
              <div className="search-frame">
                <input type="text" placeholder="Tìm kiếm trên UTO" />
                <Icons.MagnifyingGlass height={16} />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
