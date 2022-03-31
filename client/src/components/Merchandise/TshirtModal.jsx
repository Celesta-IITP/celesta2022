import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import poster from '../../assets/img/tshirt.jpeg'
import tshirts from '../../assets/img/tshirts.png'
import './merchandise.css'

function TshirtModal({open, onClose}) {
  return (
    <Modal open={open} onClose={onClose}>
        <div className='tshirt-modal-box'>
            <img className='tshirt-poster' src={poster} />
            <div className='tshirt-modal-text'>
                <div className='tshirt-punchline'>Take the plunge and dive deep into the thrilling and exciting world of tech with our merchandise!</div>
                <div className='tshirt-order'>Order Here</div>
                <div className='tshirt-iitp'>Are you an IITP student?</div>
                <div className='tshirt-form-links'><a className='tshirt-form-link' href='https://forms.gle/3AoCWttqtkzbm6uc8'>Yes</a><a className='tshirt-form-link' href='https://bit.ly/celesta_merch'>No</a></div>
                <img className='tshirt-img' src={tshirts} />
            </div>
        </div>
    </Modal>
  )
}

export default TshirtModal