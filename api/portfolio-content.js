import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

export default async function handler(req, res) {

  // connect to the database

  const { slug } = req.query;
  if (!slug) {
    return res.status(404).json({ error: "Not found" });
  }

  // fetch data with slug from the database
  const { data } = await supabase.from('portfolio').select().eq('slug', slug)

  console.log(data)

  if(!data[0]){
    return res.status(404).json({error:"not found"});
  }

  return res.status(200).json(data[0])
}
