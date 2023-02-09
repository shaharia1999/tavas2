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
                <div class="modal-box relative MODAL-popUP_onLoad">
                    <img src={img} className='absulote'></img>
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold z-40 text-center text-black  py-5 text-2xl ">Sing Up</h3>
                    <div className='flex justify-center mb-4'>
                        <input type="text" placeholder=" FirstName" class="input input-bordered w-full max-w-xs justify-center" />
                    </div>
                    <div className='flex justify-center mb-4'>
                        <input type="text" placeholder="LastName" class="input input-bordered w-full max-w-xs justify-center" />
                    </div>
                    <div className='flex justify-center mb-4'>
                        <input type="text" placeholder="email/number" class="input input-bordered w-full max-w-xs justify-center text-black" />
                    </div>
                    <div className='flex justify-center mb-4 z-40'>
                        <select class="select w-full max-w-xs z-40">
                            <option disabled selected>Gender</option>
                            <option>Male</option>
                            <option>FeMale</option>

                        </select>
                    </div>
                    <div class='flex justify-center   '>
                        {/* <button className='btn block text-center px-24'>cuntinue</button> */}
                        <label for="my-modal-6 " className='btn block text-center px-24 py-3 space-x-2 text-1xl z-40'>Sing Up</label>
                    </div>
                    <div className='flex mt-10 relative'>
                        <hr className='bg-red-500 w-48 mt-4'></hr>
                        <p className='w-20 justify-center text-center  absolute lg:ml-48 ml-36 selection:text-2xl'>or</p>
                        <hr className='bg-red-500 w-64 mt-4'></hr>
                    </div>
                    <div className='flex justify-center mt-10'>


                        <div className='text-white bg-gray-800 py-3 px-6 mr-4 cursor-pointer flex text-center z-40'>
                            {/* <FiFacebook className='text-white'></FiFacebook>  */}
                            <AiFillFacebook className='text-3xl text-white mr-2 '></AiFillFacebook>
                            <h6 className='text-2xl'> Facebook</h6>
                        </div>
                        <div className='text-white z-40 bg-gray-800 py-3 px-6 mr-4 cursor-pointer flex text-center'>
                            {/* <FiFacebook className='text-white'></FiFacebook>  */}
                            <ImGoogle className='text-3xl text-white mr-2 '></ImGoogle>
                            <h6 className='text-2xl'> Google</h6>
                        </div>

                    </div>



                </div>
            </div>
            {/*    ==================== model 3  end ======================================================== */}
           </div>
    );
};

export default OpeningpopUp;