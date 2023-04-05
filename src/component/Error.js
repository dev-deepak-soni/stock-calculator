import { Link, useRouteError } from 'react-router-dom'
import img404 from '../img/404.jpg'

const Error = () => {
    const errors = useRouteError();
    console.log('errors',errors);
  return (
    <div>
        <div>
        {(errors.status === 404) ? <img src={img404} alt='404' className='h-full w-ful' /> : <img src={img404} alt='404' /> }
    </div>
    <div className='text-center'>
        <Link to='/dashboard'><button className='rounded-l-lg rounded-r-lg bg-black text-white p-2 m-4 cursor-pointer'>Go to Home 😜</button></Link>
    </div>
    </div>
  )
}

export default Error