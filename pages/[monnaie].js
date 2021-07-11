import Layout from "./components/layout";
import Image from "next/image";

export default function monnaie({ res }) {
  console.log(res);
  return (
    <Layout page={"Page" + res.name}>
      <div className="relative hover:shadow md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
        <div className="text-center">
          <img
            src={res.logo_url}
            alt={res.name}
            className="w-20 h-20 mx-auto mb-6"
          />
        </div>
        <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
        <p>{res.description}</p>
        <p className="pt-5 text-blue-500">
          <a href={res.reddit_url} target="_blank" rel="noreferrer">
            {res.reddit_url}
          </a>
        </p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query.monnaie);
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=4f081a11cb61243d2f2c8c62c2aead5e34449c2e&ids=${query.monnaie}&attributes=id,name,logo_url,description,reddit_url`
    );
    const result = await res.json();

    return {
      props: { res: result[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
