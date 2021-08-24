import mongoose from "mongoose";

export const Planet = mongoose.model("Planet", {
  name: String,
});
