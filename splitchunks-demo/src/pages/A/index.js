import React from 'react';
import Foo from '../../components/Foo';

const A = () => {
  return (
    <div>
      this is page A.
      <Foo />
      <a href="#/b">go to page B</a>
    </div>
  );
};

export default A;