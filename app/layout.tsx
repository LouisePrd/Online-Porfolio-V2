import "./globals.css";

export const metadata = {
  title: "Louise PERIDY | Creative Portfolio",
  description: "Student at IMAC - ESIEE Paris",
  icons: {
    icon: "/assets/imgs/props/memoji.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
