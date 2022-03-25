function PortfolioCard(props) {
    return (
        <article className='portfolio_item'>
            <div className='portfolio_item_image'>
                <img src={props.image} alt='project img' />
            </div>

            <h3>{props.title}</h3>
            <div className='portfolio_item_cta'>
                <a href={props.github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                <a href={props.demo} target='_blank' rel='noreferrer' className='btn btn_primary'>Live Demo</a>
            </div>
        </article>
    );
}

export default PortfolioCard;