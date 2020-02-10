import React from 'react'

export const ZoneSelectButton = ({ zoneObject, onClick, key }) => {
    return(
        <button className='red-text-button' zone={zoneObject} key={key} onClick={onClick}>{zoneObject.isSelected ? 'SELECTED' : 'SELECT'}</button>
    )
}



