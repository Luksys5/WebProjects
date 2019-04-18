import React, { useState } from 'react';

export const CustomButton: React.SFC<any> = () => {
  const [active, setActive] = useState(false);
  
  return (
    <button
      className={`a-custom-button ${active ? 'active' : '' }`}
      onClick={() => setActive(!active)}
    >
      Custom Button
    </button>
  );
}