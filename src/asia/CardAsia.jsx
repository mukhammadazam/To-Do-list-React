import { Link } from "react-router-dom";
const CardAsia = (props) => {
    const {img, title, nomi, data, alt} = props;
  return (
    <div className="card col-lg-4 px-0 ">
    <img className="px-0 d-block" src={img} alt={alt} />
    <h1 className="text-center pt-3">{nomi}</h1>
    <h2 className="text-center">{title}</h2>
 <Link className="text-decoration-none card__btn mt-3  fs-5  align-items-end ms-5 ">Read More</Link>
  </div>
  )
}

export default CardAsia;