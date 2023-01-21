import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  NavContainer,
  NavItem,
  NavHeader,
  NavItems,
  NavHeaderContent,
  HamburgerIcon,
} from "./Navstyle";

const NavLogo = styled(Image)``;

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <NavContainer>
      <NavHeader>
        <NavLogo src="/images/Navbar/logo.png" width={50} height={30} />
        <NavHeaderContent>Truly Accoustic</NavHeaderContent>
      </NavHeader>
      <NavItems
        maxHeight={openMenu ? "200px" : "0px"}
        opacity={openMenu ? 1 : 0}
      >
        <NavItem>Deal of the day</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>Sign Up</NavItem>
        <NavItem>Sign In</NavItem>
      </NavItems>
      <HamburgerIcon>
        <Image
          src="/images/Navbar/hamburger.jpeg"
          alt="hamburger"
          width={40}
          height={30}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </HamburgerIcon>
    </NavContainer>
  );
};

export default Navbar;
