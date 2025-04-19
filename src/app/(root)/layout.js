import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const metadata = {
  title: "Viral News",
  description: "The Stories We Talk About",
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
