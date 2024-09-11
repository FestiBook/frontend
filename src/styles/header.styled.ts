import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "./const";
import { TABLET_MEDIA_QUERY } from "./const";

interface DropdownProps {
  isOpen: boolean;
}

export const Header = styled.div`
  width: 100vw;
  height: 4.3rem;
  flex-shrink: 0;
  background-color: #000;
  background: var(--neutral-white, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
  }
`;

export const Logo = styled(Image)`
  flex-shrink: 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  @media ${TABLET_MEDIA_QUERY} {
    font-size: 0.84rem;
    margin-right: 3rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.64rem;
    margin-right: 1rem;
  }
`;

export const Img = styled(Image)`
  display: flex;
  margin-right: 3rem;
`;

export const MyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
export const Profile = styled(Image)``;
export const Name = styled.div`
  color: var(--neutral-black, #000);
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
  margin-right: 2rem;
`;

export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  margin-right: 2rem;
  margin-top: 0.3rem;
  border-radius: 0.4em;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isOpen }) =>
    isOpen ? "flex" : "none"}; /* 드롭다운이 열리고 닫히는 동작 */
  flex-direction: column;
  transition: opacity 0.3s ease-in-out;
`;

export const DropdownItem = styled.a`
  padding: 10px;
  text-align: left;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;
