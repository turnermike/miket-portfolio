import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeHeroImg from '../../assets/images/IMG_0140.jpg';
import '../../assets/scss/app.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import Icons from '../../assets/icons/react-icons';
import Home2 from './Home2';
import Type from './Type';


function SkillsIconsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          576: {
            slidesPerView: 6
          },
          768: {
            slidesPerView: 8
          },
          992: {
            slidesPerView: 9
          },
          1200: {
            slidesPerView: 10
          },
          1400: {
            slidesPerView: 14
          }
        }}
        pagination={{
          el: '.pagination-wrapper',
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true
        }}
        loop={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
          {/* javascript */}
          <SwiperSlide data-tooltip-id="tt-1" data-tooltip-content="Javascript">
            <Icons.IoLogoJavascript />
            <Tooltip id="tt-1" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-2" data-tooltip-content="">
            <Icons.FaReact data-tooltip-id="tt-2" data-tooltip-content="React" />
            <Tooltip id="tt-2" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-3" data-tooltip-content="Redux">
            <Icons.SiRedux />
            <Tooltip id="tt-3" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-4" data-tooltip-content="Node JS">
            <Icons.FaNodeJs />
            <Tooltip id="tt-4" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-5" data-tooltip-content="jQuery">
            <Icons.SiJquery />
            <Tooltip id="tt-5" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* css */}
          <SwiperSlide data-tooltip-id="tt-6" data-tooltip-content="SCSS">
            <Icons.BsFiletypeScss />
            <Tooltip id="tt-6" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-7" data-tooltip-content="SaSS">
            <Icons.FaSass />
            <Tooltip id="tt-7" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-8" data-tooltip-content="CSS3">
            <Icons.FaCss3Alt />
            <Tooltip id="tt-8" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* html */}
          <SwiperSlide data-tooltip-id="tt-9" data-tooltip-content="HTML5">
            <Icons.FaHtml5 />
            <Tooltip id="tt-9" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-10" data-tooltip-content="Bootstrap">
            <Icons.BsBootstrap />
            <Tooltip id="tt-10" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* php */}
          <SwiperSlide data-tooltip-id="tt-11" data-tooltip-content="PHP">
            <Icons.FaPhp />
            <Tooltip id="tt-11" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-12" data-tooltip-content="Laravel">
            <Icons.FaLaravel />
            <Tooltip id="tt-12" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-13" data-tooltip-content="CodeIgniter">
            <Icons.DiCodeigniter />
            <Tooltip id="tt-13" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* cms */}
          <SwiperSlide data-tooltip-id="tt-14" data-tooltip-content="Wordpress">
            <Icons.FaWordpress />
            <Tooltip id="tt-14" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide className='woocommerce' data-tooltip-id="tt-15" data-tooltip-content="WooCommerce">
            <Icons.SiWoocommerce />
            <Tooltip id="tt-15" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-16" data-tooltip-content="Drupal">
            <Icons.FaDrupal />
            <Tooltip id="tt-16" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-17" data-tooltip-content="Shopify">
            <Icons.FaShopify />
            <Tooltip id="tt-17" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* services/web apps */}
          <SwiperSlide data-tooltip-id="tt-18" data-tooltip-content="Github">
            <Icons.FaGithub />
            <Tooltip id="tt-18" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-19" data-tooltip-content="Bitbucket">
            <Icons.FaBitbucket />
            <Tooltip id="tt-19" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-20" data-tooltip-content="Jira">
            <Icons.DiJira />
            <Tooltip id="tt-20" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-21" data-tooltip-content="Notion">
            <Icons.SiNotion />
            <Tooltip id="tt-21" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-22" data-tooltip-content="VSCode">
            <Icons.VscCode />
            <Tooltip id="tt-22" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* databases */}
          <SwiperSlide data-tooltip-id="tt-23" data-tooltip-content="MySQL">
            <Icons.GrMysql />
            <Tooltip id="tt-23" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-24" data-tooltip-content="SQLite">
            <Icons.SiSqlite />
            <Tooltip id="tt-24" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-25" data-tooltip-content="MongoDB">
            <Icons.DiMongodb />
            <Tooltip id="tt-25" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* design */}
          <SwiperSlide data-tooltip-id="tt-26" data-tooltip-content="Adobe Photoshop">
            <Icons.SiAdobephotoshop />
            <Tooltip id="tt-26" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-27" data-tooltip-content="Adobe InDesign">
            <Icons.SiAdobeindesign />
            <Tooltip id="tt-27" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-28" data-tooltip-content="Figma">
            <Icons.FaFigma />
            <Tooltip id="tt-28" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          {/* servers/hosting */}
          <SwiperSlide data-tooltip-id="tt-29" data-tooltip-content="Apache">
            <Icons.SiApache />
            <Tooltip id="tt-29" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-30" data-tooltip-content="Nginx">
            <Icons.SiNginx />
            <Tooltip id="tt-30" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-31" data-tooltip-content="Docker">
            <Icons.FaDocker />
            <Tooltip id="tt-31" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-32" data-tooltip-content="WP Engine">
            <Icons.SiWpengine />
            <Tooltip id="tt-32" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-33" data-tooltip-content="AWS">
            <Icons.FaAws />
            <Tooltip id="tt-33" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-34" data-tooltip-content="Google Cloud">
            <Icons.SiGooglecloud />
            <Tooltip id="tt-34" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
          <SwiperSlide data-tooltip-id="tt-35" data-tooltip-content="Heroku">
            <Icons.SiHeroku />
            <Tooltip id="tt-35" opacity={1} style={{ zIndex: 1}} />
          </SwiperSlide>
      </Swiper>
    </>    
  );
}

function Home() {
  return (
    // <section>
      <Container className="home-section" id="home">
        
        <Container fluid className="home-content">
          <Row>
            
            {/* main hero - typewriter */}
            <Col md={8} className="home-header">
              
              <h1>
                Hi!{" "}
              </h1>

              <h1 className="heading-name" >
                {/* Welcome to <strong>Mike Turner's</strong> portfolio website. */}
                Step into a world that is <strong>Mike Turner's</strong> portfolio website.
              </h1>
              
              <p>Mike steps up as:</p>
              <div className="typewriter">
                {" "}<Type />
              </div>

            </Col>
            
            {/* headshot */}
            <Col md={4} className='sidebar'>
              
              <div className="img-overlay-wrapper">
                <img
                  src={homeHeroImg}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
                <div className="overlay"></div>
              </div>
              
            </Col>
            
          </Row>
        </Container>
        
        <Container fluid className='home-content'>
          
          <h2>The skills to pay the bills: </h2>
            
          <Row>
            <Col md={12} className="carousel-wrapper">
              <SkillsIconsCarousel />
              <div className='pagination-wrapper'></div>
              <div className='swiper-button-prev'></div>
              <div className='swiper-button-next'></div>
            </Col>
          </Row>
          
        </Container>
      
        <Home2 />
      </Container>
    // </section>
  );
}

export default Home;
