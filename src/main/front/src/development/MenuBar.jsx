import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #222;
  color: #fff;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 1.2rem;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

function MenuBar() {
  return (
    <MenuWrapper>
      <Logo to="/">개발중인 페이지</Logo>
      <MenuList>
        <MenuItem>
          <MenuLink to="/developPage">포트원 결제페이지</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/developPage/stockWave">StockWave</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/services">Services</MenuLink>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  );
}

export default MenuBar;