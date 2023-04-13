import Developer from "@/model/Developer"
// Helpers
import connectDB from "@/database/connectDB"
import { errorDivider } from "@/helpers/functions"
import { developerValidation, skillsValidation } from "@/helpers/serverValidations"

export default async function handler (req, res) {
  
  // Try connect to DB
  try {
    await connectDB()
  } catch (err) {
    errorDivider('Connecting to DB error', err)
    res
      .status(500)
      .json({
        status: 'failed',
        message: 'Error in connecting to database'
      })
  }
  
  // Create new developer (POST)
  if (req.method === 'POST') {
    const { data } = req.body
    if (developerValidation(data) && skillsValidation(data.skills)) {
        try {
          const newDeveloper = await Developer.create(data)
          console.log()
          res
            .status(201)
            .json({
              status: 'success',
              message: 'Data created successfully',
              data: newDeveloper,
            })
        } catch (err) {
          errorDivider('Create new developer error', err)
          res
            .status(500)
            .json({
              status: 'failed',
              message: 'Error in create new developer'
            })
        }
    } else {
      res
        .status(400)
        .json({
          status: 'failed',
          message: 'Invalid data'
        })
        return;
    }
  }
  // Get all developers list (GET)
  else if (req.method === 'GET') {
    try {
      const developers = await Developer.find()
      res
        .status(400)
        .json({
          status: 'success',
          data: [...developers.map(dev => ({
            fullname: `${dev.firstName} ${dev.lastName}`,
            phone: dev.phone,
            job: dev.job,
            _id: dev._id
          }))]
        })
    } catch (err) {
      errorDivider('Get all developers list error', err)
      res
        .status(500)
        .json({
          status: 'failed',
          message: 'Error in get developers list'
        })
    }
  }
  
}