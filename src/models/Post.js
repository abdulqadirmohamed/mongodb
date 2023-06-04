import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("Post", postSchema);

// const Post = mongoose.models.User || mongoose.model('User', UserSchema);


const post = mongoose.models.post || mongoose.model('post', postSchema )  
export default post;
