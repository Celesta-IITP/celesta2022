import React, { Component } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./Events.css";

function RegistrationModal({open, onClose, form}) {
    return(
        <Modal open={open} onClose={onClose}>
        <div className="modal-box">
            <iframe className="gform" src={form + '?embedded=true'} width="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </Modal>
    )
}

export default RegistrationModal