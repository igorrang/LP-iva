import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"]} ) ;

export const metadata: Metadata = {
  title: "Aula Secreta",
  description: "Desenvolvido por Konvictus",
  icons: {
    icon: "Iva-Cardinal-2.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      <Script id="1069092854785056" strategy="afterInteractive">
          {`
         !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '1069092854785056');
         fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img 
          height="1" 
          width="1" 
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1069092854785056&ev=PageView&noscript=1"
        />
        </noscript>
      </body>
    </html>
  );
}
