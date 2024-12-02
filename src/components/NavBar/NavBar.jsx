import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 80px;
  min-height: 80px;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 40px;
  padding-right: 60px;
`;

const Logo = styled.img`
  width: 148px;
  height: 34px;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const MenuItem = styled.li`
  font-size: 1.25rem;
  cursor: pointer;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Logo src={logo} alt='DR' />
      <MenuList>
        <MenuItem>메인</MenuItem>
        <MenuItem>광고방식</MenuItem>
        <MenuItem>회원가입/로그인</MenuItem>
        <MenuItem>공지사항</MenuItem>
        <MenuItem>Q&A</MenuItem>
        <MenuItem>디지털광고물 제작업체 소개</MenuItem>
      </MenuList>
    </NavBarContainer>
  );
}

export default NavBar;
