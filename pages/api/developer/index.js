import Developer from "@/model/Developer"
import connectDB from "@/database/connectDB"
// Helpers
import { errorDivider } from "@/helpers/functions"
import { developerValidation, skillsValidation } from "@/helpers/serverValidations"
import responseManager from "@/lib/response/response.manager"
import developerController from "@/database/developer.controller"
import ResponseObject from "@/lib/response/response.object"

export default async function handler (req, res) {
  
  try {
    await connectDB()
  } catch (err) {
    responseManager.serverError(res, 'Error in connecting to database')
    errorDivider('Error in connecting to database', err)
  }
  
  switch (req.method) {
    case 'GET':
      developerController.getAll(req, res)
      return;
    case 'POST':
      developerController.postCreate(req, res)
      return;
    default:
      developerController.getAll(req, res)
      return;
  }
}