import "./ShopOwnerProfile.css";

import logo from "../../assets/photo.png";

function ShopOwnerProfile () {

    return(
        <div className="shop_owner_profile">
            <div className="shop_owner_profile_details">
                <div className="shop_owner_profile_img_area">
					<img src={logo} alt={logo + " img"} className="profile_photo"></img>
				</div>
                <div className="shop_owner_profile_description">
					<div className="shop_owner_profile_description_left">
						<h1 className="shop_name">Roy Varaitice</h1>
						<h2 className="shop_owner_name">Chayan Roy</h2>
						<p className="shop_owner_address">Address</p>
					</div>
                    <div className="shop_owner_profile_description_right">
						<div className="follow">
							<span>Follow</span>
							<span>1000</span>
						</div>
						<div className="following">
							<span>Following</span>
							<span>500</span>
						</div>
					</div>
                </div>
                <div className="shop_owner_profile_contact">
					<button className="follow_btn">Follow</button>
					<button className="contact_btn">Contact</button>
				</div>
            </div>
        </div>
    );
}

export default ShopOwnerProfile;