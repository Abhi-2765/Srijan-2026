import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apierror.js";
import ApiResponse from "../utils/apiresponse.js";
import { Event } from "../models/EventModel.js";
import { User } from "../models/UserModel.js";
import { EVENT_CATEGORIES } from "../utils/constants.js";
import mongoose from "mongoose";

// --- Admin/Protected Routes ---

/**
 * @route POST /api/v1/event/create
 * @desc Create a new event
 * @access Private (Requires auth)
 */
const createEvent = asynchandler(async (req, res) => {
    const {
        event_name,
        event_category,
        venue,
        description,
        bg_image_url,
        rulebook,
        rules,
        coordinator_names,
        coordinator_phone,
        registration_link
    } = req.body;

    // Basic validation
    if (
        [event_name, event_category, venue, description,registration_link].some(field => !field?.trim())
    ) {
        throw new ApiError(400, "Event name, category, venue, description, and registration link are required");
    }

    // Validate category against constants
    if (!EVENT_CATEGORIES.includes(event_category)) {
        throw new ApiError(400, "Invalid event category");
    }

    // Check for existing event name
    const existingEvent = await Event.findOne({$or: [
    { event_name },
    { registration_link }
  ]});
    if (existingEvent) {
        throw new ApiError(409, "An event with this name already exists");
    }
    

    // Create event
    const event = await Event.create({
        event_name,
        event_category,
        venue,
        description,
        registration_link,
        bg_image_url: bg_image_url || "",
        rulebook: rulebook || "",
        rules: rules || [],
        coordinator_names: coordinator_names || [],
        coordinator_phone: coordinator_phone || []
    });

    if (!event) {
        throw new ApiError(500, "Something went wrong while creating the event");
    }

    return res.status(201).json(
        new ApiResponse(201, event, "Event created successfully")
    );
});

/**
 * @route PUT /api/v1/event/:id
 * @desc Update an existing event
 * @access Private (Requires auth)
 */
const updateEvent = asynchandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.isValidObjectId(id)) {
        throw new ApiError(400, "Invalid Event ID");
    }

    // Check for event_name conflict if it's being updated
    if (updateData.event_name) {
        const existingEvent = await Event.findOne({ 
            event_name: updateData.event_name, 
            _id: { $ne: id } 
        });
        if (existingEvent) {
            throw new ApiError(409, "Another event with this name already exists");
        }
    }
    
    // Validate category if it's being updated
    if (updateData.event_category && !EVENT_CATEGORIES.includes(updateData.event_category)) {
        throw new ApiError(400, "Invalid event category");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true } // `new: true` returns the updated doc, `runValidators: true` ensures model validations are run
    );

    if (!updatedEvent) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json(
        new ApiResponse(200, updatedEvent, "Event updated successfully")
    );
});

/**
 * @route DELETE /api/v1/event/:id
 * @desc Delete an event
 * @access Private (Requires auth)
 */
const deleteEvent = asynchandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        throw new ApiError(400, "Invalid Event ID");
    }

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json(
        new ApiResponse(200, { deletedEventId: id }, "Event deleted successfully")
    );
});

// --- Public Routes ---

/**
 * @route GET /api/v1/event/all
 * @desc Get all events
 * @access Public
 */
const getAllEvents = asynchandler(async (req, res) => {
    // Exclude users array from this general query for performance
    const events = await Event.find({}).select("-users"); 
    
    if (!events) {
        throw new ApiError(404, "No events found");
    }

    return res.status(200).json(
        new ApiResponse(200, events, "Events fetched successfully")
    );
});

/**
 * @route GET /api/v1/event/category/:categoryName
 * @desc Get events by category
 * @access Public
 */
const getEventsByCategory = asynchandler(async (req, res) => {
    const { categoryName } = req.params;

    if (!EVENT_CATEGORIES.includes(categoryName)) {
        throw new ApiError(400, "Invalid event category");
    }

    const events = await Event.find({ event_category: categoryName }).select("-users");

    if (!events || events.length === 0) {
        throw new ApiError(404, `No events found for category: ${categoryName}`);
    }

    return res.status(200).json(
        new ApiResponse(200, events, `Events for ${categoryName} fetched successfully`)
    );
});

/**
 * @route GET /api/v1/event/:id
 * @desc Get a single event by its ID
 * @access Public
 */
const getEventById = asynchandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        throw new ApiError(400, "Invalid Event ID");
    }

    // Populate the 'users' field with selected user details
    const event = await Event.findById(id).populate("users", "fullname email mobilenumber");

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json(
        new ApiResponse(200, event, "Event details fetched successfully")
    );
});


// --- User-Specific Routes (Authenticated) ---

/**
 * @route POST /api/v1/event/:id/register
 * @desc Register the logged-in user for an event
 * @access Private (Authenticated User)
 */
const registerForEvent = asynchandler(async (req, res) => {
    const { id: eventId } = req.params;
    const userId = req.user?._id; // `req.user` is attached by verifyJWT middleware

    if (!mongoose.isValidObjectId(eventId)) {
        throw new ApiError(400, "Invalid Event ID");
    }

    const event = await Event.findById(eventId);
    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    // Check if user is already registered
    if (event.users.includes(userId)) {
        throw new ApiError(409, "You are already registered for this event");
    }

    // Add user to the event's user list
    event.users.push(userId);
    await event.save({ validateBeforeSave: false });

    return res.status(200).json(
        new ApiResponse(200, event, "Successfully registered for the event")
    );
});


export {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getEventsByCategory,
    getEventById,
    registerForEvent
};