import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="relative w-full py-14 border-t">
        <div className="container">
            <div className="relative space-y-2 text-center">
                <p>&copy; {new Date().getFullYear()}. All rights reserved by Pankaj Misal.</p>
                <p>Check out the developer <Link to="/developer" className="text-blue-500">Pankaj Misal</Link></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer