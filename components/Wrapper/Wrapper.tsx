import { ReactElement, useEffect, useState } from 'react';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Wrapper = ({ children }: IProps, { addToCart }: any) => {
  return (
    <>
      <div
        style={{
          height: '100%',
          marginTop: '60px',
          marginBottom: '40px',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
