import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Trackage</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-1">{children}</main>
        </div>
);
};

export default Layout;
