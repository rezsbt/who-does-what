// Components
import HomePage from "@/components/templates/HomePage"
// Helpers
import { connectDB } from "@/helpers/database"
import { errorDivider } from "@/helpers/functions"
import Developer from "@/model/Developer"

export default function Home ({ data, errorMessage }) {
  return <HomePage data={data} errorMessage={errorMessage}/>
}

export async function getStaticProps () {
  
  try {
    // Try connect to DB
    await connectDB()
    // Get developers list
    const developer = await Developer.find()
    return {
      props: {
        data: [...JSON.parse(JSON.stringify(developer)).map(item => ({
          _id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          job: item.job
        }))]
      },
      revalidate: Number(process.env.SIX_HOURS)
    }
  } catch (err) {
    errorDivider('Connecting to DB error', err)
    return {
      // notFound: true,
      props: {
        data: [{
          _id: 1,
          firstName: 'reza',
          lastName: 'sabet',
          job: 'Frontend Developer'
        }],
        errorMessage: 'Cannot connect to database'
      },
      revalidate: Number(process.env.SIX_HOURS)
    }
  }
  
  
}