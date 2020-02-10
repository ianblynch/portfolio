import React, { useState } from 'react'
import { BaseCloseButton } from '../base-close-button'



export const HowToUseModal = ({ toggleDisplayId }) => {
    let viewportHeight = window.innerHeight

    return (
        <div className="zone-devices-sub-menu modal hidden" id={`how-to-use-modal`}>
            <section
                className="modal-main"
                style={{ 'max-height': viewportHeight * 0.9 + 'px' }}
                id={`modal-main`}
            >
                <div class="device-config-sub-menu-header-container" id={`device-config-sub-menu-header-container`}>
                    <h2 className="black-20px-text">
                        {`How To Use`}
                    </h2>
                    <BaseCloseButton toggleDisplay={() => toggleDisplayId(`how-to-use-modal`)} />
                </div>
                <div 
                    className="how-to-use-scrollable-list-container"
                    style={{ 'max-height': (viewportHeight * 0.9) -92 + 'px' }}
                >
                    <div 
                        className="how-to-use-scrollable-list" 
                        id={`how-to-use-scrollable-list`}
                        style={{ 'max-height': (viewportHeight * 0.9) -92 + 'px' }}
                    >
                        <p className='plash-lights-welcome'>PlashLights Controller</p>
                        <p>
                            <ul className='home-page-list'>
                                <li>Select the Devices tab</li>
                                <li>Press the 'Scan' button, wait up to 30 seconds.</li>
                                <li>If your controller is powered on, it will be listed.</li>
                                <li>Tap the 'Connect' button for each controller you would like to control.</li>
                                <li>Wait until the controller connects and will state 'Connected'.
                                    *Multiple controllers can be connected to simultaneously, and will be controlled together.</li>
                                <li>Use the Sequences tab to select your preferred color sequence. *The selected color sequence is saved and is restored each time the controller is powered on, without connection to the app.</li>
                                <li>Or use the Color Select tab to directly select a solid color. Your color selections are saved to a palette.</li>
                            </ul>
                        </p>
                    </div>
                </div>

                    {/* <div className="zones-sub-menu-bottom-buttons" id={`how-to-use-bottom-buttons`}>
                        <div className="zones-red-button-container centered-container">
                            <button
                                className="red-text-button"
                                onClick={() => toggleDisplayId(`how-to-use-modal`)}
                                >
                                DONE
                            </button>
                        </div>
                    </div> */}
            </section>
        </div>
    )
}
