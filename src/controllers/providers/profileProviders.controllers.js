import provider from "../../routes/providers/provider.js";
import { Pool } from "../../config/conex.js";

export const profileProvider = (req, res) => {
  const providerData = {};
  Object.entries(provider).forEach(([element, value]) => {
    providerData[element] = value;
  });

  res.json({
    "message": "Provider data",
    "data": providerData,
  });
};
