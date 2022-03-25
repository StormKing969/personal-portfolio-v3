function TestimonialCard(props) {
    return (
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={props.image} alt='project img' />
          </div>
          <h5 className="colleague_name">{props.name}</h5>
          <small className="colleague_feedback">{props.feedback}</small>
        </SwiperSlide>
    );
}

export default TestimonialCard;