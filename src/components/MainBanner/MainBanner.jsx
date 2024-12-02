import styled from 'styled-components';
import bannerBackground from '../../assets/images/banner_background.png';

const MainBannerContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 700px;
  max-height: 700px;
  background-color: #cdf3ff;
  overflow: hidden;
`;

const BannerDescription = styled.div`
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

    .text-red {
      color: #ff2828;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }
`;

const BannerBackgroundImage = styled.img`
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
      <BannerDescription>
        <h1>
          <span className='text-red'>디지털알리미</span> 울동네
        </h1>
        <h2>
          서비스 설명이 들어갑니다. 서비스 설명이 들어갑니다. 서비스 설명이
          들어갑니다. 서비스 설명이 들어갑니다. 서비스 설명이 들어갑니다.
        </h2>
      </BannerDescription>
      <BannerBackgroundImage
        src={bannerBackground}
        alt='background'
        draggable={false}
      />
    </MainBannerContainer>
  );
}

export default MainBanner;
