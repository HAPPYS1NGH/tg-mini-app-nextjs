"use client";

import { type PropsWithChildren, useEffect, useMemo, useState } from "react";
import { SDKProvider, useLaunchParams } from "@telegram-apps/sdk-react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useDidMount } from "@/hooks/useDidMount";

// function App(props: PropsWithChildren) {
//   const lp = useLaunchParams();
//   const miniApp = useMiniApp();
//   const themeParams = useThemeParams();
//   const viewport = useViewport();

//   useEffect(() => {
//     return bindMiniAppCSSVars(miniApp, themeParams);
//   }, [miniApp, themeParams]);

//   useEffect(() => {
//     return bindThemeParamsCSSVars(themeParams);
//   }, [themeParams]);

//   useEffect(() => {
//     return viewport && bindViewportCSSVars(viewport);
//   }, [viewport]);

//   return (
//     <
//     >
//       {props.children}
//     </>
//   );
// }

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const debug = useLaunchParams().startParam === "debug";

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <SDKProvider acceptCustomStyles debug={debug}>
      {children}
    </SDKProvider>
  );
}

export function TelegramProvider(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full">
      Loading
    </div>
  );
}
