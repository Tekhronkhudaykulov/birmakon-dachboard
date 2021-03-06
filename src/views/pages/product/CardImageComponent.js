import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { deleteProduct } from "../../../redux/action/Product/ProductAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CardImageComponent = ({ product, onClickLock }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const dispatch = useDispatch();
  return (
    <>
      {product.map((item) => (
        <div className="cart__box shadow-xl">
          <div className="cart__image">
            <img
              style={{ height: "100%" }}
              src={`http://birmakon.loko.uz${item.photo}`}
              alt="not found"
            />

            {item.discount && <span className="skidka">{item.discount} %</span>}
            <div
              className="icon-close"
              onClick={() => dispatch(deleteProduct({ id: item.id }))}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292786 0.305288C0.480314 0.117817 0.734622 0.0125017 0.999786 0.0125017C1.26495 0.0125017 1.51926 0.117817 1.70679 0.305288L6.99979 5.59829L12.2928 0.305288C12.385 0.209778 12.4954 0.133596 12.6174 0.0811867C12.7394 0.0287777 12.8706 0.00119157 13.0034 3.77567e-05C13.1362 -0.00111606 13.2678 0.0241857 13.3907 0.0744666C13.5136 0.124747 13.6253 0.199 13.7192 0.292893C13.8131 0.386786 13.8873 0.498438 13.9376 0.621334C13.9879 0.744231 14.0132 0.87591 14.012 1.00869C14.0109 1.14147 13.9833 1.27269 13.9309 1.39469C13.8785 1.5167 13.8023 1.62704 13.7068 1.71929L8.41379 7.01229L13.7068 12.3053C13.8889 12.4939 13.9897 12.7465 13.9875 13.0087C13.9852 13.2709 13.88 13.5217 13.6946 13.7071C13.5092 13.8925 13.2584 13.9977 12.9962 14C12.734 14.0022 12.4814 13.9014 12.2928 13.7193L6.99979 8.42629L1.70679 13.7193C1.51818 13.9014 1.26558 14.0022 1.00339 14C0.741188 13.9977 0.490376 13.8925 0.304968 13.7071C0.11956 13.5217 0.0143909 13.2709 0.0121125 13.0087C0.00983408 12.7465 0.110628 12.4939 0.292786 12.3053L5.58579 7.01229L0.292786 1.71929C0.105315 1.53176 0 1.27745 0 1.01229C0 0.747124 0.105315 0.492816 0.292786 0.305288Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="active-cart">
              <Switch
                {...label}
                defaultChecked={item.status > 1 ? true : false}
                onChange={(e) => {
                  onClickLock(item.id, { lock: e.target.checked });
                }}
              />
            </div>
          </div>
          <div className="cart__info">
            <p>#{item.id}</p>
            <div className="flex justify-between mt-3">
              <a className="cart__cat" href="#">
                {item.category_full}
              </a>
              {item.amount && (
                <a className="cart__brand" href="#">
                  {item.amount} ????
                </a>
              )}
            </div>
            <div className="cart__title">
              <a href="">{item.description} </a>
              <div className="cart__price">
                {item.price && <h5>{item.price} ??????</h5>}
                {item.price_old && <p>{item.price_old} ??????</p>}
              </div>
            </div>
            <div className="cart__add">
              <button>
                <Link to={`/editProfile/` + item.id}>
                  <span>????????????????</span>
                </Link>
              </button>
              <button>
                <Link to={`/comment/notion/` + item.id}>
                  <span>????????????</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardImageComponent;
