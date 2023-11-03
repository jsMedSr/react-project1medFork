import'./MostPopular.css'
import popular_01 from '../../assets/images/popular-01.jpg'
function MostPopular() {
  return (
    <>
    <div className='section-wrapper'>
        <div className='section-header'>
            <h3>Most Popular</h3>
        </div>
        <div className='most-popular-items'>
            <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-img' src={popular_01} alt="" />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            fortnite <br/>
                            <span>sandbox</span>  
                        </h4>
                        <ul>
                            <li>4.8</li>
                            <li>2.3 M</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-img' src={popular_01} alt="" />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            fortnite <br/>
                            <span>sandbox</span>  
                        </h4>
                        <ul>
                            <li>4.8</li>
                            <li>2.3 M</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-img' src={popular_01} alt="" />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            fortnite <br/>
                            <span>sandbox</span>  
                        </h4>
                        <ul>
                            <li>4.8</li>
                            <li>2.3 M</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-img' src={popular_01} alt="" />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            fortnite <br/>
                            <span>sandbox</span>  
                        </h4>
                        <ul>
                            <li>4.8</li>
                            <li>2.3 M</li>
                        </ul>

                    </div>
                </div>
            </div>


        </div>
        
        
    </div>

    </>
  )
}

export default MostPopular