// Model
import Developer from "@/model/Developer"
// Components
import DeveloperDetailsPage from "@/components/templates/DeveloperDetailsPage"
// Helpers
import connectDB from "@/database/connectDB"

export default function DeveloperDetails (props) {
  return <DeveloperDetailsPage {...props}/>
}

export async function getServerSideProps (context) {
  
  const { developerId } = context.query
  
  try {
    // Try connect to database
    await connectDB()
    // Get developer details
    const developer = await Developer.findOne({ _id: developerId })
    return {
      props: {
        developer: JSON.parse(JSON.stringify(developer)),
      }
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
  
}