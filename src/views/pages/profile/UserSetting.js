import React, { useEffect, useState } from "react";
import {
  CardBlue,
  CardGray,
  CardWhite,
  GridTwo,
  Input,
} from "../../elements/_cards";
import { Link } from "react-router-dom";
import { ButtonBlue } from "../../elements/_buttons";
import "../../../assets/scss/users.scss";
import Warning from "../../../assets/img/alarm (1).png";
import { useForm } from "react-hook-form";
import {
  profil,
  shopInformation,
} from "../../../redux/action/Profil/ProfilAction";
import { useDispatch, useSelector } from "react-redux";

const UserSetting = () => {
  useEffect(() => {
    dispatch(shopInformation());
  }, []);

  const data = useSelector((state) => state.profil.shop);
  console.log({ data });
  const { loading } = useSelector((state) => state.profil);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data.shopSeller) {
      Object.entries(data.shopSeller).map((item) => ({
        [item[0]]: item[1],
      }));
      reset(data.shopSeller);
      console.log(data.shopSeller);
    }
  }, [data.shopSeller]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      photo,
    };
    dispatch(profil(payload));
  };
  const dispatch = useDispatch();

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const [photo, setPhoto] = useState("");
  const [value, setValue] = useState([]);

  return (
    <>
      <div className="wrapper asad">
        <CardWhite>
          <div className="title user__title">Настройка</div>
          <ul>
            <li className="isactive">Данный продавца</li>
            <li>
              <Link to="/user/information">Мои Данный</Link>
            </li>
          </ul>
          <div className="img-input">
            <div className="factory-item-img">
              <label style={{ fontSize: "50px" }} for="file-input">
                +
              </label>
              <input
                multiple
                name="Ads[imageFiles][]"
                onchange="loadImage(event)"
                type="file"
                id="file-input"
                className="img-input"
                style={{ display: "none" }}
                onChange={(e) => {
                  convertBase64(
                    e.target.files[0],
                    document.querySelectorAll("#img_file")[0]
                  );
                  setPhoto(e.target.files[0]);
                  setValue(e.target.files[0]);
                }}
              />
            </div>
            <img
              style={{ width: "150px", height: "150px" }}
              src={`https://birmakon.loko.uz/${data?.photo}`}
              alt="not found"
            />
            <img
              src=""
              style={{ width: "150px", height: "150px", marginLeft: "30px" }}
              id="img_file"
              alt=""
            />
          </div>
          <CardBlue padding="20px" marginTop="20px" textCenter="start">
            <div className="_user_account_warning">
              <img src={Warning} alt="Warning" />
              <div className="_user_account_warning_card_row">
                <h4>Заполниту данный поставшика</h4>
                <p style={{ color: "white" }}>
                  Карточки загружинний без фотографии , не попадут на сайт
                </p>
              </div>
            </div>
          </CardBlue>
          <CardGray
            color="#f5f5f5"
            textAlign="start"
            padding="20px"
            marginTop="20px"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <GridTwo>
                  <div>
                    <label>Наименованиe организации</label>
                    <Input
                      type="text"
                      placeholder="Наименованиe организации"
                      {...register("contact_user", {
                        required: true,
                      })}
                    />
                    {errors.contact_user && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>ИНН </label>
                    <Input
                      type="number"
                      placeholder="N: 155 000"
                      {...register("inn", {
                        required: true,
                      })}
                    />
                    {errors.inn && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Расчётный счёт?</label>
                    <Input
                      type="number"
                      placeholder="155"
                      {...register("account", {
                        required: true,
                      })}
                    />
                    {errors.account && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Банк</label>
                    <Input
                      type="number"
                      placeholder="8600 14** **** **94"
                      {...register("bank", {
                        required: true,
                        maxLength: 16,
                      })}
                    />
                    {errors.bank && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Юридический адрес?</label>
                    <Input
                      type="number"
                      placeholder="Tashkent"
                      {...register("address_legal", {
                        required: true,
                      })}
                    />
                    {errors.address_legal && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Окед</label>
                    <Input
                      type="number"
                      placeholder="**94"
                      {...register("oked", {
                        required: true,
                      })}
                    />
                    {errors.oked && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Оконх</label>
                    <Input
                      type="number"
                      placeholder="**%"
                      {...register("okohx", {
                        required: true,
                      })}
                    />
                    {errors.okohx && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                  <div>
                    <label>Мфо</label>
                    <Input
                      type="text"
                      placeholder="Andrey F"
                      {...register("mfo", {
                        required: true,
                      })}
                    />
                    {errors.mfo && (
                      <span style={{ color: "red" }}>Заполните поля !</span>
                    )}
                  </div>
                </GridTwo>
              )}

              <ButtonBlue type="submit" marginTop="20px">
                Редактировать данный продавца
              </ButtonBlue>
            </form>
          </CardGray>
        </CardWhite>
      </div>
    </>
  );
};

export default UserSetting;
