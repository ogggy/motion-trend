import React from 'react'
import './Categories.css'

const categoriesList = [
    'Theme', 'Editing', 'Camera, Action, Angle', 'Sound Beat', 'Graphical', 'Experimental', 'Elements', 'Car', 'Gun', 'Doll'
]

const Categories = () => {
  return (
    <div className='categories'>
        {categoriesList.map(
            ele =>  
                    <div 
                      className='category-item'
                      key={ele}
                    >
                        <span>{ele}</span>
                    </div>
          )
        }
        {/* {categoriesList.map(
            ele =>  
                    <div className='category-item'>
                        <span>{ele}</span>
                    </div>
          )
        } */}
    </div>
  )
}

export default Categories   