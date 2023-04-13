import { errorDivider } from "@/helpers/functions"
import responseManager from "@/lib/response/response.manager"
import Developer from "@/model/Developer"
import { developerValidation, skillsValidation } from "@/helpers/serverValidations"

class DeveloperController {
  
  async getAll (req, res) {
    try {
      const developers = await Developer.find()
      const data = developers.map(dev => ({
        fullname: `${dev.firstName} ${dev.lastName}`,
        phone: dev.phone,
        job: dev.job,
        _id: dev._id
      }))
      responseManager.success(res, null, data)
    } catch (err) {
      errorDivider('Error in get developers list', err)
      responseManager.serverError(res, 'Error in get developers list')
    }
  }
  
  async getDetails (req, res) {
    const id = req.query.developerId
    try {
      const developer = await Developer.findOne({ _id: id})
      if (!!developer) responseManager.success(res, null, developer)
      else responseManager.notFound(res, 'Developer not found')
    } catch (err) {
      errorDivider('Erro in get developer details', err)
      responseManager.notFound(res, 'Erro in get developer details')
    }
  }
  
  async postCreate (req, res) {
    const { data } = req.body
    if (developerValidation(data) && skillsValidation(data.skills)) {
        try {
          const newDeveloper = await Developer.create(data)
          responseManager.create(res, 'Developer saved', newDeveloper)
        } catch (err) {
          errorDivider('Create new developer error', err)
          responseManager.serverError(res, 'Error in save new developer')
        }
    } else {
      responseManager.badRequest(res, 'Invalid data')
        return;
    }
  }
  
  async pathEditDetails (req, res) {
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
        responseManager.create(res, 'Developer edited successfully', developer)
      } else {
        responseManager.badRequest(res, 'Invalid data')
      }
    } catch (err) {
      errorDivider('Error in editing developer data', err)
      responseManager.serverError(res, 'Error in editing data from database')
    }
  }
  
  async delete (req, res) {
    const id = req.query.developerId
    try {
      await Developer.deleteOne({ _id: id })
      responseManager.success(res, 'Developer deleted successfully')
    } catch (err) {
      errorDivider('Error in removing developer', err)
      responseManager.badRequest(res, 'Error in removing developer from database')
    }
  }
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DeveloperController()