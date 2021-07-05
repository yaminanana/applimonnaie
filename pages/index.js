import Layout from "./components/layout";

export default function Home({ res }) {
  console.log(res);
  return (
    <Layout page="Monnaie - Accueil">
      <ul className="flex justfy-around py-10">
        {res.map((crypto, index) => (
          <li
            key={index}
            className="relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5"
          ></li>
        ))}
      </ul>
    </Layout>
  );
}
//server side rendered
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4f081a11cb61243d2f2c8c62c2aead5e34449c2e&ids=BTC,ETH,AAVE&interval=1d,30d,365d"
    ).then((res) => res.json());
    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}
