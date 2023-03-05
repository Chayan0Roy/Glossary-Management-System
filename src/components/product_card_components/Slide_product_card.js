import "./Slide_product_card.css";

function SlideProductCard (props) {
    return(
        <div className="slide_product_card">
            <h1 className="slide_product_name">{props.productName}</h1>
            <img src={props.productImg} alt={props.productName + " img"} className="slide_product_img"></img>
        </div>
    );
}

export default SlideProductCard;