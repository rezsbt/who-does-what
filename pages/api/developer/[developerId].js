import Developer from "@/model/Developer"
// Helpers
import { connectDB } from "@/helpers/database"
import { errorDivider } from "@/helpers/functions"
import { developerValidation, skillsValidation } from "@/helpers/serverValidation"

export default async function handler (req, res) {
  
  // Try to connect to DB
  try {
    await connectDB()
  }
  catch (err) {
    errorDivider('Connecting to DB error', err)
    res.status(500).json({
      status: 'failed',
      message: 'Error in connecting to DB'
    })
    return;
  }
  
  // Get developer data by ID (GET)
  if (req.method === 'GET') {
    try {
      const id = req.query.developerId
      const developer = await Developer.findOne({ _id: id })
      if (!!developer) {
        res
          .status(200)
          .json({
            status: 'success',
            data: developer,
          })
      } else {
        res
          .status(404)
          .json({
            status: 'failed',
            message: 'Developer not found',
          })
      }
    } catch (err) {
      res
        .status(500)
        .json({
          status: 'failed',
          message: 'Error in get developer from DB'
        })
    }
    
  }
  // Edit developer by ID (PATCH)
  else if (req.method === 'PATCH') {
    const id = req.query.developerId
    const { data } = req.body
    try {
      const developer = await Developer.findOne({ _id: id })
      developer.firstName = data.firstName
      developer.lastName = data.lastName
      developer.phone = data.phone
      developer.email = data.email
      developer.job = data.job
      developer.skills = data.skills
      developer.updatedAt = Date.now()
      if (developerValidation(developer) && skillsValidation(developer.skills)) {
        developer.save()
        res
          .status(200)
          .json({
            status: 'success',
            data: developer,
          })
      } else {
        res
        .status(400)
        .json({
          status: 'failed',
          message: 'Invalid data'
        })
        return;
      }
    } catch (err) {
      errorDivider('editing data', err)
      res
        .status(500)
        .json({
          status: 'failed',
          message: 'Error in editing data from DB',
        })
    }
    
  }
  // Delete developer by ID (DELETE)
  else if (req.method === 'DELETE') {
    const id = req.query.developerId
    try {
      await Developer.deleteOne({ _id: id })
      res
        .status(200)
        .json({
          status: 'success',
          message: 'Developer deleted successfully',
        })
    } catch (err) {
      errorDivider('error in delete developer', err)
      res
        .status(500)
        .json({
          status: 'failed',
          message: 'Error in deleting data from DB',
        })
    }
  }
  
}