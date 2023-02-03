import './content.css';



const Content = ({name, article}) => {
  const image = require('../images/Img.jpg');


  const ava = require('../images/AhriAV.png');
  return (
    <div className="content">
      <div className="content__item">
        <div className="content__flex">
          <div className='content__ava'><img className="ava" src={ava} alt="" /></div>
          <p className="content__author"> Authors name <span className='opacity'>in</span> Topics Name <span className='opacity'>7 july</span></p>
        </div>
        <h2 className="content__title">{name}</h2>
        <p className="content__text">{article}</p>
        <p><a href="" className='content__link'>Java Script</a> <span className='content__bottom'>12 min read  </span><span className='content__bot'>Selected for you</span> </p>
      </div>
      <div className="content__img"> 
        <img src={image} alt="" />
      </div>
      
    </div>
  )
}
export default Content;