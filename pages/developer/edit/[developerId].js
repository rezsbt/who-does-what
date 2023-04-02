import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
// Components
import EditDeveloperPage from "@/components/templates/EditDeveloperPage"
// Helpers
import { defaultAjaxError } from "@/helpers/functions"

export default function EditDeveloper () {
  
  const [data, setData] = useState(null)
  
  const router = useRouter()
  const { developerId } = router.query
  
  useEffect(() => {
    if (!!developerId) {
      axios.get(`/api/developer/${developerId}`)
        .then(res => setData(res.data.data))
        .catch(err => defaultAjaxError(err.request.status, err.message))
    }
  }, [developerId])
  
  return !!data ? <EditDeveloperPage developer={data}/> : <p>Loading...</p>
}

