"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-SL5FBZXTYF";

function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const sendPageView = () => {
      if (!window.gtag) return false;

      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
        page_location: window.location.href,
      });

      return true;
    };

    if (sendPageView()) return;

    const retry = window.setTimeout(sendPageView, 500);
    return () => window.clearTimeout(retry);
  }, [pathname]);

  return null;
}

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <GoogleAnalyticsPageView />
    </>
  );
}
