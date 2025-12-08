import './globals.css';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Alejandro De La Mora | AI Solutions Architect',
  description:
    'AI Solutions Architect and Salesforce Developer portfolio, showcasing expertise in GenAI workflows, Agentforce, and cloud-native automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
