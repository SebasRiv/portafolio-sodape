import React from 'react';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import styled from 'styled-components';

const StyledSocialMedia = styled.nav`
  width: 20%;
  display: flex;
  justify-content: space-evenly;

  & .media-icon {
    width: 32px;
    height: 32px;
  }
`;

const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" className="media-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" className="media-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" className="media-icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedin" className="media-icon" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <img src={github} alt="github" className="media-icon" />
      </a>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
