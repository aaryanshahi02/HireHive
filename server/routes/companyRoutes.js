import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getComapnyJobApplicants, getCompanyData, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//reg a comp
router.post('/register',upload.single('image'), registerCompany)

//comp login
router.post('/login', loginCompany)

//get comp data
router.get('/company', protectCompany, getCompanyData)

//post job
router.post('/post-job', protectCompany, postJob)

//get appl data of comp
router.get('/applicants',protectCompany, getComapnyJobApplicants)

//get comp job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

//change app status
router.post('change-status', protectCompany, ChangeJobApplicationsStatus)

//change appl visiility
router.post('/change-visibility', protectCompany, changeVisibility)

export default router