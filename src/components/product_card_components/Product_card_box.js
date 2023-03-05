import "./Product_card_box.css";

function ProductCardBox (props) {
    const classes = "product_card_box " + props.className;

    return(
        <div className={classes}>{props.children}</div>
    );
}

export default ProductCardBox;