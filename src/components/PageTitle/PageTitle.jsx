import "./PageTitle.scss"

const PageTitle = (props) => {
  return (
    <div className='pageTitle'>
        <h1>{(props.title) ? props.title : ''}</h1>
        <span>
            {(props.route) ? props.route : ''}
        </span>
    </div>
  )
}

export default PageTitle