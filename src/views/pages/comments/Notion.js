import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../../assets/scss/_notion.scss";
import { reviews } from "../../../redux/action/Comments/CommentAction";

const Notion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviews( id ));
  }, []);

  const { reviewsList } = useSelector((state) => state.reviews);

  return (
    <div className="wrapper">
      <div
        className="title"
        style={{ fontSize: "30px", fontWeight: "600", color: "#023047" }}
      >
        Отзывы
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor , Lorem ipsumdolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
      </p>
      <div className="flex">
        {/* <form>
          <input type="search" placeholder="Поиск по ID" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3248 12.8987L19.7048 18.2787C19.8939 18.468 20 18.7246 20 18.9921C19.9999 19.2596 19.8935 19.5161 19.7043 19.7052C19.515 19.8943 19.2584 20.0005 18.9909 20.0004C18.7234 20.0003 18.4669 19.894 18.2778 19.7047L12.8978 14.3247C11.2895 15.5704 9.26705 16.1566 7.24189 15.9641C5.21674 15.7716 3.341 14.8148 1.99625 13.2884C0.6515 11.7619 -0.0612416 9.78056 0.00301976 7.74729C0.0672812 5.71402 0.903718 3.7816 2.34217 2.34315C3.78063 0.904695 5.71305 0.0682577 7.74631 0.00399633C9.77958 -0.0602651 11.761 0.652477 13.2874 1.99723C14.8138 3.34198 15.7706 5.21772 15.9631 7.24287C16.1556 9.26802 15.5694 11.2905 14.3238 12.8987H14.3248ZM7.99977 13.9997C9.59107 13.9997 11.1172 13.3676 12.2424 12.2424C13.3676 11.1172 13.9998 9.59104 13.9998 7.99974C13.9998 6.40845 13.3676 4.88232 12.2424 3.7571C11.1172 2.63189 9.59107 1.99974 7.99977 1.99974C6.40847 1.99974 4.88235 2.63189 3.75713 3.7571C2.63191 4.88232 1.99977 6.40845 1.99977 7.99974C1.99977 9.59104 2.63191 11.1172 3.75713 12.2424C4.88235 13.3676 6.40847 13.9997 7.99977 13.9997Z"
              fill="#999999"
            />
          </svg>
        </form> */}
        <div className="excel">Выгрузить в Excel</div>
      </div>
      <div className="comment">
        <div className="user__rating">
          <div className="name__user">Турсунов Асрор</div>
          <div className="rating">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#B4B4B4"
              />
            </svg>
            <span>!</span>
          </div>
        </div>
        <div className="user__comment">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </div>
        <div className="action">
          <span className="date">30.04.2021</span>
          <div className="id">ID: 0001</div>
        </div>
      </div>
      <div className="comment">
        <div className="user__rating">
          <div className="name__user">Ахмад Собиров</div>
          <div className="rating">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#B4B4B4"
              />
            </svg>
            <span>!</span>
          </div>
        </div>
        <div className="user__comment">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </div>
        <div className="action">
          <span className="date">30.04.2021</span>
          <div className="id">ID: 0001</div>
        </div>
      </div>
      <div className="comment">
        <div className="user__rating">
          <div className="name__user">Улугбек Мустаков</div>
          <div className="rating">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#EE4927"
              />
            </svg>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7233 0.348938L9.69427 5.05475L14.7788 5.47507L10.9124 8.80375L12.0839 13.7693L7.7233 11.1208L3.36275 13.7693L4.53421 8.80375L0.66778 5.47507L5.75233 5.05475L7.7233 0.348938Z"
                fill="#B4B4B4"
              />
            </svg>
            <span>!</span>
          </div>
        </div>
        <div className="user__comment">
          Lorem Ipsum is simply dummy text of the printing
        </div>
        <div className="action">
          <span className="date">30.04.2021</span>
          <div className="id">ID: 0001</div>
        </div>
      </div>
      <div className="comment__link">
        <a href="#">Показать больше комментариев</a>
      </div>
    </div>
  );
};

export default Notion;
