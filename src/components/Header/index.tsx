import React from 'react';
import Icon from '../Icon';
import NavBar from '../NavBar';
import SocialMedia from '../SocialMedia';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #85c1e9;

  & .header-container {
    width: 70%;
    margin: 0 auto;

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const index: React.FC = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <Icon />
        <NavBar />
        <SocialMedia />
      </div>
    </StyledHeader>
  );
};

export default index;
