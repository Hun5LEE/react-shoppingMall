import React from "react";
import "../ComponentsCss/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../store/StateProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="header">
      {/* 로고 */}
      <img
        className="header_logo"
        src={process.env.PUBLIC_URL + "./Img/logo.png"}
        onClick={() => navigate("/")}
      />
      {/* 검색창 */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 헤더 네비게이션 */}
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요</span>
          <span className="header_optionLineTwo">로그인하기</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>
        <div
          className="header_optionBasket"
          onClick={() => navigate("/checkout")}
        >
          <ShoppingBasket />
          <span className="header_optionLineTwoheader_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
