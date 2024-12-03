import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import ThirdContent from '../../components/ThirdContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Third() {
  return (
    <Container>
      <NavBar />
      <ThirdContent />
    </Container>
  );
}

export default Third;
