import "./globals.css";
import Navbar from "@/components/navbar/Navbar.jsx";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Viral News",
  description: "Stories We Talk About",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <div className="mt-auto"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
