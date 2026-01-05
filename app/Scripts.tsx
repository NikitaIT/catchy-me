import Script from "next/script";

export function Scripts() {
  return (
    <>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {/* microsoft clarity */}
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "uwfi10hryc");`}
      </Script>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SMHY9BMCRK"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SMHY9BMCRK');`}
      </Script>
      {/* iubenda cookie banner */}
      <Script
        async
        src="https://embeds.iubenda.com/widgets/817150c6-4295-4382-9f95-73a0e378a0d7.js"
      ></Script>
    </>
  );
}
