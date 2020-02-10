import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addNewZone } from '../../actions'


export const ZoneAddButton = ({ addNewZone }) => {
    const [zoneModalComponentShown, setZoneModalComponentShown] = useState(false)
    const [newZoneName, setNewZoneName] = useState('myZone')
    const showZoneAddModal = () => {
        setNewZoneName('')
        setZoneModalComponentShown(true)
    }
    const cancelZoneAddFromModal = () => {
        setZoneModalComponentShown(false)
        setNewZoneName('')
    }
    const handleSubmitZoneAddFromModal = (newZoneName) => {

        //add validation
        addNewZone(newZoneName)
        cancelZoneAddFromModal()
    }

    let modal 
    if (zoneModalComponentShown) {
        modal =
        <div className='zone-add-modal modal'>
            <section className='modal-main'>
                    <div className='zone-add-name-input-container'>
                        <h2 className='h2-prompt zone-add-name-input-tag'>
                            Add New Zone:
                        </h2>
                        <div >
                            <input className='centered-container modal-input' id='zone-add-name-input' type='text' value={newZoneName} onChange={e => setNewZoneName(e.target.value)}/>
                        </div>
                    </div>
                    <div className='zones-buttons-container'>
                        <div className='zones-red-button-container'>
                            <button className='red-text-button' onClick={(event) => handleSubmitZoneAddFromModal(newZoneName)}>ADD ZONE</button>
                        </div>
                        <div className='zones-red-button-container'>
                            <button className='red-text-button' onClick={cancelZoneAddFromModal}>CANCEL</button>
                        </div>
                    </div>
            </section>
        </div>
        {document.getElementById('zone-add-name-input') ? document.getElementById('zone-add-name-input').focus() : null}

    } else {
        modal = null
    }

    return (
        <>
            <button className='red-text-button' onClick={showZoneAddModal}>Add Zone</button>
            {modal}
        </>
    )
}

export default connect(
    ({ selectedItem, colorNodes, deviceNodes, testZonesDevicesNodes }) => ({ testZonesDevicesNodes }),
    { addNewZone }
  )(ZoneAddButton)