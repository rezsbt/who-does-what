class ResponseObject {
  constructor (status, message = null, data = null) {
    this.status = status ? 'success' : 'failed'
    this.data = data
    this.message = message
  }
  getResult () {
    return {
      status: this.status,
      message: this.message,
      data: this.data
    }
  }
}

export default ResponseObject