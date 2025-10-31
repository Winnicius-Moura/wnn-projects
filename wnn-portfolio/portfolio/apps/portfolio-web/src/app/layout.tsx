import './global.css';

export const metadata = {
  title: 'Portfolio | Work Experiences',
  description: 'My professional portfolio showcasing work experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
