import './Buttons.css'

function PrimaryButton(props) {
  return (
    <div className="primary-btn button"><a href="/#">{props.children}</a> </div>
  )
}


function SecondaryButton(props) {
    return (
    <div className="secondary-btn button"> <a href="/#">{props.children}</a> </div>
    
    )
  }
export default PrimaryButton
export {SecondaryButton}