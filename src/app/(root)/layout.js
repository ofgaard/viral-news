import "./globals.css";

export const metadata = {
  title: "Viral News",
  description: "Get the top shared news from Danish media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
