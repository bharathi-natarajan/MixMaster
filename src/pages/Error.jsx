import Wrapper from '../wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import errImg from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={errImg} alt="404 not found" />
          <h3>Oops !</h3>
          <p>Page not found</p>
          <Link to="/">Go home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
