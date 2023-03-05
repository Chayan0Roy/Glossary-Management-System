import "./Header.css";
import { Link } from "react-router-dom";
import IMAGES from "../Other_page/ImgImportPage";
import searchIcon from "../../assets/icons/search.svg";
import moon from "../../assets/icons/moon.png";


function Header(){
    return(
        <div className="header">
            <a href="#" id="header_logo">
                <img src={IMAGES.logo} id="header_logo_img"></img>
            </a>
            <div id="header_search_area">
				<input type="search" placeholder="Type to search here..." id="search_input" />
				<div id="search_icon_area">
					<img src={searchIcon} id="search_icon" />
				</div>
			</div>
            <nav>
				<Link id="home" to="/">Home</Link>
				<Link id="customer_view" to="/companyList">Company List</Link>
				<Link id="shopkeeper_view" to="/companyProductsList">Products List</Link>
				<Link id="due_payment" to="/productBuyPage">Buy Page</Link>
			</nav>
			<div id="header_btn_area">
				<div id="signup_login_btn">
					<div id="signup_login_btn_img_area">
						<img src={IMAGES.logo} className="signup_login_image" />
					</div>
					<div id="signup_login_form" className="hide">
						<div className="form signup">
							<h1 id="signup_header">Signup</h1>
							<form action="#">
								<input type="text" placeholder="User Name" required="" />
								<input type="email" placeholder="Email Address" required="" />
								<input type="password" placeholder="Password" required="" />
								<div className="checkbox">
									<input type="checkbox" id="signup_check" />
									<label for="signup_check"><a href="#">I accept all terms and condition</a></label>
								</div>
								<input type="submit" value="Signup" className="submit_btn" id="signup_submit_btn" />
							</form>
						</div>
						<div className="form login">
							<h1 id="login_header">Login</h1>
							<form action="#">
								<input type="email" placeholder="Email Address" required="" />
								<input type="password" placeholder="Password" required="" />
								<a href="#">Forgot Password?</a>
								<input type="submit" value="Login" className="submit_btn" id="login_submit_btn" />
							</form>
						</div>
					</div>
				</div>
				<div id="night_light_btn_area">
					<img src={moon} className="moon_img" />
				</div>
			</div>
            
        </div>
    );
}

export default Header;

// 
			
			