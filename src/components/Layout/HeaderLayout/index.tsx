import { useState } from "react";

import * as S from "../../../styles/header.styled";

function HeaderLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.Header>
      <S.Click href="/">
        <S.Logo src="/icons/logo.svg" width={150} height={100} alt="로고" />
      </S.Click>
      <S.HamburgerMenuIcon
        onClick={toggleMobileMenu}
        src="/icons/hamburger.svg"
        alt="햄버거 메뉴"
        width={23}
        height={23}
      />

      {/* 모바일 아이콘 */}
      <S.IconWrapper>
        <S.Img src="/icons/search.svg" width={23} height={23} alt="검색" />
        <S.Profile
          src="/icons/avatar.svg"
          alt="프로필사진"
          width={40}
          height={40}
          onClick={toggleDropdown}
        />
      </S.IconWrapper>

      <S.MobileIcon>
        <S.Dropdown isOpen={isDropdownOpen}>
          <S.DropdownItem href="/mypage">마이페이지</S.DropdownItem>
          <S.DropdownItem href="/404">로그아웃</S.DropdownItem>
        </S.Dropdown>
      </S.MobileIcon>

      <S.DesktopIcons>
        <S.Menu>
          <S.Div href="/">• 홈</S.Div>
          <S.Div href="/">• AI 플래너</S.Div>
          <S.Div href="/">• 여행 가이드</S.Div>
          <S.Div href="/login">• 로그인</S.Div>
        </S.Menu>

        <S.Click href="/search">
          <S.Img src="/icons/search.svg" width={23} height={23} alt="검색" />
        </S.Click>

        <S.MyInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.Profile
            src="/icons/avatar.svg"
            alt="프로필사진"
            width={40}
            height={40}
          />
          <S.Name>김유라</S.Name>
          {isDropdownOpen && (
            <S.Dropdown isOpen={isDropdownOpen}>
              <S.DropdownItem href="/mypage">마이페이지</S.DropdownItem>
              <S.DropdownItem href="/404">로그아웃</S.DropdownItem>
            </S.Dropdown>
          )}
        </S.MyInfo>
      </S.DesktopIcons>

      {isMobileMenuOpen && (
        <S.MobileMenuDropdown>
          <S.MobileMenuItem href="/">• 홈</S.MobileMenuItem>
          <S.MobileMenuItem href="/">• AI 플래너</S.MobileMenuItem>
          <S.MobileMenuItem href="/">• 여행 가이드</S.MobileMenuItem>
          <S.MobileMenuItem href="/login">• 로그인</S.MobileMenuItem>
        </S.MobileMenuDropdown>
      )}
    </S.Header>
  );
}

export default HeaderLayout;
