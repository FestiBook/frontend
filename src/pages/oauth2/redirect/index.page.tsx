import type { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { a: accessToken, r: refreshToken } = context.query;

  try {
    const now = new Date();
    const accessTokenExpiration = new Date(now.getTime() + 43200000); // 12시간
    const refreshTokenExpiration = new Date(now.getTime() + 604800000); // 7일
    const ACCESS_TOKEN = `accessToken=${accessToken}; Path=/; Expires=${accessTokenExpiration.toUTCString()}; HttpOnly; Secure; SameSite=Strict`;
    const REFRESH_TOKEN = `refreshToken=${refreshToken}; Path=/; Expires=${refreshTokenExpiration.toUTCString()}; HttpOnly; Secure; SameSite=Strict`;

    if (accessToken && refreshToken) {
      context.res.setHeader("Set-Cookie", [ACCESS_TOKEN, REFRESH_TOKEN]);
    }

    // 메인 페이지로 리다이렉트
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

function oauthRedirectPage() {
  return <div>리다이렉트...</div>;
}

export default oauthRedirectPage;
