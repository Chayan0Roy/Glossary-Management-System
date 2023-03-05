import "./CompanyList.css";
import IMAGES from "../Other_page/ImgImportPage";
import ProductCard from "../product_card_components/Product_card";
import ProductCardBox from "../product_card_components/Product_card_box";
import Data from "../Other_page/Data";

function CompanyList (props) {

    let Cake = [
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Comp',
            name: 'Company00',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company555',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company999',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
    ];

    let Candy = [
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
        {
            link: '/',
            page: "COMPANY LIST",
            id: 'Company1',
            name: 'Company1',
            img: IMAGES.logo1,
            shopBtn: 'Shop now'
        },
    ];


    let frontPageData =  props.sendFPValue;
    console.log("Company page");
    console.log("frontPageData ==  "+frontPageData);

    const company_ID = (getCompanyId) => {
        props.reciveCompanyListData(getCompanyId);
    }    

    return(
        <div className="company_list">
            <ProductCardBox>
                {
                   Cake.map(
                        product => (
                            <ProductCard
                                get_company_Id = {company_ID}
                                PageLink = {product.link}
                                Page = {product.page}
                                productId = {product.id}
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

export default CompanyList;