import { errorDivider } from "@/helpers/functions";
import ResponseObject from "./response.object";

class ResponseManager {
  
  success (res, message = null, data = null) {
    const response = new ResponseObject(true, message, data)
    res.status(200).json(response)
  }
  
  create(res, message = null, data = null) {
    const response = new ResponseObject(true, message, data)
    res.status(201).json(response)
  }
  
  serverError(res, message = 'Server error') {
    const response = new ResponseObject(false, message, null)
    res.status(500).json(response)
  }
  
  notFound(res, message = 'Not found') {
    const response = new ResponseObject(false, message, null)
    res.status(404).json(response)
  }
  
  badRequest(res, message = 'Invalid data') {
    const response = new ResponseObject(false, message, null)
    res.status(400).json(response)
  }
  
}

export default new ResponseManager()