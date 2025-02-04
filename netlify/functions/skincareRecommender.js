export async function handler(event) {
  const body = JSON.parse(event.body);
  const { input } = body;

  const recommendations = {
    dry: "Thick, hydrating moisturizers with ceramides or hyaluronic acid, such as 'CeraVe Moisturizing Cream'.",
    oily: "Lightweight, oil-free moisturizers or emulsions, such as 'La Roche-Posay Effaclar Mat'. Especially useful during summer.",
    combination:
      "Balancing gels or lightweight creams, such as 'Clinique Dramatically Different Moisturizing Gel'.",
    sensitive:
      "Soothing and fragrance-free products, such as 'Avene Skin Recovery Cream'.",
    "chronic acne":
      "Consider products with benzoyl peroxide or salicylic acid, but consult a dermatologist for personalized treatment.",
    rosacea:
      "Gentle, anti-inflammatory products such as 'Eucerin Anti-Redness Cream'. Consult a dermatologist for further investigation.",
  };

  const lowercasedInput = input.toLowerCase();
  const output =
    recommendations[lowercasedInput] ||
    "Skin type or condition not recognized. Please consult a dermatologist for further recommendations.";

  return {
    statusCode: 200,
    body: JSON.stringify({ output }),
  };
}
