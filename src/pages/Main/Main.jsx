import styled from 'styled-components';
import MainBanner from '../../components/MainBanner';
import NavBar from '../../components/NavBar';
import Section1 from '../../components/Section1';

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
      <Section1 />
    </MainContainer>
  );
}

export default Main;
