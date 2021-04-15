import React from 'react';
import styled from 'styled-components';

import bannerImage from '../../assets/banner-image.jpg';

const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bannerImage});
  background-size: cover;
  bakcground-repeat: no-repeat;
  background-attachment: fixed;
`;

const index: React.FC = () => {
  return (
    <StyledSection>
      <h1>Lorem, ipsum dolor.</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, qui?
      </h2>
    </StyledSection>
  );
};

export default index;
