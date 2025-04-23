import mongoose from "mongoose"

const { Schema } = mongoose

const UniversitySchema = new Schema ({
    name: {
        type: String,   
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    intro: {
        type: String,
    },
    logo: {
        type: String,
    },
    img: {
        type: String,
    },
    subjects: {
        type: String,
    },
    scholarships: {
        type: String,
    }
})
export default mongoose.model("University", UniversitySchema)