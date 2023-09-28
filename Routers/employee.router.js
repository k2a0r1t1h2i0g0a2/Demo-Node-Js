import express from 'express'
import {
  employeesDetail,
  employeesId,
  createEmpDetail,
  updateEmpDetail,
  deleteEmpDetail,
} from "../controllers/employee.controller.js";
const router = express.Router()

router.get('/data', employeesDetail)
router.get('/:id', employeesId)
router.post("/addon", createEmpDetail);
router.put("/edit/:id", updateEmpDetail);
router.delete("/delete/:id", deleteEmpDetail);


export default router