import "./globals.css";

export const metadata = {
  title: "Sure Path Mortgage Solutions",
  description:
    "Outsourced mortgage processing built to help brokers, loan officers, and lenders close with more confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
