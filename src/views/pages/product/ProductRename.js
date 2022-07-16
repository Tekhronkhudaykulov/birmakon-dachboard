import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import "../../../assets/scss/card.scss";
import { AiOutlineDelete, AiOutlinePlusSquare } from "react-icons/ai";
import InputBottom from "../../components/InputBottom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { subCategory } from "../../../redux/action/Product/SubCategoryIDAction";
import { filterCategory } from "../../../redux/action/Product/FillterCategoryAction";
import { useSelector } from "react-redux";
import FilterSwitch from "./FilterSwitch";
import { productDetailView } from "../../../redux/action/Product/ProductViewAction";
import { renameProduct } from "../../../redux/action/Product/RenameProductAction";
import {
  brands,
  currencyValue,
} from "../../../redux/action/Product/ProductBrandsAction";
import { SelectApi, Select } from "../../components/select";
import { productColor } from "../../../redux/action/Product/ProductColorAction";
import { units } from "../../../redux/action/Product/ProductBrandsAction";
import ProductColorCheckbox from "./ProductColorCheckbox";
import ButtonLoadingComponent from "../../elements/loading";
import { useParams } from "react-router-dom";
import ImgInput from "./ImgInput";
import {
  SelectApiDublicate,
  SelectDublicate,
} from "../../components/selectDublicate";

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productViewDetail.productView);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      Object.entries(data).map((item) => ({
        [item[0]]: item[1],
      }));
      reset(data);
    }
  }, [data]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      category_id,
      product_id: id,
      brand_id,
      filter,
      gallery: gallery.map((item) => item.originFileObj),
      unit_id,
      currency_id,
      colors,
      properties_data,
    };
    dispatch(renameProduct(payload));
    // alert("Hozirgi vaqtda texnik nozoslik!");
  };

  useEffect(() => {
    dispatch(productDetailView(id));
    dispatch(brands());
    dispatch(productColor());
    dispatch(units());
    dispatch(currencyValue());
  }, []);

  const brandList = useSelector((state) => state.brands.brandsList);
  const { unit } = useSelector((state) => state.brands);
  const { currency } = useSelector((state) => state.brands);
  const { loading } = useSelector((state) => state.newProduct);
  const productColors = useSelector((state) => state.color.colors);
  const subCategoryList = useSelector(
    (state) => state.subCategory.subCategoryList
  );

  const [modal, setModal] = useState(false);

  const categoryItem = useSelector(
    (state) => state.categoryProduct.productCategory
  );

  const [category_id, setCategory_id] = useState(1);

  const [brand_id, setBrand_id] = useState(1);
  const [filter, setFilter] = useState("");
  const [unit_id, setUnitId] = useState(1);
  const [currency_id, setCurrency_id] = useState(1);
  const [colors, setColors] = useState("");
  const [photo, setPhoto] = useState("");
  const [properties_data, setProperties_data] = useState({
    key_name: [],
    value_name: [],
  });
  const [value, setValue] = useState([]);

  const filterCategoryList = useSelector(
    (state) => state.fillter.fillterCategory
  );

  const [gallery, setGalleryPhoto] = useState([]);
  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });
    fileReader.readAsDataURL(file);
  };

  const handleFilter = (id, value, type) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const [priceold, setOldprice] = useState();
  const [persent, setPersent] = useState();
  const [first, setFirst] = useState();

  const result = (priceold / 100) * first * persent;

  return (
    <div className="all-product-factories">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header-input">
          <Input
            inputName="Наименованиe"
            inputPlaceholder="Наименование товара"
            inputType="text"
            props={register("name_ru")}
          />
          {errors.name_ru && (
            <span style={{ color: "red" }}>Заполните поля !</span>
          )}
          <Select
            category={brandList}
            onChange={(e) => {
              setBrand_id(e.target.value);
            }}
            selectName="Бренды:"
            selectOptionName="Бренды:"
          />
          <Select
            category={unit}
            onChange={(e) => {
              setUnitId(e.target.value);
            }}
            selectName="Ед. измерения:"
            selectOptionName="Ед. измерения:"
          />
          <Select
            category={currency}
            onChange={(e) => {
              setCurrency_id(e.target.value);
            }}
            selectName="Валюта"
            selectOptionName="Валюта"
          />
        </div>
        <p className="global-p">Категория:</p>
        <div className="header-input">
          <SelectApi
            selectName="Категория"
            selectOptionName="Выбрать категорию"
            category={categoryItem}
            onChange={(e) => (
              setCategory_id(e.target.value),
              dispatch(subCategory(e.target.value))
            )}
          />
          <SelectApi
            selectName="Подкатегория"
            selectOptionName="Выбрать подкатегория"
            onChange={(e) => dispatch(filterCategory(e.target.value))}
            category={subCategoryList}
          />
          {filterCategoryList.map((item) => (
            <FilterSwitch input={item} handleFilter={handleFilter} />
          ))}
        </div>
        <p className="global-p">Цены</p>
        <div className="header-input">
          <Input
            // props={register("price")}
            inputType="number"
            inputPlaceholder="Цена"
            inputName="Цена"
            onChange={(e) => setOldprice(e.target.value)}
            counter={priceold}
          />
          <Input
            props={register("product_count")}
            inputType="number"
            inputPlaceholder="За кол-во:"
            inputName="За кол-во:"
            onChange={(e) => setFirst(e.target.value)}
            counter={first}
          />
          <Input
            inputType="number"
            inputPlaceholder="Скидка %:"
            inputName="Скидка %:"
            props={register("discount")}
            onChange={(e) => setPersent(e.target.value)}
            counter={persent}
          />
          <Input
            // props={register("price")}
            inputType="number"
            inputPlaceholder="Цена со скидкой:"
            inputName="Цена со скидкой:"
            counter={result}
          />
        </div>
        <p className="global-p">Цена (малый опт):</p>
        <div className="header-input">
          <Input
            inputType="number"
            inputPlaceholder="Цена (малый опт):"
            inputName="Цена (малый опт):"
            props={register("price_opt_small")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Опт мал кол-во (шт):"
            inputName="Опт мал кол-во (шт):"
            props={register("advertisment_count")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Скидка (%):"
            inputName="Скидка (%):"
            props={register("discount_small_count")}
          />
          <Input
            // props={register("price_old")}
            inputType="number"
            inputPlaceholder="Общая цена:"
            inputName="Общая цена:"
          />
        </div>
        <p className="global-p">Цена (оптом):</p>
        <div className="header-input">
          <Input
            inputType="number"
            inputPlaceholder="Цена (оптом):"
            inputName="Цена (оптом):"
            props={register("price_opt")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Опт кол-во (шт):"
            inputName="Опт кол-во (шт):"
            props={register("news_count")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Скидка (%):"
            inputName="Скидка (%):"
            props={register("discount_big_count")}
          />
          <Input
            // props={register("price_old")}
            inputType="number"
            inputPlaceholder="Общая цена:"
            inputName="Общая цена:"
          />
        </div>
        <p className="global-p">Габариты</p>
        <div className="header-input">
          <Input
            inputType="number"
            inputPlaceholder="Вес (грамм):"
            inputName="Вес (грамм):"
            props={register("weight")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Высота (см.):"
            inputName="Высота (см.):"
            props={register("height")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Ширина (см.):"
            inputName="Ширина (см.):"
            props={register("width")}
          />
          <Input
            inputType="number"
            inputPlaceholder="Длина (см.):"
            inputName="Длина (см.):"
            props={register("length")}
          />
        </div>
        <div className="asad_color">
          <SelectApi
            selectOptionName="Выбрать цвет"
            category={productColors}
            selectName="Цвет"
          />
          {/* <div
            className="img-input"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
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
                onChange={(e) => {
                  convertBase64(
                    e.target.files[0],
                    document.querySelectorAll("#img_file")[0]
                  );
                  setColors((prevState) => ({
                    ...prevState,
                    image: [e.target.files[0]],
                  }));
                  setValue(e.target.files[0]);
                }}
              />
            </div>
            <img
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                border: "1px solid black",
                marginLeft: "30px",
              }}
              src=""
              id="img_file"
              alt=""
            />
          </div> */}
        </div>
        <p className="global-p">Галерия</p>
        <div className="factory-item-img">
          <ImgInput setImages={setGalleryPhoto} images={gallery} />
        </div>

        <div className="deskription-product">
          <p className="global-p">Описание товара</p>
          <textarea
            style={{
              width: "100%",
              height: "200px",
              outline: "none",
              padding: "20px",
            }}
            {...register("description_ru")}
            placeholder="Описание"
          ></textarea>
        </div>
        <div className="vr" style={{ display: "flex", alignItems: "center" }}>
          <Input inputType="text" inputPlaceholder="AR:" inputName="AR:" />
          <Input inputType="text" inputPlaceholder="VR:" inputName="VR:" />
        </div>

        <p className="character" style={{ marginTop: "30px" }}>
          Характеристики
        </p>
        <div className="specifications">
          <InputBottom
            inputPlaceholder="Введите название свойства"
            inputType="text"
            onChange={(e) =>
              setProperties_data((prevState) => ({
                ...prevState,
                key_name: [e.target.value],
              }))
            }
          />
          <InputBottom
            inputPlaceholder="Введите название свойства "
            inputType="text"
            onChange={(e) =>
              setProperties_data((prevState) => ({
                ...prevState,
                value_name: [e.target.value],
              }))
            }
          />
          <div className="icons-factories">
            <AiOutlineDelete
              size={40}
              style={{ marginTop: "17px" }}
              color="red"
              onClick={() => setModal(false)}
            />
            <AiOutlinePlusSquare
              size={40}
              style={{ marginTop: "17px" }}
              color="green"
              onClick={() => setModal(true)}
            />
          </div>
        </div>
        {modal ? (
          <div className="specifications">
            <InputBottom
              inputPlaceholder="Введите название свойства"
              inputType="text"
            />
            <InputBottom
              inputPlaceholder="Введите название свойства"
              inputType="text"
            />
            <div className="icons-factories">
              {modal ? (
                <AiOutlineDelete
                  size={40}
                  style={{ marginTop: "17px" }}
                  color="red"
                  onClick={() => setModal(false)}
                />
              ) : null}
              <AiOutlinePlusSquare
                size={40}
                style={{ marginTop: "17px" }}
                color="green"
                onClick={() => setModal(true)}
              />
            </div>
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              border: "none",
              background: "#131E3D",
              color: "white",
              width: "170px",
              height: "50px",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            {loading ? <ButtonLoadingComponent /> : "Изменить"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
