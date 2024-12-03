import styled from 'styled-components';
import section4Background from '../../assets/images/section4_background.png';
import externalAd from '../../assets/icons/svg/external_ad.svg';
import outdoorAd from '../../assets/icons/svg/outdoor_ad.svg';
import tv from '../../assets/images/tv.png';
import tvInside from '../../assets/gif/section4.gif';

const Section4Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1276px;
  min-height: 1276px;
  padding: 120px 448px 120px 460px;
  background-color: #ffffff;
  gap: 60px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #212121;
  line-height: 60px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const ContentTopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 128px;
  min-height: 128px;
  gap: 40px;
`;

const ContentTopItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 430px;
  min-width: 430px;
  height: 100%;
  min-height: 100%;
  padding: 20px 30px;
  border: 1px solid #dddddd;
  border-radius: 24px;
`;

const ContentTopItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #fff5f5;

  img {
    width: 40px;
    height: 40px;
  }
`;

const ContentTopItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 1.25rem;
    font-weight: 500;
    color: #212121;
    line-height: 28px;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #212121;
    line-height: 32px;
  }
`;

const ContentBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

const TvWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 616px;
`;

const Tv = styled.img`
  width: 100%;
  height: 100%;
`;

const TvInside = styled.img`
  position: absolute;
  width: 974px;
  height: 544px;
  top: 8px;
  left: 19px;
`;

const TvDescription = styled.span`
  font-size: 1.375rem;
  font-weight: 400;
  color: #212121;
  line-height: 30px;
`;

function Section4() {
  return (
    <Section4Container>
      <BackgroundImage src={section4Background} alt='section4_background' />
      <Title>디지털사이니지 디스플레이 방식</Title>
      <ContentContainer>
        <ContentTopContainer>
          <ContentTopItem>
            <ContentTopItemIcon>
              <img src={externalAd} alt='external_ad' />
            </ContentTopItemIcon>
            <ContentTopItemText>
              <span>광고를 원하는 고객의</span>
              <h3>외부광고</h3>
            </ContentTopItemText>
          </ContentTopItem>
          <ContentTopItem>
            <ContentTopItemIcon>
              <img src={outdoorAd} alt='outdoor_ad' />
            </ContentTopItemIcon>
            <ContentTopItemText>
              <span>부동산중개소의</span>
              <h3>매물광고</h3>
            </ContentTopItemText>
          </ContentTopItem>
        </ContentTopContainer>

        <ContentBottomContainer>
          <TvWrapper>
            <Tv src={tv} alt='tv' />
            <TvInside src={tvInside} alt='tv_inside' />
          </TvWrapper>
          <TvDescription>
            외부광고 및 매물광고가 각각 전면, 2면, 6면에 순차 반복적
            디지털사이니지에 보여짐
            <br />
            외부광고(전면,2면,6면) ➔ 매물광고(전면,2면,6면) ➔ 외부광고 ➔
            매물광고
          </TvDescription>
        </ContentBottomContainer>
      </ContentContainer>
    </Section4Container>
  );
}

export default Section4;
