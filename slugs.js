import slugify from "slugify";
import University from "./Modules/University.js";

const updateSlugs = async () => {
    const universities = await University.find();

    for (let uni of universities) {
        uni.slug = slugify(uni.name, { lower: true });
        await uni.save();
    }

    console.log("Slugs updated!");
};

updateSlugs();
