import PageTitle from "../../Components/PageTitle/PageTitle"
import "./NotFound.scss"

import PageNotFound from "../../Assets/Images/nonetwork.svg"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const NotFound = () => {
  return (
    <div className="notfound">
        <PageTitle title="" />
        <h1>404</h1>
        <div className="notfoundimg">
            <img src={PageNotFound} alt="Page Not Found" />
            <HighlightOffIcon sx={{fontSize: '150px'}} />
        </div>
        <h3>Page Not Found</h3>
    </div>
  )
}

export default NotFound