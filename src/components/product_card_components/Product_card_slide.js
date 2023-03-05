import "./Product_card_slide.css";

function ProductCardSlide (props) {
    const classes = "product_card_slide " + props.className;
    
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default ProductCardSlide;