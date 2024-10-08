import Image from "next/image";

import styled from "@emotion/styled";

import { TABLET_MEDIA_QUERY } from "@/styles/const";

export const Container = styled.main`
  max-width: 120rem;
  min-width: 23.4375rem;
  width: 64rem;
  margin: 3.5rem auto 0;
  padding: 0 1rem;

  @media ${TABLET_MEDIA_QUERY} {
    width: 100%;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5625rem;
  font-weight: 700;
`;

export const Line = styled.p`
  flex-grow: 2;
  height: 0.5rem;
  border-top: 2px solid #000;
`;

export const CountBox = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1.5625rem;
  font-weight: 700;
`;

export const ListBox = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  margin: 1rem 0 3rem;

  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Observer = styled.div`
  width: 100%;
  height: 2rem;
`;

export const EmptyBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  font-weight: 800;
  gap: 1rem;
  padding-top: 1rem;

  @media ${TABLET_MEDIA_QUERY} {
    font-size: 1.75rem;
  }
`;

export const LogoImage = styled(Image)`
  width: 28rem;

  @media ${TABLET_MEDIA_QUERY} {
    width: 21rem;
  }
`;
