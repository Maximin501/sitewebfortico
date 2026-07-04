import './globals.css';

export const metadata = {
  title: 'Fortico - Solutions IoT & Systèmes Embarqués',
  description: 'Expert en conception de PCB, firmware et plateformes IoT connectées.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}