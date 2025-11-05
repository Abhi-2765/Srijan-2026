import express from "express";
import { verifyJWT } from "../middleware/verifyAuthentication.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
import {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getEventsByCategory,
    getEventById,
    registerForEvent
} from "../controllers/eventController.js";

const eventrouter = express.Router();

// =================================
//          PUBLIC ROUTES
// =================================
// Get all events
eventrouter.route("/all").get(getAllEvents);

// Get all events in a specific category
eventrouter.route("/category/:categoryName").get(getEventsByCategory);

// Get a single event's details
eventrouter.route("/:id").get(getEventById);


// =================================
//     AUTHENTICATED USER ROUTES
// =================================
// Register for an event
eventrouter.route("/:id/register").post(verifyJWT, registerForEvent);


// =================================
//     ADMIN ROUTES
// =================================
// (Assuming only authenticated users can manage events for now)
// Create a new event
eventrouter.route("/create").post(isAdmin, createEvent);

// Update an event
eventrouter.route("/:id").put(isAdmin, updateEvent);

// Delete an event
eventrouter.route("/:id").delete(isAdmin, deleteEvent);


export default eventrouter;