
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error:any = useRouteError()
  return (
    <div>
       <h1>Opps something wrong</h1>
       <p>{error.message}</p>
    
    
  </div>
  )
}
