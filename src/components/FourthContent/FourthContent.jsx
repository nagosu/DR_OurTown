import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 160px 0 0 0;
`;

const Content = styled.div`
  display: flex;
  width: 960px;
  height: 542px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  padding: 60px 36px 120px 36px;
  gap: 40px;
  background-color: #ffffff;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #212121;
    line-height: 44px;
  }
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #4b4b4b;
    line-height: 20px;
  }
`;

const LoginInputWrapper = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #ffffff;

  input {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: #4b4b4b;
    background-color: transparent;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 52px;
  min-height: 52px;
  background-color: #ff2828;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 20px;
`;

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    font-size: 0.875rem;
    font-weight: 600;
    color: #212121;
    line-height: 18px;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
    cursor: pointer;
  }
`;

const LoginBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 100%;
  padding: 60px 36px 120px 36px;
  gap: 108px;
  background-color: #ffe07c;
`;

const LoginBannerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

const LoginBannerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104px;
  min-height: 104px;
  background-color: #ffffff;
  border-radius: 12px;
  gap: 4px;

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: #212121;
    line-height: 28px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ff2828;
    line-height: 32px;
  }
`;

const Logo = styled.img`
  width: 148px;
  height: 34px;
`;

function FourthContent() {
  return (
    <Container>
      <Content>
        <LoginContainer>
          <h2>로그인</h2>
          <LoginContent>
            <LoginInputContainer>
              <span>아이디</span>
              <LoginInputWrapper>
                <input type='text' />
              </LoginInputWrapper>
            </LoginInputContainer>
            <LoginInputContainer>
              <span>비밀번호</span>
              <LoginInputWrapper>
                <input type='password' />
              </LoginInputWrapper>
            </LoginInputContainer>
            <LoginButton>로그인</LoginButton>
            <SignupContainer>
              <button>회원가입</button>
              <span>아이디/비밀번호 찾기</span>
            </SignupContainer>
          </LoginContent>
        </LoginContainer>

        <LoginBanner>
          <LoginBannerItemContainer>
            <LoginBannerItem>
              <p>광고주는</p>
              <span>최저 비용으로 최대 광고효과를</span>
            </LoginBannerItem>
            <LoginBannerItem>
              <p>부동산중개사무소는</p>
              <span>편리한 매물광과와 추가수익까지</span>
            </LoginBannerItem>
          </LoginBannerItemContainer>
          <Logo src={logo} alt='logo' />
        </LoginBanner>
      </Content>
    </Container>
  );
}

export default FourthContent;
