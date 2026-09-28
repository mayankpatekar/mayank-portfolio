import "./globals.css";

export const metadata = {
  title: "Mayank Patekar | Software Developer",
  description: "Portfolio of Mayank Umesh Patekar — Java Backend and Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}