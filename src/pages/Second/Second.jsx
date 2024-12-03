import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import SecondContent from '../../components/SecondContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Second() {
  return (
    <Container>
      <NavBar />
      <SecondContent />
    </Container>
  );
}

export default Second;
