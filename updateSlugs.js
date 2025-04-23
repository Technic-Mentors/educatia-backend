import mongoose from "mongoose";
import University from "./Modules/University"; // Adjust path if needed

async function updateSlugs() {
  try {
    // Connect to your MongoDB database
    await mongoose.connect("mongodb+srv://consultantseducatia:consult123@educatiablog.kweom.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch all universities
    const universities = await University.find();
    console.log(`Found ${universities.length} universities`);

    // Update each university with a slug
    for (const uni of universities) {
      if (!uni.slug) {
        uni.slug = slugify(uni.name);
        await uni.save();
        console.log(`Updated slug for ${uni.name}: ${uni.slug}`);
      }
    }

    console.log("All slugs updated successfully!");
  } catch (error) {
    console.error("Error updating slugs:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Slugify function (same as University.js)
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

updateSlugs();