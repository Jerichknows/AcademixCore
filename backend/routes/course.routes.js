import express from "express";
import { instructorRoute } from "../middleware/accessRoute.js";
import { 
  createCourse, 
  deleteCourse, 
  editCourse, 
  enrollStudent, 
  getCourses, 
  getEnrolledStudents, 
  unenrollStudent 
} from "../controllers/course.controller.js";

const router = express.Router();

router.get("/", getCourses);
router.get("/:id/enrolled", getEnrolledStudents);

router.post("/create", instructorRoute, createCourse);
router.delete("/:id", instructorRoute, deleteCourse);
router.patch("/edit/:id", instructorRoute, editCourse);
router.patch("/enroll/:id", instructorRoute, enrollStudent);
router.patch("/unenroll/:courseId/:studentId", instructorRoute, unenrollStudent);

export default router;