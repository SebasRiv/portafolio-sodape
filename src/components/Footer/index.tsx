import React from 'react';
import styled from 'styled-components';

import FooterInfo from '../FooterInfo';

const StyledFooter = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterInfo />
    </StyledFooter>
  );
};

export default Footer;
