import React, { Component } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./Events.css";
import bgImage from '../../assets/img/newimg/celestafrontimg.png';

function RegistrationModal({open, onClose, img, form}) {
    return(
        <Modal open={open} onClose={onClose}>
        <div className="modal-box">
            <img className="event-image" src={img || bgImage} />
            <a className="seperate-btn" target="blank" href={form}>Open in a seperate tab</a>
            <iframe className="gform" src={form + '?embedded=true'} width="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </Modal>
    )
}

export default RegistrationModal