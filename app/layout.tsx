import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes App",
  description: "A modern note-taking application",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <div className="container mx-auto flex h-14 items-center px-4">
              <div className="mr-4">
                <h1 className="text-xl font-bold">Notes</h1>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
