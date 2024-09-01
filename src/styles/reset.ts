import { css } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src:
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff")
        format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-style: normal;
    src:
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff")
        format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-style: normal;
    src:
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff")
        format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-style: normal;
    src:
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff")
        format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-style: normal;
    src:
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff")
        format("woff");
    font-display: swap;
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Pretendard";
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }

  /* custom */
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default reset;
