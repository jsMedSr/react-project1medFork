import'./MostPopular.css'
import { Card,SectionHeader,SectionWrapper } from '../../components'
import MostPopularItemsData from '../../data/MostPopular/MostPopularItems'



function MostPopular() {
   
  return (
    <>
    <SectionWrapper> 
        <SectionHeader> Most Popular </SectionHeader>
       
        
        <div className='most-popular-items'>
            
            {MostPopularItemsData.map(
                e => <Card key={e.id} image={e.image} title={e.title} category={e.category} rate={e.rate} download={e.download} />
            )}

        </div>
        
 </SectionWrapper>
    
    </>
  )
}

export default MostPopular