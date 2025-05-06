import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  const { slug } = req.query;
  if (!slug) {
    return res.status(404).json({ error: "Not found" });
  }

  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

  // fetch data with slug from the database
  const { data, error } = await supabase
    .from("portfolio")
    .select()
    .eq("slug", slug);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!data[0]) {
    return res.status(404).json({ error: "data doesn't exist" });
  }

  return res.status(200).json(data[0]);
}
