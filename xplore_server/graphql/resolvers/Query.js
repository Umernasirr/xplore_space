import { Planet } from "../../models/Planet";

const Query = {
  hello: () => "Hello world!",
  planets: () => Planet.find(),
};

export default Query;
