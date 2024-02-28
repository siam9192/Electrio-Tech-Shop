import { useState } from "react";
import WidthContainer from "../../Components/Reuse/WidthContainer/WidthContainer";

const About = () => {
    const [faqIndex,setFaqIndex]  = useState(false)
    const faqs = [
        {
          question: "How can I track my order status?",
          answer: "You can easily track your order status by logging into your account on our website and navigating to the 'Order History' section. There, you will find real-time updates on your order's progress and estimated delivery date."
        },
        {
          question: "What payment methods are accepted on your ecommerce platform?",
          answer: "We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure online payment options. You can choose the method that is most convenient for you during the checkout process."
        },
        {
          question: "Are there any warranties or guarantees on the tech products you sell?",
          answer: "Yes, we provide warranties on most of our tech products. The duration and terms may vary depending on the product. You can find detailed warranty information on the product page or contact our customer support for specific details."
        },
        {
          question: "Can I return or exchange a product if it doesn't meet my expectations?",
          answer: "Certainly! We have a hassle-free return and exchange policy. If the product doesn't meet your expectations, you can initiate a return or exchange within a specified period after receiving the item. Please refer to our 'Returns and Exchanges' page for detailed instructions and conditions."
        }
      ];
    
    const handleFaq = (index)=>{
        if(index === faqIndex){
            setFaqIndex(false);
            return;
        }
        setFaqIndex(index)
    }      
    return (
        <div className='bg-[#f5f5f5] font-rubik py-10'>
            <WidthContainer>
                <div className='lg:p-5 p-2 bg-white'>
                    <img src="/images/image/about-image.jpg" className='w-full h-full' alt="" />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-6'>
                    <div className=' bg-white'>
                        <h1 className='md:text-2xl text-xl text-black font-semibold py-2 p-4 border-l-4 border-b border-l-black uppercase'>welcome to our store</h1>
                        <p className='p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis incidunt natus quidem quasi sint dolore aliquid a assumenda, ut, libero eius eos repudiandae quam. Fugit sit aspernatur architecto illum saepe non minus, eveniet voluptatum alias harum deserunt. At, exercitationem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi illo, sint delectus qui fuga, neque aperiam fugit quam harum laboriosam magni molestiae nemo! Nihil optio voluptatum dolore mollitia asperiores consequuntur ducimus est dolorem ipsum esse aspernatur, possimus dolores facilis debitis iste hic molestiae pariatur praesentium sint saepe eaque quod neque inventore libero! Fuga, harum ducimus quas eius ratione sequi soluta delectus vitae quia nam aspernatur iure dolorum maiores consequatur ipsum neque molestias nostrum praesentium voluptates beatae dolor! Quidem, provident?
                        </p>
                    </div>
                    <div className=' bg-white'>
                        <h1 className='md:text-2xl text-xl text-black font-semibold py-2 p-4 border-l-4 border-b border-l-black uppercase'>Frequently Asked Questions</h1>
                         <div className='py-2 px-4 space-y-4 h-full overflow-auto'>
                            {
                                faqs.map((item,index)=>{
                                 return   <div className='py-2 px-2 bg-gray-100 space-y-2 h-fit transition-[height] duration-300 ease-in' onClick={()=>handleFaq(index)} key={index}>
                                        <h1 className='text-black '>{index+1}.{item.question}</h1>
                                        <p className={`${faqIndex === index ?'block' : 'hidden'} `}>{item.answer}</p>
                                    </div>
                                })
                            }
                         </div>
                        </div>
                </div>
            </WidthContainer>
        </div>
    );
}

export default About;
