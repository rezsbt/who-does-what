// Model
import Developer from "@/model/Developer"
// Components
import DeveloperDetailsPage from "@/components/templates/DeveloperDetailsPage"
// Helpers
import { connectDB } from "@/helpers/database"

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
      props: {
        developer: {
          _id: 1,
          firstName: 'Reza',
          lastName: 'Sabet',
          job: 'Frontend Developer',
          phone: '0990***4032',
          email: 'rez*******@gmail.com',
          skills: [
            {_id: 1, title: 'HTML/CSS', level: 'ADVANCED'},
            {_id: 1, title: 'JS', level: 'ADVANCED'},
            {_id: 1, title: 'ReactJS', level: 'INTERMEDIATE'},
            {_id: 1, title: 'NextJS', level: 'INTERMEDIATE'},
          ]
        },
        errorMessage: 'Cannot connect to database'
      }
    }
  }
  
}