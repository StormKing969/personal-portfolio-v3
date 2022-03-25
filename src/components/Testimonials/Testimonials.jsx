import React from 'react'
import TestimonialData from '../../assets/testimonial/TestimonialData'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination } from "swiper"

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination"

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Feedback from colleagues</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonials_container' spaceBetween={50} slidesPerView={1} pagination={true} modules={[Pagination]}>
        {TestimonialData.map(data => (
          <SwiperSlide className='testimonial' key={data.id}>
            <div className='client_avatar'>
              <img src={data.image} alt='project img' />
            </div>
            <h5 className="colleague_name">{data.name}</h5>
            <small className="colleague_feedback">{data.feedback}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials