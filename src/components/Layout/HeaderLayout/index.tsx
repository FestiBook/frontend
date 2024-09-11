import { ReactNode, useState } from "react";

import * as S from "../../../styles/header.styled";

function HeaderLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <S.Header>
      <S.Logo src="/icons/logo.svg" width={150} height={100} alt="로고" />
      <S.Menu>
        <S.Div href="/">• 홈</S.Div>
        <S.Div href="/">• AI 플래너</S.Div>
        <S.Div href="/">• 여행 가이드</S.Div>
        <S.Div href="/login">• 로그인</S.Div>
        <S.Img
          src="/icons/search.svg"
          width={23}
          height={23}
          alt="검색"
        ></S.Img>
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
      </S.Menu>
    </S.Header>
  );
}

export default HeaderLayout;
