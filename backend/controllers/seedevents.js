import dotenv from "dotenv";
dotenv.config();
import connectDB from "../config/db.js";
import { Event } from "../models/EventModel.js";

// console.log(process.env.MONGODB_URI);

await connectDB();

const events = [
  // ================= DANCE =================
  {
    event_name: "Street Reloaded",
    event_category: "DANCE",
    venue: "Open Air Theatre",
    description: "Solo face-off street dance battle featuring Hip-hop, Krumping, Popping and Breaking.",
    date: "6th February, 2026",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/1EhUgI-4xN3_qZvlvMEoGr6gLhLGJ6d4_--ZUZFV1mV4/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119455/Copy_of_ABOUT_US_tryhf2.png",
    registration_link: "https://unstop.com/events/street-reloaded-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624850"
  },
  {
    event_name: "Street Beats",
    event_category: "DANCE",
    venue: "Open Air Theatre (Near Central Library)",
    description: "High-energy crew dance battle with street styles and teamwork.",
    date: "7th February, 2026",
    prize: 40000,
    rulebook: "https://docs.google.com/document/d/1VuJ1zuE7nbI-CBOXE3Xu9V19yfZdttGoHYhjSowwvsc/edit",
    bg_image_url: "https://images.unsplash.com/photo-1698222231294-244fe4c3b1d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/o/zNpcEWO?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },
  {
    event_name: "Footloose",
    event_category: "DANCE",
    venue: "GJLT",
    description: "Solo dance showdown highlighting power, passion, and expression.",
    date: "6th February, 2026",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/1d__cJ4TEBhWG6PO3gaOEgje6Ue22r_c2haHW5LewcHQ/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119455/Copy_of_ABOUT_US_tryhf2.png",
    registration_link: "https://unstop.com/p/footloose-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1630490"
  },
  {
    event_name: "Reflection",
    event_category: "DANCE",
    venue: "Penman Auditorium",
    description: "Duo dance competition celebrating coordination and chemistry.",
    date: "5th February, 2026",
    prize: 30000,
    rulebook: "https://docs.google.com/document/d/1m89BAOSQUYB4W0KalyS3eZjOjRn9Jq0WfNkNyH7oWwY/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119455/Copy_of_ABOUT_US_tryhf2.png",
    registration_link: "https://unstop.com/p/reflection-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1629733"
  },
  {
    event_name: "Hustle Herd",
    event_category: "DANCE",
    venue: "Penman Auditorium",
    description: "High-energy group dance performance focused on unity and rhythm.",
    date: "5th February, 2026",
    prize: 40000,
    rulebook: "https://docs.google.com/document/d/10kEWZFACzTvxZefW4pXPTv7kzQiru-ES0hPD2IMafrE/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119474/Copy_of_ABOUT_US_1_iqgfkt.png",
    registration_link: "https://unstop.com/events/hustle-herd-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1629818"
  },

  // ================= MUSIC =================
  {
    event_name: "Harmony",
    event_category: "MUSIC",
    venue: "Open Air Theatre",
    description: "Battle of bands competition across genres with a grand prize.",
    date: "8th February, 2026",
    prize: 25000,
    rulebook: "https://docs.google.com/document/d/1LKUiiMEPMTqUxhwxsjMCd-wqWZsjzaLqMhOVIqF8xVw/edit",
    bg_image_url: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/harmony-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624888"
  },
  {
    event_name: "Aaroh",
    event_category: "MUSIC",
    venue: "GJLT",
    description: "Solo singing competition across classical and western genres.",
    date: "7th February, 2026",
    prize: 15000,
    rulebook: "https://docs.google.com/document/d/1FW1Y6P14BvA4NacuD2uXWwMr2fNax-UtbtpD88fAlWs/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119451/Copy_of_ABOUT_US_2_oyzbbz.png",
    registration_link: "https://unstop.com/o/WAexjnD?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },

  // ================= FASHION =================
  {
    event_name: "Paridhaan",
    event_category: "FASHION",
    venue: "Amber Ground",
    description: "Team fashion ramp walk inspired by a central theme.",
    date: "7th February, 2026",
    prize: 35000,
    rulebook: "https://docs.google.com/document/d/1aOFlJIQMwEl91lw6ZMhVL1Ztcc_aFGZhqSWL7Ezgffw/edit",
    bg_image_url: "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/paridhan-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624858"
  },
  {
    event_name: "Mr. & Mrs. Srijan",
    event_category: "FASHION",
    venue: "Amber Ground",
    description: "Personality contest with talent rounds, Q&A, and fashion walk.",
    date: "6th February, 2026",
    prize: 25000,
    rulebook: "https://docs.google.com/document/d/1_NIoZolEBGZbcEKpZMiv8KXuNj_ZgE2OUOrQKE21npg/edit",
    bg_image_url: "https://images.unsplash.com/photo-1733322987243-65e222f1ada8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/competitions/mr-mrs-srijan-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624807"
  },

  // ================= FILM =================
  {
    event_name: "Scriptwriting Competition",
    event_category: "FILM",
    venue: "Online",
    description: "Scriptwriting contest focused on cinematic storytelling.",
    date: "Online",
    prize: 8000,
    rulebook: "https://docs.google.com/document/d/1D98NksNeZEdVl0G66EhUAZw6BrLb9mMxsF3CXWgpwYo/edit",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1666299355977-5b45612c03b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/o/JU1xIF7?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },
  {
    event_name: "Frames of Srijan",
    event_category: "FILM",
    venue: "Online",
    description: "60-second reel competition capturing the spirit of Srijan.",
    date: "Online",
    prize: 13000,
    rulebook: "https://docs.google.com/document/d/1atAr9OnhJNkBMwl_VHu2jERp9bCpyEcB0Xpbo5zwXow/edit",
    bg_image_url: "https://images.unsplash.com/photo-1582053628662-c65b0e0544e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/o/czoa6Mp?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },
  {
    event_name: "Online Short Film Making",
    event_category: "FILM",
    venue: "Online",
    description: "Short film making competition showcasing storytelling and direction.",
    date: "Online",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/1MCG-hgip6W8nlgfjK_q9AyYF6GjaPcFCtaDYQdafVJk/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119452/Copy_of_ABOUT_US_4_zuc5yn.png",
    registration_link: "https://unstop.com/o/czoa6Mp?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },

  // ================= THEATRE =================
  {
    event_name: "Ek Abhinay",
    event_category: "THEATRE",
    venue: "GJLT",
    description: "Solo acting competition celebrating expression and creativity.",
    date: "6th February, 2026",
    prize: 15000,
    rulebook: "https://docs.google.com/document/d/1MQXMk3mmvWo8n9i0djxI5SCV1C0wpDnMhtLvir1MilM/edit",
    bg_image_url: "https://images.unsplash.com/photo-1615414015111-8d98cb65677e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/ek-abhinay-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624697"
  },
  {
    event_name: "Hoonkaar",
    event_category: "THEATRE",
    venue: "Library Stairs",
    description: "Flagship theatrical event with electrifying performances.",
    date: "7th February, 2026",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/1vFLg1lqwNADUdn2krU5m8mCYtsHkxaPf0XLkitS3pz0/edit",
    bg_image_url: "https://images.unsplash.com/photo-1565798846807-2af22c843402?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/hoonkar-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624842"
  },

  // ================= ART =================
  {
    event_name: "Clay Modelling",
    event_category: "ART",
    venue: "Open Air Theatre",
    description: "Team clay modelling event testing creativity and teamwork.",
    date: "7th February, 2026",
    prize: 7000,
    rulebook: "https://docs.google.com/document/d/1ACGTs1FXCIAF6N3LLuFpV_lrMeUaGcIWg66u6m-0oLo/edit?tab=t.0#heading=h.pi0hlvln7maf",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1675719067585-692e59189e31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/clay-modelling-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624782"
  },
  {
    event_name: "DIY Mosaic",
    event_category: "ART",
    venue: "New Lecture Hall Complex",
    description: "Collaborative mosaic painting activity with free caricatures.",
    date: "6th February, 2026",
    prize: 0,
    rulebook: "https://docs.google.com/document/d/164cBNFtbX_XwmibaEk4DixhbcMuLbDRzwGnMTlEuF8k/edit?usp=sharing",
    bg_image_url: "https://images.unsplash.com/photo-1579541982208-f050c2503aae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/o/oKEtcrR?lb=qBsTTW8d&utm_medium=Share&utm_source=harshudu1820&utm_campaign=Events"
  },
  {
    event_name: "Face Painting",
    event_category: "ART",
    venue: "Open Air Theatre",
    description: "Team face painting challenge with cosmetic-grade materials.",
    date: "8th February, 2026",
    prize: 7000,
    rulebook: "https://docs.google.com/document/d/1JrYew4Izrd6tkPHKjCyCTHYlpYRbQo7sxdkuGx_c2ZM/edit?tab=t.0#heading=h.uskfbwddwxzt",
    bg_image_url: "https://images.unsplash.com/photo-1613514434261-49c19c1adaf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/events/face-painting-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624871"
  },
 
  // ================= PHOTOGRAPHY =================
  {
    event_name: "Fotorush",
    event_category: "FILM",
    venue: "Library Stairs",
    description: "Timed photography race involving clues and challenges.",
    date: "6th February, 2026",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/1h_OR99jG5mAKBOGZK1rljV2bhW5iv2fqPCMl-TBSfoE/edit",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1723651354432-7796fb4ecebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/competitions/fotorush-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624734"
  },
  {
    event_name: "Srijan Through My Lens",
    event_category: "FILM",
    venue: "Online",
    description: "Instagram story challenge capturing the vibe of Srijan.",
    date: "Online",
    prize: 6000,
    rulebook: "https://docs.google.com/document/d/1h_OR99jG5mAKBOGZK1rljV2bhW5iv2fqPCMl-TBSfoE/edit?tab=t.0",
    bg_image_url: "https://images.unsplash.com/photo-1551332772-f6bc95b9ed1f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/p/srijan-through-my-lens-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1629878"
  },
   {
    event_name: "Graphic Grapple",
    event_category: "FILM",
    venue: "New Lecture Hall Complex",
    description: "Poster design competition with strict originality rules.",
    date: "7th February, 2026",
    prize: 10000,
    rulebook: "https://docs.google.com/document/d/1avdGrSBqr7C1FsHf1ageFmAOy6ZekKoX5eT3jRAZy1s/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119453/Copy_of_ABOUT_US_9_eljymm.png",
    registration_link: "https://unstop.com/events/graphic-grapple-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624835"
  },
  

  // ================= COMEDY =================
  {
    event_name: "Saanp Tank",
    event_category: "COMEDY",
    venue: "New Lecture Hall Complex",
    description: "Comedy pitching event inspired by Shark Tank.",
    date: "7th February, 2026",
    prize: 10000,
    rulebook: "https://docs.google.com/document/d/1RiuPwoHajlSbzkZ47lny-s1NDfJFSHTQ8bGEXjkTS68/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119518/Copy_of_ABOUT_US_11_ow1jdx.png",
    registration_link: "https://unstop.com/competitions/saanp-tank-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624829"
  },
  {
    event_name: "ISM's Got Latent",
    event_category: "COMEDY",
    venue: "NAC Hall",
    description: "Talent showcase with humour and creativity.",
    date: "8th February, 2026",
    prize: 10000,
    rulebook: "https://docs.google.com/document/d/1ICTPnQ5Xby5_IhTQ2p191EbD1BdVzbuXpWVFcNqKxiU/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119518/Copy_of_ABOUT_US_11_ow1jdx.png",
    registration_link: "https://unstop.com/events/isms-got-latent-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624881"
  },

  // ================= LITERARY =================
  {
    event_name: "Chakravyuh",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Campus treasure hunt using Hindi riddles.",
    date: "6th February, 2026",
    prize: 20000,
    rulebook: "https://docs.google.com/document/d/19Zu8Ro9LunKj_Q5mCICr7jrRWnUG-sLIxhiFev8veLc/edit",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/quiz/chakravyuh-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624792"
  },
  {
    event_name: "Kavyadhara",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Hindi idiom acting challenge.",
    date: "7th February, 2026",
    prize: 10000,
    rulebook: "https://docs.google.com/document/d/1VjtRws4b_1mUYWfATl0cqLJQCHMbr0MF_zLVoukdq3w/edit",
    bg_image_url: "https://images.unsplash.com/photo-1657302155425-611b7aba5b33?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/p/kavyadhara-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1629873"
  },
  {
    event_name: "Plot Paradox",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Creative genre-twisting writing competition.",
    date: "8th February, 2026",
    prize: 12000,
    rulebook: "https://docs.google.com/document/d/1mr8UmZ6Fi7nM4RC1qp4nypK1R4nnfgBcV25Z5Q06m94/edit",
    bg_image_url: "https://res.cloudinary.com/dznit2e1x/image/upload/v1768119453/Copy_of_ABOUT_US_8_skskgs.png",
    registration_link: "https://unstop.com/events/plot-paradox-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624863"
  },
  {
    event_name: "Folktwist",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Creative storytelling competition with narrative twists.",
    date: "6th February, 2026",
    prize: 13000,
    rulebook: "https://docs.google.com/document/d/1Ir7jUA0wGdLyDK8zTxooAv13wuzA4EYa_N_TvHZAT40/edit",
    bg_image_url: "https://images.unsplash.com/photo-1586751381168-4ac50cb6458a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/o/DBaEbFw?lb=Y6Rv420a&utm_medium=Share&utm_source=udbhaiit6617&utm_campaign=Events"
  },
  {
    event_name: "Trialthlon",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Three-round literary competition testing creativity and debate.",
    date: "6th February, 2026",
    prize: 12000,
    rulebook: "https://docs.google.com/document/d/1yAxUk1zjYqqHuN7Kn2pjE4a7Extv0VWGxbZwYB7icYE/edit",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/p/trialthlon-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1629860"
  },
  {
    event_name: "Triwizard Tournament",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Multi-round intellectual puzzle and quiz tournament.",
    date: "8th February, 2026",
    prize: 12000,
    rulebook: "https://docs.google.com/document/d/1U0KdaQyEhm3j81BFAsKMLxoGz6rxIdLvukSn0C4F5FU/edit",
    bg_image_url: "https://images.unsplash.com/photo-1653292744174-485adb532f61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/quiz/triwizard-tournament-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624878"
  },
  {
    event_name: "Speak Snitch Survive",
    event_category: "LITERARY",
    venue: "GJLT",
    description: "Public speaking and impromptu challenge event.",
    date: "6th February, 2026",
    prize: 30000,
    rulebook: "https://docs.google.com/document/d/1UJam5DmP3_w92qkPvnu2YORS3DIXcyVZod1SISijTBQ/edit",
    bg_image_url: "https://images.unsplash.com/photo-1674081955099-9a290e8f5947?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/competitions/speak-snitch-survive-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624788"
  },
  {
    event_name: "HELM Quiz",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Team quiz event testing logic and general knowledge.",
    date: "7th February, 2026",
    prize: 12000,
    rulebook: "https://docs.google.com/document/d/1nxBdnltU1U-ivILhMCiJNPtshYS2fkUNSzvMv4xYmR0/edit?usp=drivesdk",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1678495324671-cfa4a96ddf05?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/quiz/helm-quiz-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624818"
  },
  {
    event_name: "General Quiz",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "General trivia quiz across diverse domains.",
    date: "6th February, 2026",
    prize: 12000,
    rulebook: "https://docs.google.com/document/d/1tlXiRCBzpGyYIEwHmA_tgt3zipL_hEMfMozXN-RuYRk/edit",
    bg_image_url: "https://plus.unsplash.com/premium_photo-1680303237111-35809e47fcc1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/quiz/general-quiz-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1624784"
  },

  // ================= MISC =================
  {
    event_name: "Flavours of the Globe",
    event_category: "MISC",
    venue: "Near Library",
    description: "Culinary face-off celebrating global flavours.",
    date: "7th February, 2026",
    prize: 6000,
    rulebook: "https://docs.google.com/document/d/16JETWWOmPJFlLWUSJyyajVNYGOqTmhlFHIUhsdYNxM4/edit",
    bg_image_url: "https://images.unsplash.com/photo-1560161369-db59af5a731f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registration_link: "https://unstop.com/p/flavours-of-globe-srijan-2026-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1630087"
  }
];

const seedEvents = async () => {
  try {
    await Event.deleteMany();
    await Event.insertMany(events);
    console.log("ALL EVENTS SEEDED SUCCESSFULLY");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedEvents();