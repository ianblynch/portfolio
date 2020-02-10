import React from 'react'
import { ZoneDeviceRenameModal } from '../zone-device-rename-modal'

export const ZoneAssignedDeviceButtons = ({ deviceName, toggleDisplayId, typeDeviceIndex }) => (
    <>
        <div className='zones-buttons-container'>
            <div className='zones-red-button-container three-buttons-across-button-container'>
                <button className='red-text-button'>SELECT</button>
            </div>
            <div className='zones-red-button-container three-buttons-across-button-container'>
                <button className='red-text-button' onClick={() => toggleDisplayId(`zone-device-rename-modal-${typeDeviceIndex}`)}>RENAME</button>
            </div>
            <div className='zones-red-button-container three-buttons-across-button-container'>
                <button className='red-text-button'>REMOVE</button>
            </div>
        </div>
        <ZoneDeviceRenameModal deviceName={deviceName} toggleDisplayId={toggleDisplayId} typeDeviceIndex={typeDeviceIndex}/>
    </>
)