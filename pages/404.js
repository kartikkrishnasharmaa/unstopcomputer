import Link from "next/link";
import Head from "next/head";

// this is 404 not found page
export default function Custom404() {
    return <div>
     <Head>
            <title>Page Not Found | Unstop Computer</title>
            <meta name="description" content="Page Not found" />
            <link rel="icon" href="/Images/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="Page Not found" />
            <meta property="og:title" content="Page Not found" />
        </Head>
    <section className="text-gray-600 body-font">
        <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-800 dark:text-gray-200 md:px-3 md:text-8xl md:leading-14">
                    404
                </h1>
            </div>
            <div className="mx-auto max-w-2xl">
                <div className="md:border-l-2 md:px-6">
                    <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                        Page Not Found
                    </p>
                    <p className="mb-4">
                        Why show a generic 404 when I can make it sound mysterious? It seems you've found
                        something that used to exist, or you spelled something wrong. I'm guessing you spelled
                        something wrong. Can you double check that URL?
                    </p>
                    <p>But dont worry, you can find plenty of other things on our homepage.</p>
                </div>
            </div>
        </div>
        <div className="mt-16 grid place-items-center">
            <Link href="/">
                <button className="w-full inline-block px-6 py-2 mb-5 border-2 border-blue-700 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Go To Homepage</button>
            </Link>
        </div>
    </section>
    </div>
}





