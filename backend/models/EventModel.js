import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      required: [true, "Event name is required"],
      unique: true,
      trim: true
    },
    event_category: {
      type: String,
      required: [true, "Event category is required"],
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      trim: true
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    bg_image_url: {
      type: String,
      trim: true
    },
    registration_link: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Registration link is required"]
    },

    rulebook: {
      type: String,
      trim: true
    },

    rules: {
      type: [String],
      default: []
    },

    coordinator_names: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) => arr.every((n) => n.trim().length > 0),
        message: "Coordinator names must be non-empty strings",
      },
    },

    coordinator_phone: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) =>
          arr.every((p) => /^[0-9]{10}$/.test(p)),
        message: "Each phone number must be a valid 10-digit number",
      },
    },
    // cooridnators:{
    //   type:[
    //     {
    //     name:{
    //     type:String, 
    //     required:true,
    //     validate: {
    //     validator: (n) => n.trim().length > 0,
    //     message: "Coordinator names must be non-empty strings",
    //     }

    //   }, 
    //     phones:{
    //       type:[String], 
    //       required:true,
    //       validate: {
    //     validator: (arr) =>
    //       arr.every((p) => /^[0-9]{10}$/.test(p)),
    //     message: "Each phone number must be a valid 10-digit number",
    //       },
    //     }
    //   }
    //   ],

    //   required:true
    //   ,
    // },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],

  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);
