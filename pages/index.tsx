import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recipe App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl">Recipe App</h1>
    </div>
  );
}
