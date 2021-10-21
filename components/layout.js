import Head from 'next/head'
import Header from "./header";

export default function Layout({pageTitle, pageDescription, headerImage, children}) {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/marcia-icon.png" />
            </Head>

            <Header image={headerImage}/>

            <main>
                {children}
            </main>

            <footer className="footer">© {new Date().getFullYear()}, Desenvolvido por
            {` `}
            <a href="https://github.com/cordeirolucas42">Lucas Cordeiro</a>        
            </footer>
        </div>
    )
}