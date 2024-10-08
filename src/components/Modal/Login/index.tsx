import React from "react";

import { oauth2Type } from "@/types";

import * as S from "./styled";
import { ModalProps } from "..";
import Modal from "..";

interface LoginPlatformType {
  id: number;
  name: oauth2Type;
  icon: string;
  description: string;
}

const LOGIN_PLATFORM: LoginPlatformType[] = [
  {
    id: 1,
    name: "google",
    icon: "/icons/google.svg",
    description: "구글 로그인",
  },
  {
    id: 2,
    name: "kakao",
    icon: "/icons/kakao.svg",
    description: "카카오 로그인",
  },
  {
    id: 3,
    name: "naver",
    icon: "/icons/naver.svg",
    description: "네이버 로그인",
  },
];

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

function LoginModal({
  isOpen,
  onClose,
}: Omit<
  ModalProps,
  "children" | "$width" | "$height" | "$mobileWidth" | "$mobileHeight"
>) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      $width={35}
      $height={30}
      $mobileWidth={20}
      $mobileHeight={21}
    >
      <S.Box>
        <S.LogoImage
          src="/icons/logo.svg"
          width={330}
          height={150}
          alt="페스티북 로고"
        />
        <S.Title>SNS 계정으로 간편하게 시작하기</S.Title>
        <S.SocialBox>
          {LOGIN_PLATFORM.map((platform) => (
            <S.SocialNavLink
              key={platform.id}
              href={`${BASE_URL}/oauth2/authorization/${platform.name}`}
            >
              <S.SocialLogo
                src={platform.icon}
                width={60}
                height={60}
                alt={platform.description}
              />
            </S.SocialNavLink>
          ))}
        </S.SocialBox>
      </S.Box>
    </Modal>
  );
}

export default LoginModal;
