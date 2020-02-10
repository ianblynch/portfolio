import React from 'react'
import {ZoneAssignedDeviceButtons} from '../zone-assigned-device-buttons'
import {ZoneUnassignedDeviceButtons} from '../zone-unassigned-device-buttons'

export const ZoneDevicesList = ({ toggleDisplay, toggleDisplayId, devicesList, type}) => {
    
    return (
        <section className='zone-devices-list'>
            <ul>
                {devicesList.map((device, deviceIndex) => {
                    let typeDeviceIndex = `${type}-${deviceIndex}`
                    return (
                        <li className='zone-devices-list-item-assigned black-14px-text'>
                            <div
                                className='zone-devices-list-item-assigned-container zone-devices-list-item-container'>
                                <div className='zone-device-list-item-name-model'>
                                    {`${device.name} (${device.model})`}
                                </div>
                                <div className='zone-device-list-item-type-version'>
                                    <span className='zone-device-type-span'>
                                        {`Type: ${device.type}`}
                                    </span>
                                    <span className='zone-device-version-span'>
                                        {`Ver: ${device.version}`}
                                    </span>
                                </div>
                            </div>
                            {type === 'assigned'
                                ? <ZoneAssignedDeviceButtons deviceName={device.name}toggleDisplayId={toggleDisplayId} typeDeviceIndex={typeDeviceIndex}/>
                                : null
                            }
                            {type === 'unassigned'
                                ? <ZoneUnassignedDeviceButtons deviceName={device.name}toggleDisplayId={toggleDisplayId} typeDeviceIndex={typeDeviceIndex}/>
                                : null
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
