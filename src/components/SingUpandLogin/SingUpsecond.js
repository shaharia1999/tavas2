import React from 'react';

const SingUpsecond = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box MODAL-popUP">
                    <p className='text-center pt-10'>2/2</p>
                    <h3 class="font-bold  text-center text-white py-5 text-2xl font-gilroy ">SING UP</h3>
                    <div className=' mx-9'>
                        <p className='pb-3'>A four digit OTP has been sent to +8801707018322. Enter the code here</p>
                        <div className='MODAL-popUP-input mt-2'>
                            <input type="text" placeholder="OTP" class="py-2 px-2" />
                        </div>
                        <p className='cursor-pointer py-1'>00:29 Resend Code</p>
                        <div className='MODAL-popUP-input mt-2'>
                            <input type="text" placeholder="Name" class="py-2 px-2" />
                        </div>
                        <div className='MODAL-popUP-input mt-2'>
                            <input type="text" placeholder="Password" class="py-2 px-2" />
                        </div>
                        <div className='MODAL-popUP-input mt-2'>
                            <input type="text" placeholder="Confirm Password" class="py-2 px-2" />
                        </div>

                        <div className='MODAL-popUP-input mt-6'>
                            <label for="my-modal-6 " className='uppercase text-white block text-center bg-[#121D45] py-2 space-x-2 text-1xl'>SUBMIT</label>
                        </div>

                        <div className='flex mt-10 relative'>
                            <hr className=' w-[50%] bg-white '></hr>
                            <p className=' z-50  text-2xl absolute left-[45%] bg-[#74746ed3] bottom-[-13px] px-4'>or</p>
                            <hr className=' w-[50%] bg-white '></hr>
                        </div>
                        <div class="modal-action ">
                            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                        <SlArrowLeft class=" absolute left-3 top-10 text-1xl text-white"></SlArrowLeft>
                        <div className='flex justify-between mt-3'>
                            <div className='text-white  py-1 px-2 cursor-pointer flex  justify-center justify-items-center text-center border w-36'>
                                <AiFillFacebook className='text-1xl text-[#121D45]  mt-1 mr-3'></AiFillFacebook>
                                <h6 className='text-1xl  font-semibold'> Facebook</h6>
                            </div>
                            <div className='text-white py-1 px-2 justify-center justify-items-center   cursor-pointer flex text-center w-36 border'>

                                <ImGoogle className='text-1xl text-[#121D45] mt-1 mr-3 '></ImGoogle>
                                <h6 className='text-1xl text-center font-semibold'> Google</h6>
                            </div>

                        </div>
                    </div>
                    <div className=' flex justify-center mt-10 MODAL-popUP_footer'>
                        <p className='text-white text-1xl py-2'>Already have an Account ?
                            <span className='text-white  text-1xl cursor-pointer '> Login Now</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUpsecond;