import styled from 'styled-components';
import MainBanner from '../../components/MainBanner/MainBanner';
import NavBar from '../../components/NavBar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Main() {
  return (
    <MainContainer>
      <NavBar />
      <MainBanner />
    </MainContainer>
  );
}

export default Main;
