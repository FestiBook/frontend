import type { AppProps } from "next/app";
import { NextPage } from "next/types";

import { ReactElement, ReactNode, useState } from "react";

import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OverlayProvider } from "overlay-kit";
import { ToastContainer } from "react-toastify";

import WrapMSW from "@/mocks/WrapMSW";
import reset from "@/styles/reset";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout; // components 속성이 NextPageWithLayout 타입을 따르도록 변경
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0, // 재시도 횟수
          },
        },
      }),
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    // <WrapMSW>
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <Global styles={reset} />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer pauseOnFocusLoss={false} />
        {getLayout(<Component {...pageProps} />)}
      </OverlayProvider>
    </QueryClientProvider>
    // </WrapMSW>
  );
}
