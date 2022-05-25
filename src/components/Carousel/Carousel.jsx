import React from 'react';
import { Link } from 'react-router-dom';
import {
    Section,
    Carousel,
    Wrap,
    Image
} from './Styled'
import img1 from '../../img/logo.png';
import img2 from '../../img/logo2.png';
import img3 from '../../img/logo3.png';
import img4 from '../../img/logo4.png';
import img5 from '../../img/logo5.png';

export default function Recomends() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.5,
          arrows: false,
        },
      },
    ],
  };

  return (
      <>
        <Section>
            <p>Lenguages</p>
            <Carousel {...settings}>
                <Wrap>
                <div>
                    <Link to="/">
                    <Image src={img1} alt="image1" />
                    </Link>
                </div>
                </Wrap>

                <Wrap>
                <div>
                    <Link to="/">
                    <Image src={img2} alt="image2" />
                    </Link>
                </div>
                </Wrap>

                <Wrap>
                <div>
                    <Link to="/">
                    <Image src={img3} alt="image3" />
                    </Link>
                </div>
                </Wrap>

                <Wrap>
                <div>
                    <Link to="/">
                    <Image src={img4} alt="image4" />
                    </Link>
                </div>
                </Wrap>

                <Wrap>
                <div>
                    <Link to="/">
                    <Image src={img5} alt="image5" />
                    </Link>
                </div>
                </Wrap>
            </Carousel>
        </Section>
    </>
  );
}