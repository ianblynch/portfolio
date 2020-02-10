import React from "react";

export const ZoneDeviceRenameModal = ({ deviceName, toggleDisplay, toggleDisplayId, typeDeviceIndex }) => {
  return (
    <div className="zone-edit-delete-modal modal hidden" id={`zone-device-rename-modal-${typeDeviceIndex}`} key={`rename-modal-${typeDeviceIndex}`}>
      <section className="modal-main">
        <div class="zone-edit-delete-input-container">
          <h2 className="h2-prompt zone-rename-input tag">Rename Zone</h2>
          <input
            className="centered-container modal-input"
            type="text"
            value={deviceName}
          />
        </div>
        <div className="zones-buttons-container">
          <div className="zones-red-button-container centered-container">
            <button className="red-text-button" onClick={() => toggleDisplayId(`zone-device-rename-modal-${typeDeviceIndex}`)}>
              DONE
            </button>
          </div>
          {/* <div className="zones-red-button-container">
            <button className="red-text-button" onClick={() => toggleDisplayId(`zone-device-rename-modal-${typeDeviceIndex}`)}>
              CANCEL
            </button>
          </div> */}

        </div>
      </section>
    </div>
  );
};
