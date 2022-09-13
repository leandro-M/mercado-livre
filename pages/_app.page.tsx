import type { NextPageContext } from "next"
import type { AppProps } from "next/app"
import { useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query"

import type { DehydratedState } from "@tanstack/react-query"

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext['err'];
} & AppProps<P>;


function App({ Component, pageProps }: ExtendedAppProps<PageProps>) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
