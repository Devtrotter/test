import './globals.css';

export const metadata = {
  title: 'Devtrotter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
