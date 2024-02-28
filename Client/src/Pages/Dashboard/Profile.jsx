import React, { useEffect, useRef, useState } from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import auth from '../../Authentication/Firebase/Firebase.config';
import ProfileDetails from '../Profile/ProfileDetails';
const Profile = () => {
    const {user} = UserAuth();
    const [refetch,setRefetch] = useState(false);


    const [userProfile,setUserProfile] = useState({})
    const [isEditProfile,setEditProfile] = useState(false);
    const [photo,setPhoto] = useState([])
    const [isUpdating,setIsUpdating] = useState(false)
    const photoInputRef = useRef();
    useEffect(()=>{
        if(user){
         AxiosBase().get(`/get/user/${user.email}/profile`)
         .then(res => setUserProfile(res.data))
        }
     },[user,refetch])
  const cancelProfile = ()=>{
    setEditProfile(false)
  }

 

  const handleRefetch = ()=>{
    setRefetch(!refetch)
  }
  const updateProfileSubmit =async (e)=>{
    e.preventDefault()
    setIsUpdating(true)



    const form = e.target;
 
    

    const firstName = getInputValue(e,'firstName');
    const lastName = getInputValue(e,'lastName');

    const phone = getInputValue(e,'phone');
    const billingAddress = getInputValue(e,'billingAddress')
    const shippingAddress = getInputValue(e,'shippingAddress');
    const dateOfBirth = getInputValue(e,'birth')
    const updatedProfile = {
        details:{
            firstName,
            lastName,
            phone,
            dateOfBirth,
            shippingAddress,
            billingAddress
        }
    }

    

    if(photo.length){

        const response = await axios.post('https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027',{image:photo[0]},{
            headers: {
            'content-type': 'multipart/form-data'
          },
        })
        const photoUrl = response.data.data.display_url;
        updatedProfile.profilePhoto = photoUrl
        updateProfile(auth.currentUser,{
            displayName:`${firstName} ${lastName}`,
            photoURL:photoUrl
    
        })
        .then(res=>{
          AxiosBase().put('/update/user/profile',{email:userProfile.email,updatedProfile})
            .then(res=>{
               
                if(res.data.modifiedCount > 0){
                    form.reset()
                    setIsUpdating(false)
                    handleRefetch()
                  
                }

                setIsUpdating(false)
            })
            .catch(err=>{
          setIsUpdating(false)
          alert('Something went wrong please try again')
            })
            
        })
        .catch(err=>{
            setIsUpdating(false)
            alert('Something went wrong please try again')
        })
    }
    else{
        AxiosBase().put('/update/user/profile',{email:userProfile.email,updatedProfile})
        .then(res=>{
            if(res.data.modifiedCount > 0){
                form.reset()
                handleRefetch()
            }

            setIsUpdating(false)

        })
        .catch(err=>{
            setIsUpdating(false)
            alert('Something went wrong please try again')
            
        })

    }
   }
   const handlePhotoInput = ()=>{
    photoInputRef.current.click();
   }
const getInputValue = (e,name)=>{
    const  form = e.target;
  
    return form[name].value 
}

const handlePhoto = (e)=>{
    const file = e.target.files[0]
    const objectUrl = URL.createObjectURL(file);
    
    setPhoto([file,objectUrl])
     }
  

 

   
    return (
        <div className=' bg-white p-5'>

            <h1 className=' text-3xl text-color_primary font-semibold'>My Details</h1>

            <div className='py-3  border-b'>
                <p className='font-semibold'>Personal Information</p>
            </div>
            <div className=' '>
           <div className=' space-y-6    p-5'>
            <div className='spaec'>
                <div className=' flex items-center gap-2'>
                    <img src={userProfile?.profilePhoto||'https://i.ibb.co/n7Js4vF/morskie-oko-tatry-1.jpg'} alt="" className=' w-20 h-20 rounded-full' />
                   <div className=' space-y-1'>
                   <h1 className=' text-2xl text-color_primary font-semibold'>{'Arafat Hasan Siam'}</h1>
                    
                    <p>{'ahsiam999@gmail.com'}</p>
                   </div>
                </div>

                </div>
                <div className=' space-y-2'>
                    <p><span className=' font-bold'>Phone: </span> {userProfile?.details?.firstName||'N/A'}</p>
                    <p><span className=' font-bold'>Date of Birth: </span>{userProfile?.details?.lastName||'N/A'}</p>
                    <p><span className=' font-bold'>Shipping Address: </span>{userProfile?.details?.shippingAddress||'N/A'}</p>
                    <p><span className=' font-bold'>Billing Address: </span>{userProfile?.details?.billingAddress||'N/A'}</p>
                </div>
                </div>


           

           </div>

           <h1 className=' text-xl text-color_primary font-semibold pt-5' >Edit Profile</h1>
           <div className=' space-y-2 pt-5' >
            <div className=' space-y-1'>
                <div className=' flex justify-center items-center flex-col'>
                    <div className=' hover:cursor-pointer' onClick={handlePhotoInput}>
                    <img src={photo.length ? photo[1] :  userProfile?.profilePhoto? userProfile.profilePhoto : 'https://i.ibb.co/n7Js4vF/morskie-oko-tatry-1.jpg'} alt="" className='rounded-full w-20 h-20' />
                  <input type="file"  ref={photoInputRef} onChange={handlePhoto} className=' hidden'/>
                    </div>
                    <h1 className=' pt-2 text-color_primary font-semibold '>Change photo</h1>
                </div>
</div>
</div>

            <form className='pt-5 space-y-4' onSubmit={updateProfileSubmit}>
                <div className=' flex items-center gap-5'>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>First Name</h3>
                   <input type="text" defaultValue={userProfile?.details?.firstName||''} name="firstName" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Last Name</h3>
                   <input type="text"  defaultValue={userProfile?.details?.lastName||''} name="lastName" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-full' />
                   </div>
                </div>
                <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Date of birth</h3>
                   <input type="date"   defaultValue={userProfile?.details?.dateOfBirth||''} name="birth" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2' />
                   </div>
                   <div className=' flex-1 space-y-1'>
                    <h3 className=' text-color_primary font-medium'>Phone Number</h3>
                   <input type="number" defaultValue={userProfile?.details?.phone||''} name="phone" id="" className=' py-4 border-2 rounded-md outline-none border-color_secondary px-2 w-1/2' />
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
                <button type='submit' disabled={isUpdating} className=' text-2xl text-white bg-color_primary px-10 rounded-md py-3'>{isUpdating?'Saving..':'Save'}</button>
            </form>
            
        </div>
    );
}

export default Profile;
