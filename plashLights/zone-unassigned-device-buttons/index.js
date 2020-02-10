import React from 'react'
import { ZoneDeviceRenameModal } from '../zone-device-rename-modal'

export const ZoneUnassignedDeviceButtons = ({ deviceName, toggleDisplayId, typeDeviceIndex }) => (
    <>
        <div className='zones-buttons-container'>
            <div className='zones-red-button-container'>
                <button className='red-text-button'>ADD</button>
            </div>
            <div className='zones-red-button-container'>
                <button className='red-text-button' onClick={() => toggleDisplayId(`zone-device-rename-modal-${typeDeviceIndex}`)}>RENAME</button>
            </div>
        </div>
        <ZoneDeviceRenameModal deviceName={deviceName} toggleDisplayId={toggleDisplayId} typeDeviceIndex={typeDeviceIndex}/>
    </>
)