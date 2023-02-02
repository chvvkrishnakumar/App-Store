import './index.css'

const Tab = props => {
  const {tabDetails, changeBtn, isSelected} = props
  const {tabId, displayText} = tabDetails
  console.log(tabId)
  const onButton = () => {
    changeBtn(tabId)
  }
  const select = isSelected ? 'select' : ''
  return (
    <div>
      <li>
        <button className={select} type="button" onClick={onButton}>
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default Tab
