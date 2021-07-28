import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  position: sticky;
  font-size: 1.2rem;
  top: 0;
  //z-index: 999;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  //justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const HamburgerMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-20px, -20px);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
 align-items: center;
 list-style: none;
    @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${props => props.click ? 0 : '-100%'};
    background: #101522;
    transition: 1.2s ease-in-out;
   }
 `;

export const NavItem = styled.li`

 //border-bottom: 2px solid transparent;
 &:hover {
    border-bottom: 2px solid #4b59f7;
    padding-bottom: 5px;
   };

  @media screen and (max-width: 960px) {
      width: 100%;

     &:hover {
       border: none;
     }
 }
 `;

export const NavLinks = styled(Link)`
  color: white;
   text-decoration: none;
   height: 100%;
   padding: 0.5rem 2rem;

    @media screen and (max-width: 960px) {
     text-align: center;
     padding: 2rem;
     width: 100%;
    display: table;
    &:hover{
      color: #4b59f7;
    }
   }
  `;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
  width: 100%;
}
`

export const NavBtnLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 8px 16px;
  border: none;
  outline: none;
  width: 100%;
`
