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
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 40,
  padding: 0,
  borderRadius: 1,
  outlineStyle: 'none',
};

export default function BasicModal({ show }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleProgation = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <div id="model-detail" onClick={handleProgation}>
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
