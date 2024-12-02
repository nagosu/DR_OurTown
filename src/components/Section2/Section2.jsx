import styled from 'styled-components';
import checkRedIcon from '../../assets/icons/svg/check_red.svg';
import minusRedIcon from '../../assets/icons/svg/minus_red.svg';

const Section2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 845px;
  min-height: 845px;
  background-color: #ffffff;
  padding: 100px 320px 120px 320px;
  gap: 60px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #212121;
  line-height: 60px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 505px;
  min-height: 505px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  height: 100%;
  min-height: 100%;
  gap: 40px;
  border: 1px solid #ff2828;
  border-radius: 36px;
  padding: 36px 36px 40px 36px;

  hr {
    width: 100%;
    border-top: 1px solid #d9d9d9;
  }
`;

const ContentItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #212121;
    line-height: 44px;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #212121;
    line-height: 32px;
  }
`;

const ContentItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 28px;
`;

const ContentItemDescriptionWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  p {
    font-size: 1.375rem;
    font-weight: 400;
    color: #212121;
    line-height: 30px;
  }
`;

const ColDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const CheckIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const MinusIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

function Section2() {
  return (
    <Section2Container>
      <Title>디지털알리미 울동네는…</Title>
      <ContentContainer>
        <ContentItem>
          <ContentItemTitleWrapper>
            <h3>광고를 원하는 고객</h3>
            <h4>최저 비용으로 최대 광고효과</h4>
          </ContentItemTitleWrapper>
          <hr />
          <ContentItemDescriptionContainer>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <p>원하는 지점을 골라 광고</p>
            </ContentItemDescriptionWrapper>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <p>1,000원 / 1일 ~ 2,000원 / 1일</p>
            </ContentItemDescriptionWrapper>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <ColDescriptionWrapper>
                <p>
                  광고 1개당 노출횟수 및 시간
                  <br />
                  (40개 광고 유치시)
                </p>
                <div>
                  <MinusIconContainer>
                    <img src={minusRedIcon} alt='minus_red' />
                  </MinusIconContainer>
                  <p>500회 / 1일 이상</p>
                </div>
                <div>
                  <MinusIconContainer>
                    <img src={minusRedIcon} alt='minus_red' />
                  </MinusIconContainer>
                  <p>60분 / 1일 이상</p>
                </div>
              </ColDescriptionWrapper>
            </ContentItemDescriptionWrapper>
          </ContentItemDescriptionContainer>
        </ContentItem>
        <ContentItem>
          <ContentItemTitleWrapper>
            <h3>부동산중개사무소</h3>
            <h4>편리한 매물광고와 추가수익</h4>
          </ContentItemTitleWrapper>
          <hr />
          <ContentItemDescriptionContainer>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <p>온라인 매물등록</p>
            </ContentItemDescriptionWrapper>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <p>무제한 매물광고</p>
            </ContentItemDescriptionWrapper>
            <ContentItemDescriptionWrapper>
              <CheckIconContainer>
                <img src={checkRedIcon} alt='check_red' />
              </CheckIconContainer>
              <p>
                추가수익 기대
                <br />
                (광고유치수 등에 따라 차이)
              </p>
            </ContentItemDescriptionWrapper>
          </ContentItemDescriptionContainer>
        </ContentItem>
      </ContentContainer>
    </Section2Container>
  );
}

export default Section2;
