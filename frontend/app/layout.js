import './globals.css';

export const metadata = {
  title: 'YourTech - Solutions IoT & Systèmes Embarqués',
  description: 'Expert en conception de PCB, firmware et plateformes IoT connectées.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
