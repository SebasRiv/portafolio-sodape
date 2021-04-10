import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavBar = styled.nav`
  width: 48%;
  display: flex;
  justify-content: space-evenly;

  & a {
    color: black;
  }
`;

const index: React.FC = () => {
  return (
    <StyledNavBar>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/cv">CV</Link>
    </StyledNavBar>
  );
};

export default index;
