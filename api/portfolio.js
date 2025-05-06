import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, stale-while-revalidate=3600"
  );

  const { data, error } = await supabase
    .from("portfolio")
    .select("slug,description,image,type");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!data) {
    return res.status(404).json({ error: "no data exists" });
  }

  return res.status(200).json(data);
}
