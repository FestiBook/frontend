import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "./const";

interface DropdownProps {
  isOpen: boolean;
}

export const Header = styled.div`
  width: 100vw;
  height: 4.3rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;

  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: space-between;
  }
`;

export const Logo = styled(Image)`
  flex-shrink: 0;

  @media ${MOBILE_MEDIA_QUERY} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MobileMenuDropdown = styled.div`
  position: absolute;
  top: 4.3rem;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled.a`
  padding: 1rem 1.5rem;
  text-align: left;
  color: black;
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Img = styled(Image)`
  margin-left: 1rem;
  cursor: pointer;
`;

export const MyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const Profile = styled(Image)`
  cursor: pointer;
  z-index: 10;
`;

export const Name = styled.span`
  margin-left: 0.5rem;
  color: var(--neutral-black, #000);
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2rem;
`;

export const Dropdown = styled.div<DropdownProps>`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 0.4em;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;

  @media ${MOBILE_MEDIA_QUERY} {
    top: 4.3rem;
    right: 1rem;
  }
`;

export const DropdownItem = styled.a`
  padding: 10px;
  text-align: center;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Div = styled(Link)`
  color: var(--neutral-black, #000);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--neutral-black, #000);
  font-family: Montserrat;
  font-size: 0.94rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 3rem;
`;

export const IconWrapper = styled.div`
  display: none;

  @media ${MOBILE_MEDIA_QUERY} {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media ${MOBILE_MEDIA_QUERY} {
    display: none;
  }
`;

export const HamburgerMenuIcon = styled(Image)`
  display: none;

  @media ${MOBILE_MEDIA_QUERY} {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    position: absolute;
    left: 1rem;
  }
`;

export const DesktopIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media ${MOBILE_MEDIA_QUERY} {
    display: none;
  }
`;

export const Click = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${MOBILE_MEDIA_QUERY} {
    display: flex;
    padding: 10px;
    text-align: center;
    color: black;
    text-decoration: none;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
