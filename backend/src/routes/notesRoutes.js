import express from "express";
import { createNotes, getNotesByID , deleteNotes, getAllNotes, updateNote } from "../controllers/notesController.js";
const router = express.Router();

router.get("/" , getAllNotes);
router.get("/:id" , getNotesByID);
router.post("/" ,createNotes);
router.put("/:id",updateNote);
router.delete("/:id",deleteNotes);
 
export default router;

