import styled from 'styled-components';
import grid1 from '../../assets/images/grid_1.png';
import grid2 from '../../assets/images/grid_2.png';
import grid3 from '../../assets/images/grid_3.png';
import grid4 from '../../assets/images/grid_4.png';
import grid5 from '../../assets/images/grid_5.png';
import grid6 from '../../assets/images/grid_6.png';
import GridPost from '../GridPost';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 56px 320px 0 320px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(302px, 1fr));
  gap: 36px 24px;
`;

function SecondContent() {
  const gridData = [
    {
      image: grid1,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
    {
      image: grid2,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
    {
      image: grid3,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
    {
      image: grid4,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
    {
      image: grid5,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
    {
      image: grid6,
      title: '업체명이 한줄로 들어갑니다.',
      description:
        '주소가 들어갑니다. 주소가 두줄로 들어갑니다. 주소가 들어갑니다. 주소가 두줄로 들어갑니다.',
    },
  ];

  return (
    <Container>
      <GridContainer>
        {gridData.map((data, index) => (
          <GridPost
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default SecondContent;
