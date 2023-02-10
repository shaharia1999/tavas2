import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { ImGoogle } from 'react-icons/im';
import img from "../../assets/images/header_background_images/f1.jpg"

const OpeningpopUp = () => {

        // const popup = document.querySelector('.popup');
        // const x = document.querySelector('.popup-content h1')

        // window.addEventListener('load', () => {
        //     popup.classList.add('showPopup');
        // popup.childNodes[1].classList.add('showPopup');
        // })
        // x.addEventListener('click', () => {
        //     popup.classList.remove('showPopup');
        // popup.childNodes[1].classList.remove('showPopup');
        // })
  
    return (
           <div>
          
            {/*    ==================== model 3  start ======================================================== */}
            {/* <label for="my-modal-3" class="btn">open modal</label> */}
      
            <label for="my-modal-3" class="btn">open modal</label>

     
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative p-0 m-0">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

           <img src={img} className='h-72'></img>
   
  </div>
</div>
           </div>
    );
};

export default OpeningpopUp;