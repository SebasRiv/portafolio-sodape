import React from 'react';
import copyright from '../../assets/copyright.svg';

const FooterInfo: React.FC = () => {
  return (
    <div>
      <h2>Fulano de tal</h2>
      <p>fulano@detal.com</p>
      <img src={copyright} alt="copyright" />
      <h3>2021</h3>
    </div>
  );
};

export default FooterInfo;
