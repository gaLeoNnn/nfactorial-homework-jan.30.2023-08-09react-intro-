import './footer.css'
const Footer = () => {
  return(
    <footer className="footer">
      <a className="footer__link" href="#">Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.</a>
<div className="footer__img">
        <img src={require('../images/label-text.png')} alt="" />
</div>
    </footer>
  )
}

export default Footer;