import styled from 'styled-components';
import arrowRightDashedRed from '../../assets/icons/svg/arrow_right_dashed_red.svg';
import section3Image1 from '../../assets/images/section3_image1.png';
import section3Image2 from '../../assets/images/section3_image2.png';
import section3Image3 from '../../assets/images/section3_image3.png';
import section3Image4 from '../../assets/gif/section3_1.gif';
import section3Image5 from '../../assets/gif/section3_2.gif';
import section3Image6 from '../../assets/gif/section3_3.gif';
import section3Image7 from '../../assets/images/section3_image7.png';
import section3Image8 from '../../assets/gif/section3_4.gif';
import deviderRed from '../../assets/icons/svg/devider_red.svg';

const Section3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1416px;
  min-height: 1416px;
  padding: 120px 320px 120px 320px;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;

  h3 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #ff2828;
    line-height: 32px;
  }
`;

const SequenceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 234px;
  max-height: 234px;
  gap: 8px;
`;

const SequenceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 214px;
  min-width: 214px;
  max-width: 214px;
  height: 100%;
  padding: 24px 16px;
  gap: 16px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 24px;

  h4 {
    font-size: 1.375rem;
    font-weight: 700;
    color: #212121;
    line-height: 30px;
  }
`;

const SequenceItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;

  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #212121;
    line-height: 26px;
    white-space: nowrap;
  }
`;

const ExampleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 220px;
  max-height: 220px;
  gap: 28px;
  margin-top: 18px;
`;

const ExampleLeft = styled.div`
  display: flex;
  gap: 8px;
`;

const ExampleLeftItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 302px;
  max-width: 302px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #7a7a7a;
    line-height: 24px;
  }
`;

const ExampleRightItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 302px;
  max-width: 302px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border: 4px solid #000000;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #7a7a7a;
    line-height: 24px;
  }
`;

const SequenceBottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 184px;
  max-height: 184px;
  gap: 29px;
`;

const SequenceBottomItemsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 100%;
  gap: 8px;
`;

const SequenceBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 287px;
  min-width: 287px;
  max-width: 287px;
  height: 100%;
  padding: 24px 16px;
  gap: 16px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 24px;

  h4 {
    font-size: 1.375rem;
    font-weight: 700;
    color: #212121;
    line-height: 30px;
  }
`;

const SequenceBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 24px;

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
    color: #212121;
    line-height: 30px;
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #212121;
    line-height: 26px;
    white-space: nowrap;
  }
`;

function Section3() {
  return (
    <Section3Container>
      <Title>광고방식</Title>
      <ContentContainer>
        {/* 광고를 원하는 고객 */}
        <ContentItem>
          <h3>광고를 원하는 고객</h3>
          <SequenceContainer>
            <SequenceItem>
              <h4>회원가입</h4>
              <SequenceItemDescription>
                <p>- 관공서</p>
                <p>- 지역축제</p>
                <p>- 지역소상공인 등</p>
                <p>- 지역에 알리고 싶은 것들</p>
              </SequenceItemDescription>
            </SequenceItem>
            <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
            <SequenceItem>
              <h4>광고 이미지 업로드</h4>
              <SequenceItemDescription>
                <p>- jpeg, gif 등</p>
                <p>- 가로 PPT 사이즈</p>
              </SequenceItemDescription>
            </SequenceItem>
            <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
            <SequenceItem>
              <h4>광고 기간 선택</h4>
              <SequenceItemDescription>
                <p>- 일단위</p>
              </SequenceItemDescription>
            </SequenceItem>
            <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
            <SequenceItem>
              <h4>
                광고희망
                <br />
                지역 · 지점 선택
              </h4>
              <SequenceItemDescription></SequenceItemDescription>
            </SequenceItem>
            <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
            <SequenceItem>
              <h4>디지털사이니지</h4>
              <SequenceItemDescription>
                <p>- 부동산중개사무소 위치</p>
              </SequenceItemDescription>
            </SequenceItem>
          </SequenceContainer>
          <ExampleContainer>
            <ExampleLeft>
              <ExampleLeftItem>
                <img src={section3Image1} alt='section3_image1' />
                <span>전면</span>
              </ExampleLeftItem>
              <ExampleLeftItem>
                <img src={section3Image2} alt='section3_image2' />
                <span>2면</span>
              </ExampleLeftItem>
              <ExampleLeftItem>
                <img src={section3Image3} alt='section3_image3' />
                <span>6면</span>
              </ExampleLeftItem>
            </ExampleLeft>
            <img src={deviderRed} alt='devider_red' />
            <ExampleRightItem>
              <img src={section3Image4} alt='section3_image4' />
              <span>
                디지털사이니지
                <br />* 실제 각화면 6, 12초 단위
              </span>
            </ExampleRightItem>
          </ExampleContainer>
        </ContentItem>
        {/* //광고를 원하는 고객 */}

        {/* 부동산중개사무소 */}
        <ContentItem>
          <h3>부동산중개사무소</h3>
          <SequenceBottomContainer>
            <SequenceBottomItemsContainer>
              <SequenceBottomItem>
                <h4>회원가입</h4>
                <SequenceItemDescription>
                  <p>- 외부광고와 매물광고 함께</p>
                  <p>- 매물광고만</p>
                </SequenceItemDescription>
              </SequenceBottomItem>
              <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
              <SequenceBottomItem>
                <h4>매물등록</h4>
                <SequenceItemDescription>
                  <p>- 사진 최대 6장</p>
                  <p>
                    - 부동산자체광고 이미지
                    <br />
                    &nbsp;&nbsp;&nbsp;(jpeg, gif, 가로PPT 사이즈)
                  </p>
                </SequenceItemDescription>
              </SequenceBottomItem>
              <img src={arrowRightDashedRed} alt='arrow_right_dashed_red' />
              <SequenceBottomItem>
                <h4>디지털사이니지</h4>
                <SequenceItemDescription>
                  <p>- 부동산중개사무소 위치</p>
                </SequenceItemDescription>
              </SequenceBottomItem>
            </SequenceBottomItemsContainer>
            <SequenceBottomRight>
              <h3>• 선택사항</h3>
              <p>- 디스플레잉 시간 : 6초, 12초</p>
            </SequenceBottomRight>
          </SequenceBottomContainer>

          <ExampleContainer>
            <ExampleLeft>
              <ExampleLeftItem>
                <img src={section3Image5} alt='section3_image5' />
                <span>
                  전면
                  <br />* 실제 이미지 각 2초 단위
                </span>
              </ExampleLeftItem>
              <ExampleLeftItem>
                <img src={section3Image6} alt='section3_image6' />
                <span>
                  2면
                  <br />* 실제 이미지 각 2초 단위
                </span>
              </ExampleLeftItem>
              <ExampleLeftItem>
                <img src={section3Image7} alt='section3_image7' />
                <span>6면</span>
              </ExampleLeftItem>
            </ExampleLeft>
            <img src={deviderRed} alt='devider_red' />
            <ExampleRightItem>
              <img src={section3Image8} alt='section3_image8' />
              <span>
                디지털사이니지
                <br />* 실제 각화면 6, 12초 단위
              </span>
            </ExampleRightItem>
          </ExampleContainer>
        </ContentItem>
      </ContentContainer>
    </Section3Container>
  );
}

export default Section3;
