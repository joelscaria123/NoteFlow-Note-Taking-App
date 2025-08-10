import mongoose from "mongoose";
import dotenv from "dotenv";
import { Note } from "./src/models/noteModel.js" // adjust path if needed

dotenv.config(); // Loads your .env file

const notes= [
    {
  "title": "The Fascinating Life Cycle of a Star",
  "content": "Stars are born, live, and die in a cosmic dance that spans millions to billions of years. Their life begins in vast clouds of gas and dust called nebulae, where gravity slowly pulls matter together. As the core temperature rises, nuclear fusion ignites, producing light and heat — and a star is born. For most of its life, a star remains in the main sequence phase, steadily fusing hydrogen into helium. Eventually, the hydrogen fuel depletes, and the star’s fate depends on its mass. Smaller stars, like our Sun, swell into red giants before shedding outer layers and leaving behind a dense white dwarf. Massive stars, however, undergo dramatic supernova explosions, scattering elements across space — elements that later form planets and even life. The remnants of these explosions can collapse into neutron stars or black holes. In this way, stars are both creators and destroyers, forging the very elements that make up our universe and ensuring the cosmic cycle continues."
}

]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected...");

    await Note.insertMany(notes);
    console.log(`${notes.length} notes inserted successfully!`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDB();
