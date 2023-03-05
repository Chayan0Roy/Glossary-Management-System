import "./FrontPage.css";
import IMAGES from "../Other_page/ImgImportPage";
import ProductCard from "../product_card_components/Product_card";
import SlideProductCard from "../product_card_components/Slide_product_card";
import ProductCardBox from "../product_card_components/Product_card_box";
import ProductCardRow from "../product_card_components/Product_card_row";
import ProductCardSlide from "../product_card_components/Product_card_slide";
import Data from "../Other_page/Data";

function FrontPage (props) {

    let FrontPageProductcardBox = [
        {
            link: '/companyList',
            page: "HOME",
            id: Data[0][0],
            name: Data[0][0],
            img: Data[0][2],
            shopBtn: 'Shop now'
        },
        {
            link: '/companyList',
            page: "HOME", 
            id: Data[1][0],
            name: Data[1][0],
            img: Data[1][2],
            shopBtn: 'Shop now'
        },
        {
            link: '/companyList',
            page: "HOME", 
            id: Data[2][0],
            name: Data[2][0],
            img: Data[1][2],
            shopBtn: 'Shop now'
        },
    ];
    
    let FrontPageProductcardRow = [
        {
            link: '/companyList',
            page: "HOME", 
            id: Data[3][0],
            name: Data[3][0],
            img: Data[1][2],
            shopBtn: 'Shop now'
        },
        {
            link: '/companyList',
            page: "HOME", 
            id: Data[4][0],
            name: Data[4][0],
            img: Data[1][2],
            shopBtn: 'Shop now'
        },
        {
            link: '/companyList',
            page: "HOME", 
            id: Data[5][0],
            name: Data[5][0],
            img: Data[5][2],
            shopBtn: 'Shop now'
        },
    ];

    let FrontPageProductcardSlide = [
        {
            link: '/companyList',
            page: "HOME",
            id: 'Cofee',
            name: 'Cofee',
            img: IMAGES.logo1,
            shopBtn: 'This is a Total'
        },
    ];

	let companyListData =  props.sendCLValue;
    console.log("Front page");
    console.log("companyListData ==  "+companyListData);


    const catagory_ID = (getCatagoryId) => {
		props.reciveFrontPageData(getCatagoryId);
    }


    return(
        <div className="front_page">
            <div className="front_page_body">
                <div className="top_banner">
                    <div className="banner_adds">
                        <img src={IMAGES.logo1} alt="addsImg" className="addsImg"></img>
                    </div>
                    <div className="shop_login_area"></div>
                </div>

                <ProductCardBox>
                    {
                        FrontPageProductcardBox.map(
                            product => (
                                <ProductCard 
                                    get_catagory_Id = {catagory_ID}
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

                <ProductCardRow>
                    {
                        FrontPageProductcardRow.map(
                            product => (
                                <ProductCard 
									get_catagory_Id = {catagory_ID}
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
                </ProductCardRow>

                <ProductCardSlide>
                    {
                        FrontPageProductcardSlide.map(
                            product => (
                                <SlideProductCard 
									get_catagory_Id = {catagory_ID}
                                    PageLink = {product.link}
                                    Page = {product.page}
                                    productId = {product.id}
                                    productName = {product.name}
                                    productImg = {product.img}
                                    productShopButton = {product.shopBtn}>
                                </SlideProductCard>
                            )
                        )
                    }
                </ProductCardSlide>
            </div>
        </div>
    );

}

export default FrontPage;