import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../../assets/icon-header.png';

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const index: React.FC = () => {
  return (
    <Link to="/">
      <StyledIcon src={Icon} alt="icono del header" />
    </Link>
  );
};

export default index;
