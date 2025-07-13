import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those who found Home with us.</p>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {testimonialsData.map((Testimonial,index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={Testimonial.image} alt={Testimonial.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{Testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{Testimonial.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {/* {Array.from({length:Testimonial.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon} alt="" />
                        ))} */}
                        {[...Array(Testimonial.rating)].map((_, i) => (
                        <img key={i} src={assets.star_icon} alt="star" className='w-4 h-4' />
                        ))}
                    </div>
                    {/* <p className='text-gray-600'>{Testimonial.text}</p> */}
                    <p className='text-gray-600 italic relative mt-4'>
                     <span className='absolute text-3xl text-gray-300 -top-4 -left-3'>&ldquo;</span>
                     {Testimonial.text}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials