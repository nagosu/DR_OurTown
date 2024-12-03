import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import FourthContent from '../../components/FourthContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Fourth() {
  return (
    <Container>
      <NavBar />
      <FourthContent />
    </Container>
  );
}

export default Fourth;
