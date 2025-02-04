import express from "express";
import { skincareRecommender } from "./netlify/functions/skincareRecommender.js";

const app = express();

app.use(express.json());

app.get("/functions/skincareRecommender", (req, res) => {
  res.send({
    name: "skincareRecommender",
    description: "Suggests skincare products based on skin type.",
    input: {
      type: "string",
      description: "Your skin type (e.g., dry, oily, combination, sensitive).",
      example: "dry",
    },
    output: {
      type: "string",
      description: "Recommended skincare product(s) or advice.",
      example:
        "Thick, hydrating moisturizers with ceramides or hyaluronic acid, such as 'CeraVe Moisturizing Cream'.",
    },
  });
});

app.post("/functions/skincareRecommender", skincareRecommender);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
