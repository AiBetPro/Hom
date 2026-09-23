import React from 'react';
import './globals.css';

export const metadata = {
  title: 'GOALIX — Paris sportifs & analyse IA',
  description:
    'GOALIX est une plateforme de paris sportifs avec matchs, cotes en direct et prédictions assistées par IA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
