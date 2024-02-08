import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100"><div className="flex flex-wrap justify-center items-center mt-4">{children}</div></body>
    </html>
  )
}