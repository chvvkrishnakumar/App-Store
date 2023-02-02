import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <div>
      <li className="li">
        <img src={imageUrl} alt={appName} />
        <p>{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
