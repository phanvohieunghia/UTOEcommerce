import Icons from 'assets/icons';
import React, { useState } from 'react';
import './inputQuantity.scss';

const InputQuantity = ({ quantity }) => {
  const [state, setState] = useState(1);
  const increase = () => {
    setState((prev) => {
      if (prev === quantity) {
        return prev;
      }
      return prev + 1;
    });
  };
  const decrease = () => {
    setState((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };
  const handleNumber = (e) => {
    let x = Number(e.target.value);
    if (x == !!NaN) {
      if (x != 0) x = state;
    }
    if (x > quantity) {
      x = quantity;
    }
    setState(x);
  };
  return (
    <>
      <div className="input-quantity">
        <div onClick={decrease}>
          <button>
            <Icons.Minus />
          </button>
        </div>
        <div>
          <input type="text" value={state} onChange={handleNumber} />
        </div>
        <div onClick={increase}>
          <button>
            <Icons.Plus />
          </button>
        </div>
      </div>
    </>
  );
};

export default InputQuantity;
