import styled from 'styled-components';
import section1Background from '../../assets/images/section1_background.png';
import section1Image1 from '../../assets/images/section1_image1.png';
import section1Image2 from '../../assets/images/section1_image2.png';
import section1Image3 from '../../assets/images/section1_image3.png';
import section1Image4 from '../../assets/images/section1_image4.png';
import section1Image5 from '../../assets/images/section1_image5.png';
import section1Bottom from '../../assets/images/section1_bottom.png';
import section1Gif from '../../assets/gif/section1.gif';
import logo from '../../assets/gif/section1_logo.jpg';
import arrowRedIcon from '../../assets/icons/svg/arrow_red.svg';

const Section1Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1431px;
  min-height: 1431px;
  padding: 100px 320px 120px 320px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #212121;
    line-height: 60px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #212121;
    line-height: 32px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 71px;
`;

const ContentTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-top: 60px;
`;

const ContentTopItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #212121;
    line-height: 32px;
  }
`;

const ItemImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 1000px;
  gap: 24px;
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 236px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #212121;
    line-height: 24px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  min-width: 200px;
  min-height: 200px;
  background-color: #d9d9d9;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentBottomImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 832px;
  height: 624px;
`;

const ContentBottomImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBottomImageGif = styled.img`
  position: absolute;
  width: 303.85px;
  height: 161.78px;
  top: 320px;
  left: 220px;
`;

const ContentBottomLogo = styled.img`
  position: absolute;
  width: 100px;
  height: 60px;
  top: 390px;
  right: 175px;
  background-color: #ffffff;
`;

const LeftRedArrow = styled.img`
  position: absolute;
  top: 420px;
  left: 110px;
`;

const RightRedArrow = styled.img`
  position: absolute;
  top: 420px;
  right: 110px;
  transform: rotateY(180deg);
`;

function Section1() {
  return (
    <Section1Container>
      <BackgroundImage
        src={section1Background}
        alt='section1_background'
        draggable={false}
      />
      <TitleWrapper>
        <h2>지금은 디지털 광고시대!!</h2>
        <h3>지역의 종이 광고를 부동산중개소의 디지털사이니지로!</h3>
      </TitleWrapper>
      <ContentWrapper>
        <ContentTopContainer>
          <ContentTopItem>
            <h4>기존 광고방식</h4>
            <ItemImagesWrapper>
              <ImageItem>
                <ImageWrapper>
                  <img src={section1Image1} alt='section1_image1' />
                </ImageWrapper>
                <span>전단지</span>
              </ImageItem>
              <ImageItem>
                <ImageWrapper>
                  <img src={section1Image2} alt='section1_image2' />
                </ImageWrapper>
                <span>현수막</span>
              </ImageItem>
              <ImageItem>
                <ImageWrapper>
                  <img src={section1Image3} alt='section1_image3' />
                </ImageWrapper>
                <span>벽보</span>
              </ImageItem>
            </ItemImagesWrapper>
          </ContentTopItem>
          <ContentTopItem>
            <h4>부동산 창문광고</h4>
            <ItemImagesWrapper>
              <ImageItem>
                <ImageWrapper>
                  <img src={section1Image4} alt='section1_image4' />
                </ImageWrapper>
              </ImageItem>
              <ImageItem>
                <ImageWrapper>
                  <img src={section1Image5} alt='section1_image5' />
                </ImageWrapper>
              </ImageItem>
            </ItemImagesWrapper>
          </ContentTopItem>
        </ContentTopContainer>
        <ContentBottomImageWrapper>
          <ContentBottomImage src={section1Bottom} alt='section1_bottom' />
          <ContentBottomImageGif src={section1Gif} alt='section1_gif' />
          <ContentBottomLogo src={logo} alt='logo' />
        </ContentBottomImageWrapper>
        <LeftRedArrow src={arrowRedIcon} alt='left_arrow_red' />
        <RightRedArrow src={arrowRedIcon} alt='right_arrow_red' />
      </ContentWrapper>
    </Section1Container>
  );
}

export default Section1;
