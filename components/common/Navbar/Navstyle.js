import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 15px 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  transition: max-height 200ms ease-in;
  transition: ${(props) =>
    props.opacity ? "opacity 100ms ease-in 200ms" : ""};

  @media (max-width: 800px) {
    max-height: ${(props) => props.maxHeight || "0px"};
    opacity: ${(props) => props.opacity || 0};
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  margin-top: 4px;
  margin-right: 35px;
  color: white;
  font-family: Poppins, sans-serif;
  cursor: pointer;

  :hover {
    border-bottom: 4px solid #0080ff;
    transition: border 0.1s ease-in;
  }
`;

export const NavHeader = styled.li`
  font-family: Poppins, sans-serif;
  display: flex;
`;

export const NavHeaderContent = styled.h4`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  margin-left: 20px;
  color: #0080ff;
  font-size: large;
`;
export const NavSearch = styled.input`
  height: 20px;
  margin-top: 0px;
`;

export const HamburgerIcon = styled.div`
  display: none;
  position: absolute;
  right: 15px;

  @media (max-width: 800px) {
    display: block;
  }
`;
