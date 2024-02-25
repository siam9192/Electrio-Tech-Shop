import React, { useEffect, useState } from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';

const Profile = () => {
    const {user} = UserAuth();
    const [userProfile,setUserProfile] = useState({})
    const [isEditProfile,setEditProfile] = useState(false);
    useEffect(()=>{
        if(user){
         AxiosBase().get(`/get/user/${user.email}/profile`)
         .then(res => setUserProfile(res.data))
        }
     },[user])
  const cancelProfile = ()=>{
    setEditProfile(false)
  }
   
    return (
        <div className=' bg-white p-5'>

            <h1 className=' text-3xl text-color_primary font-semibold'>My Details</h1>

            <div className='py-3 border-b'>
                <p className='font-semibold'>Personal Information</p>
            </div>
            <div className=' '>
           <div className=' space-y-6   border p-5'>
            <div className='spaec'>
                <div className=' flex items-center gap-2'>
                    <img src={user?.profilePhoto||'https://i.ibb.co/n7Js4vF/morskie-oko-tatry-1.jpg'} alt="" className=' w-20 h-20 rounded-full' />
                   <div className=' space-y-1'>
                   <h1 className=' text-2xl text-color_primary font-semibold'>{'Arafat Hasan Siam'}</h1>
                    
                    <p>{'ahsiam999@gmail.com'}</p>
                   </div>
                </div>

                </div>
                <div className=' space-y-2'>
                    <p><span className=' font-bold'>Phone: </span>N/A</p>
                    <p><span className=' font-bold'>Date of Birth: </span>N/A</p>
                    <p><span className=' font-bold'>Shipping Address: </span>N/A</p>
                    <p><span className=' font-bold'>Billing Address: </span>N/A</p>
                </div>
                </div>


           

           </div>

           <h1 className=' text-xl text-color_primary font-semibold pt-5'>Edit Profile</h1>
            <form className='pt-5 space-y-4'>
                <div className=' flex items-center gap-5'>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>First Name</h3>
                   <input type="text" defaultValue={userProfile?.details?.firstName||''} name="FirstName" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Last Name</h3>
                   <input type="text" name="lastName" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                </div>
                <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Date of birth</h3>
                   <input type="date" defaultValue={userProfile?.details?.lastName||''} name="birth" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2' />
                   </div>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Phone Number</h3>
                   <input type="number" defaultValue={userProfile?.details?.phone||''} name="number" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-1/2' />
                   <p>(Note)Phone number must be bangladeshi</p>
                   </div>
                   <div className=' flex items-center gap-5'>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Billing Address</h3>
                   <input type="text" defaultValue={userProfile?.details?.billingAddress||''} name="billingAddress" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Shipping Address</h3>
                   <input type="text" defaultValue={userProfile?.details?.shippingAddress||''} name="shippingAddress" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                  
                </div>
                <button className=' text-2xl text-white bg-color_primary px-10 rounded-md py-3'>Save</button>
            </form>
            
        </div>
    );
}

export default Profile;
