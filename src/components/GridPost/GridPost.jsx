import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
  height: 312px;
  gap: 12px;
`;

const GridImage = styled.img`
  width: 100%;
  height: 230px;
  min-height: 230px;
  max-height: 230px;
  object-fit: cover;
  border-radius: 12px;
`;

const GridTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #212121;
  line-height: 22px;
`;

const GridDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
`;

function GridPost({ image, title, description }) {
  return (
    <Container>
      <GridImage src={image} alt='Grid Image' />
      <GridTitle>{title}</GridTitle>
      <GridDescription>{description}</GridDescription>
    </Container>
  );
}

export default GridPost;
