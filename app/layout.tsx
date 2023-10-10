import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "FE개발실습",
    description: "201944012 강교진",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <h1>Front-end 과제</h1>
                <p>201944012 강교진</p>
                {children}
            </body>
        </html>
    );
}
