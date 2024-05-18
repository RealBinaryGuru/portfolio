import "../styles/globals.css"
import { ThemeContext } from "@/context";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { AppHeader } from "@/components/Header";
import { AppFooter } from "@/components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />

            <body>
                <ThemeContext>
                    <AppHeader />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                    <AppFooter />
                </ThemeContext>
            </body>
        </html>
    );
}
