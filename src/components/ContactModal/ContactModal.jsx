import styled from 'styled-components';
import modalProfile from '../../assets/images/modal_profile.png';
import modalClose from '../../assets/icons/svg/modal_close.svg';
import fileAttachment from '../../assets/icons/svg/file_attachment.svg';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 505px;
  bottom: 24px;
  left: 24px;
  padding: 34px 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  top: 24px;
  right: 30px;
  background-color: transparent;

  img {
    width: 29.25px;
    height: 29.25px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 52px;
    min-width: 52px;
    height: 52px;
    min-height: 52px;
    border-radius: 50%;
  }
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #212121;
    line-height: 28px;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #212121;
    line-height: 18px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 6px;
  margin-top: 20px;

  textarea {
    width: 100%;
    height: 196px;
    min-height: 196px;
    max-height: 196px;
    padding: 16px;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 400;
    color: #212121;
    line-height: 24px;
    font-family: 'Pretendard';

    &::placeholder {
      color: #dcdcdc;
    }
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
  }
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    width: 130px;
    height: 48px;
    border: 1px solid #747474;
    border-radius: 4px;
    background-color: #ffffff;

    img {
      width: 16.5px;
      min-width: 16.5px;
      height: 19.5px;
      min-height: 19.5px;
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      color: #595959;
      line-height: 20px;
    }
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
  }
`;

const ContactButton = styled.button`
  width: 118px;
  height: 48px;
  min-height: 48px;
  background-color: #ff2828;
  border-radius: 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 28px;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
`;

function ContactModal() {
  return (
    <Container>
      <CloseButton>
        <img src={modalClose} alt='close' />
      </CloseButton>
      <ProfileContainer>
        <img src={modalProfile} alt='profile' />
        <NicknameContainer>
          <h3>name12</h3>
          <span>평균 응답 시간 : 30분 이내</span>
        </NicknameContainer>
      </ProfileContainer>

      <InputContainer>
        <textarea placeholder='정확하고 빠른 답변을 위해 요구사항을 상세하게 알려주세요 - 업종, 준비상황, 기한, 예산 등 (최소 20자 이상)' />
        <span>0/1000</span>
      </InputContainer>

      <FileContainer>
        <button>
          <img src={fileAttachment} alt='file' />
          <span>파일첨부</span>
        </button>
        <p>하나당 최대 500MB의 파일을 3개까지 첨부하실 수 있습니다.</p>
      </FileContainer>

      <ContactButton>문의하기</ContactButton>
    </Container>
  );
}

export default ContactModal;
