import "./Product_card_row.css";

function ProductCardRow (props) {
    const classes = "product_card_row " + props.className;
    
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default ProductCardRow;