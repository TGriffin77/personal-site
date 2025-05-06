import { useEffect, useState } from "react";

import PortfolioAccordian from "../components/PortfolioAccordian";

interface PortfolioItems {
  slug: string;
  description: string;
  image: string;
  type: string;
}

function Portfolio() {
  const [data, setData] = useState<PortfolioItems[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/portfolio");

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Could not load portfolio items");
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, []);

  if (loading) return <div>LOADING</div>;
  if (error) return <div>ERROR</div>;
  return (
    <>
      <div className="min-h-screen max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mx-4 my-8">Portfolio</h1>
        <PortfolioAccordian content={data} />
      </div>
    </>
  ) 
}

export default Portfolio;
