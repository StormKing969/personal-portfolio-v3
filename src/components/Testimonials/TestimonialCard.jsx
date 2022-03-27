function TestimonialCard(props) {
    return (
        <div className='testimonial'>
          <div className='client_avatar'>
            <img src={props.image} alt='project img' />
          </div>
          <h5 className="colleague_name">{props.name}</h5>
          <small className="colleague_feedback">{props.feedback}</small>
        </div>
    );
}

export default TestimonialCard;

// NOT BEING USED DUE TO THE SWIPER JS MODULE