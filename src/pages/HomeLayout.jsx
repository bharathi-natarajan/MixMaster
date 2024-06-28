import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  )
}
export default HomeLayout
