import mongoose,{ model, Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId;


mongoose.connect(process.env.DATABASE_URI as string);

const UserSchema = new  Schema({
    username: { type: String, required: true , unique: true },
    password: { type: String, required: true }
});

const LinkSchema = new Schema({
    hash : {type : String },
    userId: {type : ObjectId , ref: "User", required : true }
})

const ContentSchema = new Schema({
    link : {type: String, required: true},  
    type : {type : String},
    title : {type : String, required : true},
    tags : [{type : ObjectId, ref : "Tag"}],
    userId : {type : ObjectId , ref : "User" , required : true},
})

const TagsSchema = new Schema({
    title : {type : String, required : true}
})

export const UserModel = model("User", UserSchema);
export const LinkModel = model("Link", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
export const TagModel = model("Tag", TagsSchema);

