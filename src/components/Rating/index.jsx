import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import './Rating.scss';

export default function BasicRating({ props }) {
  const [value, setValue] = useState(5);

  return (
    <>
      {props === 'control' && (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      )}
      {props === 'readOnly' && (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          readOnly
        />
      )}
    </>
  );
}
