import "../styles/globals.css";
export const metadata = {
    title: "Tulips and Books 🌷📖",
};
export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
);
}