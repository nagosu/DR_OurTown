import styled from 'styled-components';
import bannerBackground from '../../assets/images/banner_background.png';

const MainBannerContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 700px;
  min-height: 700px;
  max-height: 700px;
  background-color: #cdf3ff;
  overflow: hidden;
`;

const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 466px;
  max-width: 466px;
  gap: 24px;
  z-index: 1;
  transform: translateY(-50%);

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.5rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }
`;

const RedText = styled.span`
  color: #ff2828;
`;

const BackgroundImage = styled.img`
  position: absolute;
  max-width: 1300px;
  top: 50%;
  right: 0;
  object-fit: cover;
  transform: translateY(-50%);
`;

function MainBanner() {
  return (
    <MainBannerContainer>
      <Description>
        <h1>
          <RedText>디지털알리미</RedText> 울동네
        </h1>
        <h2>
          디지털시대에 발맞춘
          <br />
          지역상인들과 개업공인중개사를 위한
          <br />
          디지털 광고 플랫폼
        </h2>
      </Description>
      <BackgroundImage
        src={bannerBackground}
        alt='background'
        draggable={false}
      />
    </MainBannerContainer>
  );
}

export default MainBanner;
