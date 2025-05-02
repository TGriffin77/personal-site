export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const response = await fetch(
        `https://8639-138-84-167-82.ngrok-free.app/post`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      if (!response.ok) throw new Error("Bot failed");

      res.status(200).json({ message: "Success!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
