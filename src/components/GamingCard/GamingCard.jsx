import { SecondaryButton } from '../index'
import './GamingCard.css'

function GamingCard(props) {
  return (
    <div className='gaming-library-item'>
        <ul>
            <li><img src={props.image} alt="" /></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date data</h4><span>{props.date_added}</span></li>
            <li><h4>Hours played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.downloded}</span></li>
            
            <SecondaryButton>download</SecondaryButton>
        </ul>
        

    </div>
  )
}

export default GamingCard