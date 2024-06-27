import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${url}${searchTerm}`)

  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()

  return (
    <div>
      <h1>Landing</h1>
    </div>
  )
}
export default Landing
