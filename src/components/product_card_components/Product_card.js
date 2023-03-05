import "./Product_card.css";
import { Link } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
function ProductCard (props) {

    let pageLink = props.PageLink;
    let page = props.Page;
    let id = props.productId;
    
    const clickCard = () => {
        if (page == "HOME") {
            props.get_catagory_Id(id);
        } else if (page == "COMPANY LIST") {
            props.get_company_Id(id);
        }
    }

    return(
        <Link className="product_card" onClick={ clickCard } to={pageLink}>
            <h1 className="product_name">{props.productName}</h1>
            <img src={props.productImg} alt={props.productName + " img"} className="product_img"></img>
            <h1 className="product_shop_btn">{props.productShopButton}</h1>
        </Link>
    );
}

export default ProductCard;