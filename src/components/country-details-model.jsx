import React from "react";

export default function CountryDetailsModel({ contact }) {
  return (
    <div>
      <div
        type="button"
        class="h3"
        data-bs-toggle="modal"
        data-bs-target="#dModel"
      >
       {contact.country.name}:  {contact.phone}
      </div>

      <div
        class="modal fade"
        id="dModel"
        tabindex="-1"
        aria-labelledby="dModelLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="dModelLabel">
                country details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            {contact.country.name} - {contact.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
