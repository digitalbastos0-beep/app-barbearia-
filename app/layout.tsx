import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbearia Gonçalves | Agendamento Online",
  description: "Agende seu horário na Barbearia Gonçalves. Tradição, cuidado e estilo desde 2017.",
  applicationName: "Barbearia Gonçalves",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
