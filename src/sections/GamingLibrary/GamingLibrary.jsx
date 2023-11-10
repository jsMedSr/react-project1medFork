import './GamingLibrary.css'
import {GamingCard, SectionHeader,SectionWrapper } from '../../components'
import GamingLibraryData from '../../data/GamingLibraryData/GamingLibraryData'



function GamingLibrary() {


  const GamingLD = GamingLibraryData.map(e => 
     <GamingCard key={e.id} image={e.image}  
      title={e.title}   category={e.category}   date_added={e.date_added}   
      hours_played={e.hours_played}  downloded={e.downloded} />
    
      
      )



  

  return (
    <>
    <SectionWrapper> 
        <SectionHeader> Gaming Library </SectionHeader>
       
        
        <div className='gaming-library-cards' >
            {GamingLD}
         
        </div>
        
 </SectionWrapper>
    
    </>
  )
}

export default GamingLibrary