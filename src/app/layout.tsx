"use client"; // ⚠️ MUST be client component

import "./globals.css";
import Header from "../componets/layout/Header";
import Footer from "../componets/layout/Footer";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: { main: "#2563EB" },
    secondary: { main: "#F59E0B" },
    mode: "light",
  },
  typography: { fontFamily: "'Inter', sans-serif" },
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
