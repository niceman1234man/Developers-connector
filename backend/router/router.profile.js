import express from "express";
import { DeleteEducation, DeleteExperiance, getAllProfile, getProfile, getProfilebyuserId } from "../controller/controller.profile.js";
import { verify } from "../middleware/Auth.js";
const router=express.Router();
router.get('handle/:handle',verify,getProfile);
router.get('user/:user_id',getProfilebyuserId);

router.get('/all',getAllProfile);
router.delete('education/:edu_id',DeleteEducation);
router.delete('experience/:exp_id',DeleteExperiance);
export default router;