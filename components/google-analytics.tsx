"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SL5FBZXTYF";
let lastTrackedUrl: string | undefined;

function GoogleAnalyticsPageView({ isReady }: { isReady: boolean }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isReady || !GA_MEASUREMENT_ID || !window.gtag) return;

    const pageLocation = window.location.href;
    if (lastTrackedUrl === pageLocation) return;

    lastTrackedUrl = pageLocation;
    window.gtag("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      page_path: pathname,
      page_location: pageLocation,
      page_title: document.title,
    });
  }, [isReady, pathname]);

  return null;
}

export function GoogleAnalytics() {
  const [isReady, setIsReady] = useState(false);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onReady={() => setIsReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <GoogleAnalyticsPageView isReady={isReady} />
    </>
  );
}
