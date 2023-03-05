import "./ProductBuyPageByFollowingShop.css";

import IMAGES from "../Other_page/ImgImportPage";
import ProductCard from "../product_card_components/Product_card";
import ProductCardBox from "../product_card_components/Product_card_box";
import ShopOwnerProfile from "../Other_page/ShopOwnerProfile";


function ProductBuyPageByFollowingShop () {

    let ProductBuyPageByFollowingShop_ProductcardBox = [
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        },
        {
            name: 'Flake',
            img: IMAGES.logo,
            shopBtn: 'Shop now'
        }
    ];

    return(
        <div className="products_list">
            <div className="product_buy_area">
                <div className="product_buy_img_area">
                    <div className="product_buy_img_area_left">
                        <img src={IMAGES.logo} alt={IMAGES.logo + " img"} className="product_buy_left_img"></img>
                        <img src={IMAGES.logo} alt={IMAGES.logo + " img"} className="product_buy_left_img"></img>
                    </div>
                    <div className="product_buy_img_area_right">
                        <img src={IMAGES.logo} alt={IMAGES.logo + " img"} className="product_buy_right_img"></img>
                    </div>
                </div>
                <div className="product_buy_details_area">
                    <div className="product_buy_details_header_area">
                        <h1 className="product_name">Top (Unik)</h1>
                    </div>
                    <div className="product_buy_details_body_area">
                        <p className="product_description">vjhdfbuvfvbfuydvfd vyfdvajdfcgsduafc fcuysa vjhdfbuvfvbfuydvfd </p>
                        <h3 className="product_buy_price">$100 per pkt</h3>
                    </div>
                    <div className="product_buy_details_button_area">
                        <button className="product_buy_details_button">Add to Chart</button>
                        <button className="product_buy_details_button">Buy</button>
                    </div>
                </div>
            </div>
            
           <ShopOwnerProfile className="ShopOwnerProfile"></ShopOwnerProfile>
           <ProductCardBox>
                {
                    ProductBuyPageByFollowingShop_ProductcardBox.map(
                        product => (
                            <ProductCard 
                                productName = {product.name}
                                productImg = {product.img}
                                productShopButton = {product.shopBtn}>
                            </ProductCard>
                        )
                    )
                }
            </ProductCardBox>
        </div>
    );
}

export default ProductBuyPageByFollowingShop;