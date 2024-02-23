import React, { useRef, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import auth from '../../Authentication/Firebase/Firebase.config';
import AxiosBase from '../../Axios/AxiosBase';
import axios from 'axios';
const EditProfile = ({userProfile,cancelProfile}) => {
   const [photo,setPhoto] = useState([])
   const [isUpdating,setIsUpdating] = useState(false)
   const photoInputRef = useRef();
   const handlePhoto = (e)=>{
  const file = e.target.files[0]
  const objectUrl = URL.createObjectURL(file);
  
  setPhoto([file,objectUrl])
   }

   const handlePhotoInput = ()=>{
    photoInputRef.current.click();
   }
const getInputValue = (e,name)=>{
    const  form = e.target;
    return form[name].value 
}

   const updateProfileSubmit =async (e)=>{
    e.preventDefault()
    setIsUpdating(true)

    const firstName = getInputValue(e,'firstName');
    const lastName = getInputValue(e,'lastName');

    const phone = getInputValue(e,'phone');
    const billingAddress = getInputValue(e,'billingAddress')
    const shippingAddress = getInputValue(e,'shippingAddress');
    const updatedProfile = {
        details:{
            firstName,
            lastName,
            phone,
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
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    form.reset()
                    setIsUpdating(false)
                    cancelProfile()

                }

                setIsUpdating(false)
            })
            .catch(err=>{
          setIsUpdating(false)
            })
            
        })
        .catch(err=>{
            setIsUpdating(false)
        })
    }
    else{
        AxiosBase().put('/update/user/profile',{email:userProfile.email,updatedProfile})
        .then(res=>{
            if(res.data.modifiedCount > 0){
                form.reset()
                cancelProfile()
            }

            setIsUpdating(false)
            cancelProfile()
        })
        .catch(err=>{
            setIsUpdating(false)
            
        })

    }
   }
    return (
        <div className=''>
            <h1 className=' text text-color_primary font-medium text-xl'>Edit Your Profile</h1>

       <form onSubmit={updateProfileSubmit}>
       <div className=' space-y-2 pt-5' >
            <div className=' space-y-1'>
                <div className=' flex justify-center items-center flex-col'>
                    <div className=' hover:cursor-pointer' onClick={handlePhotoInput}>
                    <img src={photo.length ? photo[1] :  userProfile?.profilePhoto? userProfile.profilePhoto : 'https://i.ibb.co/n7Js4vF/morskie-oko-tatry-1.jpg'} alt="" className='rounded-full w-20 h-20' />
                  <input type="file"  ref={photoInputRef} onChange={handlePhoto} className=' hidden'/>
                    </div>
                    <h1 className=' pt-2 text-color_primary font-semibold '>Change photo</h1>
                </div>
                <p>First Name *</p>
                <input type="text" name='firstName' defaultValue={userProfile?.details?.firstName} className=' w-full p-2 border-2 border-color_primary outline-none  rounded-md text-color_primary' />
            </div>
            <div className=' space-y-1'>
                <p>Last Name *</p>
                <input type="text" name='lastName' defaultValue={userProfile?.details?.lastName} className=' w-full p-2 border-2 border-color_primary outline-none  rounded-md text-color_primary' />
            </div>

            <div className=' space-y-1'>
                <p>Phone *</p>
                <input type="text" name='phone' defaultValue={userProfile?.details?.phone} className=' w-full p-2 border-2 border-color_primary outline-none  rounded-md text-color_primary' />
            </div>
            <div className=' space-y-1'>
                <p>Billing Address *</p>
                <input type="text" name='billingAddress' defaultValue={userProfile?.details?.billingAddress} className=' w-full p-2 border-2 border-color_primary outline-none  rounded-md text-color_primary' />
            </div>
            <div className=' space-y-1'>
                <p>Shipping Address *</p>
                <input type="text" name='shippingAddress' defaultValue={userProfile?.details?.shippingAddress} className=' w-full p-2 border-2 border-color_primary outline-none  rounded-md text-color_primary' />
            </div>
<div className=' flex justify-end gap-2 '>
    <div className=' px-8 font-bold py-2 bg-color_light_red text-white hover:cursor-pointer' onClick={cancelProfile}>Cancel</div>
    <button disabled={isUpdating} className=' px-8 font-bold py-2 bg-color_primary text-white'>{isUpdating ? 'Updating..' : 'Update'}</button>
</div>
        </div>
       </form>
            
        </div>
    );
}

export default EditProfile;
