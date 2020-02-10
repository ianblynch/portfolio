import React from 'react'

export const ZoneEditDeleteModal = ({ zoneName, toggleDisplay }) => {

    return (
        <div className='zone-edit-delete-modal modal hidden'>
            <section className='modal-main'>
                <div class='zone-edit-delete-input-container'>
                    <h2 className='h2-prompt zone-rename-input tag'>
                        Rename Zone
                    </h2>
                    <input className='centered-container modal-input' type='text' value={zoneName}/>
                </div>
                <div className='zones-buttons-container'>
                    <div className='zones-red-button-container'>
                        <button className='red-text-button' onClick={toggleDisplay}>DONE</button>
                    </div>
                    {/* <div className='zones-red-button-container three-buttons-across-button-container'>
                        <button className='red-text-button' onClick={toggleDisplay}>CANCEL</button>
                    </div> */}
                    <div className='zones-red-button-container'>
                        <button className='red-text-button' onClick={toggleDisplay}>DELETE</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
