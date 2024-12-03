import styled from 'styled-components';
import third1 from '../../assets/images/third_1.png';
import third2 from '../../assets/images/third_2.png';
import third3 from '../../assets/images/third_3.png';
import ContactModal from '../../components/ContactModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 88px 320px 0 320px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 12px;

  button {
    font-size: 1rem;
    font-weight: 600;
    color: #212121;
    line-height: 20px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  min-height: 280px;
  gap: 34px;

  img {
    width: 404px;
    min-width: 404px;
    height: 100%;
    border-radius: 12px;
  }
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 36px;

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: #212121;
    line-height: 30px;
  }
`;

const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #212121;
    line-height: 32px;
  }
`;

const DescriptionInfoDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    width: 1px;
    height: 10px;
    background-color: #afafaf;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #212121;
    line-height: 24px;
  }
`;

const ContactButton = styled.button`
  width: 164px;
  height: 52px;
  border-radius: 4px;
  background-color: #ff2828;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 28px;
`;

function ThirdContent() {
  return (
    <Container>
      <Content>
        <TopContent>
          <button type='button'>전체보기</button>
          <ImagesContainer>
            <img src={third1} alt='third1' />
            <img src={third2} alt='third2' />
            <img src={third3} alt='third3' />
          </ImagesContainer>
        </TopContent>

        <BottomContent>
          <DescriptionContainer>
            <DescriptionInfo>
              <h2>서비스 설명</h2>
              <DescriptionInfoDetail>
                <span>서울 강남구 신사동 신사빌딩 302호</span>
                <div />
                <span>abc@gmail.com</span>
                <div />
                <span>02-1234-5678</span>
              </DescriptionInfoDetail>
            </DescriptionInfo>
            <p>
              내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이
              들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이
              들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이
              들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이
              들어갑니다. 내용이 들어갑니다.
            </p>
          </DescriptionContainer>
          <ContactButton type='button'>문의하기</ContactButton>
        </BottomContent>
      </Content>
      <ContactModal />
    </Container>
  );
}

export default ThirdContent;
