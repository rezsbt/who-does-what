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
  
  // Create new developer (POST)
  // if (req.method === 'POST') {
  //   const { data } = req.body
  //   if (developerValidation(data) && skillsValidation(data.skills)) {
  //       try {
  //         const newDeveloper = await Developer.create(data)
  //         console.log()
  //         res
  //           .status(201)
  //           .json({
  //             status: 'success',
  //             message: 'Data created successfully',
  //             data: newDeveloper,
  //           })
  //       } catch (err) {
  //         errorDivider('Create new developer error', err)
  //         res
  //           .status(500)
  //           .json({
  //             status: 'failed',
  //             message: 'Error in create new developer'
  //           })
  //       }
  //   } else {
  //     res
  //       .status(400)
  //       .json({
  //         status: 'failed',
  //         message: 'Invalid data'
  //       })
  //       return;
  //   }
  // }
  // Get all developers list (GET)
  // else if (req.method === 'GET') {
  //   try {
  //     const developers = await Developer.find()
  //     res
  //       .status(400)
  //       .json({
  //         status: 'success',
  //         data: [...developers.map(dev => ({
  //           fullname: `${dev.firstName} ${dev.lastName}`,
  //           phone: dev.phone,
  //           job: dev.job,
  //           _id: dev._id
  //         }))]
  //       })
  //   } catch (err) {
  //     errorDivider('Get all developers list error', err)
  //     res
  //       .status(500)
  //       .json({
  //         status: 'failed',
  //         message: 'Error in get developers list'
  //       })
  //   }
  // }
  
}