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
  
  async getDetails (req, res) {}
  
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
  
  async pathEditDetails (req, res) {}
  
  async delete (req, res) {}
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DeveloperController()