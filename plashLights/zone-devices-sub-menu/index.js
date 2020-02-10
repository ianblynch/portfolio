import React, { useState, useEffect } from 'react'
import { ZoneDevicesList } from '../zone-devices-list'
import { BaseCloseButton } from '../base-close-button'
import initialDevicesState from './dummy-initial-devices-state.json'

export const ZoneDevicesSubMenu = ({ zoneName, toggleDisplay, toggleDisplayId }) => {
    const [devicesList, setDevicesList] = useState(initialDevicesState)
    let viewportHeight = window.innerHeight

    const listKeys = Object.keys(devicesList)
    let assignedList = []
    let unassignedList = []
    listKeys.forEach((li, liIndex) => {
        if (devicesList[li].zone === zoneName) {
            assignedList.push(devicesList[li])
        }
        if (devicesList[li].zone === 'Unassigned') {
            unassignedList.push(devicesList[li])
        }
    })

    return (
        <div className="zone-devices-sub-menu modal hidden">
            <section
                className="modal-main"
                style={{ 'max-height': viewportHeight * 0.9 + 'px' }}
                id={`modal-main-${zoneName.replace(/\s/g, '')}`}
            >
                <div class="zone-devices-sub-menu-header-container" id={`zone-devices-sub-menu-header-container-${zoneName.replace(/\s/g, '')}`}>
                    <h2 className="black-20px-text">
                        {`Devices: ${zoneName}`}
                    </h2>
                    <BaseCloseButton toggleDisplay={toggleDisplay} />
                </div>
                <div 
                    className="zones-scrollable-devices-list-container"
                    style={{ 'max-height': (viewportHeight * 0.9) -92 + 'px' }}
                >
                    <div 
                        className="zones-scrollable-devices-list" 
                        id={`zones-scrollable-devices-list-${zoneName.replace(/\s/g, '')}`}
                        style={{ 'max-height': (viewportHeight * 0.9) -92 + 'px' }}
                    >
                        <h3 className="black-20px-text">Assigned:</h3>
                        <ZoneDevicesList
                            devicesList={assignedList}
                            type="assigned"
                            toggleDisplayId={toggleDisplayId}
                        />
                        <h3 className="black-20px-text">Unassigned:</h3>
                        <ZoneDevicesList
                            devicesList={unassignedList}
                            type="unassigned"
                            toggleDisplayId={toggleDisplayId}
                        />
                    </div>

                    {/* <div className="zones-sub-menu-bottom-buttons" id={`zones-sub-menu-bottom-buttons-${zoneName.replace(/\s/g, '')}`}>
                        <div className="zones-red-button-container">
                            <button
                                className="red-text-button"
                                onClick={toggleDisplay}
                            >
                                DONE
                            </button>
                        </div>
                        <div className="zones-red-button-container">
                            <button
                                className="red-text-button"
                                onClick={toggleDisplay}
                            >
                                CANCEL
                            </button>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
