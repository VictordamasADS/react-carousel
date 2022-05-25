import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Section = styled.section`
  padding: 1rem 0.2rem;
  width: 100%;
    p {
      text-align: center;
      font-size: 1.7rem;
      text-transform: uppercase;
      font-weight: 800;
      color: white;
      padding: 0 0.55rem;
      @media screen and (max-width: 991px) {
        font-size: 1.1rem;
      }
      @media screen and (max-width: 550px) {
        font-size: 0.95rem;
      }
  }
`;

export const Wrap = styled.div`
  position: relative;
  padding: 0 0.55rem;
  margin-top: 10px;
    div {
      display: block;
      opacity: 1;
      z-index: 2000;
      cursor: default;
      object-position: center;
      margin: 5px;
    }
`;

export const Image = styled.img`
  border-radius: 7px;
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    border-radius: 16px;
  }
  &:hover {
    filter: opacity(60%);
  }
`;

export const Carousel = styled(Slider)`
  & > button{
    opacity: 1;
    color: white;
    &:hover{
      opacity: 1;
      color: gray;
      transition: opacity 0.2s ease 0s;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 96%;
    margin: 0 auto;
  }
`;

export const Section2 = styled.section`
  width: 100%;
    p {
      text-align: center;
      font-size: 1.7rem;
      text-transform: uppercase;
      font-weight: 800;
      color: white;
      padding: 0 0.55rem;
      @media screen and (max-width: 991px) {
        font-size: 1.1rem;
      }
      @media screen and (max-width: 550px) {
        font-size: 0.95rem;
      }
  }

  @media (min-width: 768px) {
    position: absolute;
    padding: 670px 0px 0px 100px;
    top: 0;
  }
`;