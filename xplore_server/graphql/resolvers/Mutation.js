import { Planet } from "../../models/Planet";

const Mutation = {
  createPlanet: (_, { name }) => {
    const planet = new Planet({ name });
    return planet.save();
  },

  deletePlanet: async (_, { id }) => {
    let returnObj = {};
    await Planet.findByIdAndDelete(id, (err, docs) => {
      if (err) {
        console.error(err);
      } else {
        returnObj = docs;
      }
    });
    return returnObj;
  },

  updatePlanet: async (_, { id, name }) => {
    let doc = await Planet.findByIdAndUpdate(id, { name }, { new: true });

    return doc;
  },
};
export default Mutation;
