import "./ShopOwnerProfilePages.css";

import IMAGES from "../Other_page/ImgImportPage";
import logo from "../../assets/photo.png";
import ShopOwnerProfile from "../Other_page/ShopOwnerProfile";
import ProductCard from "../product_card_components/Product_card";
import ProductCardBox from "../product_card_components/Product_card_box";


function ShopOwnerProfilePages () {

    let ShopOwnerProfilePagesProductcardBox = [
        {
            name: 'Flake',
            img: logo,
            description: 'This is a Total'
        },
        {
            name: 'Tea',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'biri',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Flake',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Tea',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Sweets',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Flake',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Bimol',
            img: logo,
            description: 'This is a Flake'
        },
        {
            name: 'Sekhor',
            img: logo,
            description: 'This is a Flake'
        }
    ];

    return(
        <div className="shop_owner_profile_page">
           
            <ShopOwnerProfile></ShopOwnerProfile>
            
            <ProductCardBox>
                {
                    ShopOwnerProfilePagesProductcardBox.map(
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

export default ShopOwnerProfilePages;