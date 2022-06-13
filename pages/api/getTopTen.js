// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ApiKey = "47d03e5e-4730-4601-85d2-92368a6be061";
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${ApiKey}`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ data });
  };

  getData();
}
