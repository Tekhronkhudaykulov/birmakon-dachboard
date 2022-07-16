import React, { useState } from "react";
import "../../../assets/scss/settings.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renameProfile } from "../../../redux/action/Profil/RenameProfileActions";
import LoadingForCreateProduct from "../../elements/loadingForCreateProduct";
import { profileClient } from "../../../redux/action/Auth/ProfileClientAction";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UserInformation = () => {
  const profile = useSelector((state) => state.profileClient.profileClient);
  const loadingProfile = useSelector((state) => state.profileClient.loading);
  const regions = useSelector((state) => state.categoryRegion.region);

  const { loading } = useSelector((state) => state.renameProfile);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (profile) {
      Object.entries(profile).map((item) => ({
        [item[0]]: item[1],
      }));
      reset(profile);
    }
  }, [profile]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      photo,
    };
    dispatch(renameProfile(payload));
  };

  useEffect(() => {
    dispatch(profileClient());
  }, []);

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
    <div className="wrapper">
      {loadingProfile ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="title user__title">{profile.name}</div>
          <span className="change__user">доступ к редактирование</span>
          <ul>
            <li className="isactive">Мои Данный</li>
            <li>
              <Link to="/user-setting">Данный продавца</Link>
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
              src={`https://birmakon.loko.uz/${profile?.photo}`}
              alt="not found"
            />
            <img
              src=""
              style={{ width: "150px", height: "150px", marginLeft: "30px" }}
              id="img_file"
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <div className="input">
                <div className="input__title">Контактное лицо </div>
                <input type="text" />
              </div>
              <div className="input">
                <div className="input__title">Телефон</div>
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                  })}
                />
                {errors.phone && (
                  <span style={{ color: "red" }}>Заполните поля !</span>
                )}
              </div>
              <div className="input">
                <div className="input__title">Емаил</div>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="mirdesign1er@gmail.com"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Заполните поля !</span>
                )}
              </div>
              <div className="input">
                <div className="input__title">Регион</div>
                <select>
                  {regions.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input">
                <div className="input__title">Адрес</div>
                <input type="text" placeholder="Махмуда тараби 23..." />
              </div>
              <div className="input">
                <div className="input__title">Наименование организации</div>
                <input
                  type="text"
                  placeholder="Мироншох Насимов"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>Заполните поля !</span>
                )}
              </div>
            </div>
            <div className="data__title">Данные для входа</div>
            <div className="inputs tigr">
              <div className="input" id="input">
                <div className="input__title">Логин</div>
                <input type="text" placeholder="Мироншох020" />
              </div>
              <div className="input">
                <div className="input__title">Новый пароль</div>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>Заполните поля !</span>
                )}
              </div>
            </div>
            <div className="save-block">
              <button className="save" type="submit">
                {loading ? <LoadingForCreateProduct /> : "Сохранить"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UserInformation;
