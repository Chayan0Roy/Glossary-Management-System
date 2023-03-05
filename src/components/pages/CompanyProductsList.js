import "./CompanyProductsList.css";

import IMAGES from "../Other_page/ImgImportPage";
import ProductCard from "../product_card_components/Product_card";
import ProductCardBox from "../product_card_components/Product_card_box";

function CompanyProductsList (props) {

    let CompanyProductsListProductcardBox = [
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

    // let x =  props.sendValue;
    // console.log(x);

    return(
        <div className="company_products_list">
            <ProductCardBox>
                {
                    CompanyProductsListProductcardBox.map(
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

export default CompanyProductsList;