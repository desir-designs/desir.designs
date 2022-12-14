import Head from "next/head"

const Meta = ({ pageTitle }) => {
    return (
        <Head>
            <title>Desir Designs | {pageTitle ? pageTitle : "Home"}</title>

            <>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/assets/icons/57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/assets/icons/72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/assets/icons/76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/assets/icons/114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/assets/icons/120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/assets/icons/144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/assets/icons/152x152.png"
                />
                <link
                    rel="apple-touch-icon android-chrome shortcut icon"
                    sizes="180x180"
                    href="/assets/icons/180x180.png"
                />
            </>

        </Head>
    )
}

export default Meta