import Developer from "@/model/Developer"
// Helpers
import connectDB from "@/database/connectDB"
import { errorDivider } from "@/helpers/functions"
import { developerValidation, skillsValidation } from "@/helpers/serverValidations"
import responseManager from "@/lib/response/response.manager"
import developerController from "@/database/developer.controller"

export default async function handler (req, res) {
  
  // Try to connect to DB
  try {
    await connectDB()
  }
  catch (err) {
    errorDivider('Connecting to DB error', err)
    responseManager.serverError(res, 'Error in connecting to database')
    return;
  }
  
  const { method } = req
  switch (method) {
    case 'GET':
      developerController.getDetails(req, res)
      return;
    case 'PATCH':
      developerController.pathEditDetails(req, res)
      return;
    case 'DELETE':
      developerController.delete(req, res)
      return;
    default:
      developerController.getDetails(req, res)
      return;
  }
}