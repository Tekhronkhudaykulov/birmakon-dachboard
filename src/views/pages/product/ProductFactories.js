import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import "../../../assets/scss/card.scss";
import { AiOutlineDelete, AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { subCategory } from "../../../redux/action/Product/SubCategoryIDAction";
import { filterCategory } from "../../../redux/action/Product/FillterCategoryAction";
import { useSelector } from "react-redux";
import FilterSwitch from "./FilterSwitch";
import { SelectApi, Select } from "../../components/select";
import InputBottom from "../../components/InputBottom";
import {
  brands,
  currencyValue,
} from "../../../redux/action/Product/ProductBrandsAction";
import { addProduct } from "../../../redux/action/Product/CreateNewProductAction";
import { productColor } from "../../../redux/action/Product/ProductColorAction";
import { units } from "../../../redux/action/Product/ProductBrandsAction";
import ProductColorCheckbox from "./ProductColorCheckbox";
import ButtonLoadingComponent from "../../elements/loading";
import ImgInput from "./ImgInput";
import { useHistory } from "react-router-dom";
import { renameProduct } from "../../../redux/action/Product/RenameProductAction";

const ProductFactories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(brands());
    dispatch(productColor());
    dispatch(units());
    dispatch(currencyValue());
  }, []);

  const { brandList, unit, currency, loading, productColors, subCategoryList } =
    useSelector((state) => ({
      brandList: state.brands.brandsList,
      unit: state.brands.unit,
      currency: state.brands.currency,
      loading: state.newProduct.loading,
      productColors: state.color.colors,
      subCategoryList: state.subCategory.subCategoryList,
    }));

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const payload = {
      ...data,
      category_id,
      brand_id,
      filters,
      unit_id,
      galleryPhoto: images.map((item) => item.originFileObj),
      photo,
      currency_id,
      colors,
      properties_data,
    };
    dispatch(addProduct(payload));
    // history.push("/product");
    console.log(payload);
  };

  const [modal, setModal] = useState(false);

  const categoryItem = useSelector(
    (state) => state.categoryProduct.productCategory
  );

  const [category_id, setCategory_id] = useState(1);
  const [brand_id, setBrand_id] = useState(1);
  const [filters, setFilter] = useState([]);
  console.log(filters);
  const [unit_id, setUnitId] = useState(1);
  const [currency_id, setCurrency_id] = useState(1);
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [value, setValue] = useState([]);
  const [photo, setPhoto] = useState("");
  const [properties_data, setProperties_data] = useState({
    key_name: [],
    value_name: [],
  });

  const filterCategoryList = useSelector(
    (state) => state.fillter.fillterCategory
  );

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
  const [priceold2, setPriceOld2] = useState();
  const [priceold3, setPriceold3] = useState();
  const [persent2, setPersent2] = useState();
  const [persent3, setPersent3] = useState();
  const [first, setFirst] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [priceTwo, setPriceTwo] = useState();
  const [persentTwo, setPersetTwo] = useState();

  const result = priceold - (priceold / 100) * persent;
  const result2 = 100 - priceold2 / (priceold / 100);
  const result3 = 100 - priceold3 / (priceold / 100);

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  return (
    <div className="all-product-factories">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header-input">
          <Input
            inputName="Наименованиe(ru)"
            inputPlaceholder="Наименование товара(ru)"
            inputType="text"
            props={register("name_ru")}
          />
          <Input
            inputName="Наименованиe(uz)"
            inputPlaceholder="Наименование товара(en)"
            inputType="text"
            props={register("name_uz")}
          />
          <Input
            inputName="Наименованиe(en)"
            inputPlaceholder="Наименование товара(en)"
            inputType="text"
            props={register("name_en")}
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
            props={register("price")}
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
            props={register("price")}
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
            onChange={(e) => setPriceOld2(e.target.value)}
            counter={priceold2}
          />
          <Input
            inputType="number"
            inputPlaceholder="Опт мал кол-во:"
            inputName="Опт мал кол-во:"
            props={register("discount_small_count")}
            onChange={(e) => setTwo(e.target.value)}
            counter={two}
          />
          <Input
            inputType="number"
            inputPlaceholder="Скидка (%):"
            inputName="Скидка (%):"
            props={register("discount_small_count")}
            onChange={(e) => setPersent2(e.target.value)}
            counter={result2}
          />
        </div>
        <p className="global-p">Цена (оптом):</p>
        <div className="header-input">
          <Input
            inputType="number"
            inputPlaceholder="Цена (оптом):"
            inputName="Цена (оптом):"
            props={register("price_opt")}
            onChange={(e) => setPriceold3(e.target.value)}
            counter={priceold3}
          />
          <Input
            inputType="number"
            inputPlaceholder="Опт кол-во:"
            inputName="Опт кол-во:"
            // props={register("discount_big_count")}
            // onChange={(e) => setThree(e.target.value)}
            // counter={three}
          />
          <Input
            inputType="number"
            inputPlaceholder="Скидка (%):"
            inputName="Скидка (%):"
            props={register("discount_big_count")}
            onChange={(e) => setPersent3(e.target.value)}
            counter={result3}
          />
        </div>
        <p className="global-p">Упаковочные габариты</p>
        <div className="header-input">
          <Input
            inputType="number"
            inputPlaceholder="Вес (кг):"
            inputName="Вес (кг):"
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
        <div className="header-input">
          <SelectApi
            selectOptionName="Выбрать цвет"
            category={productColors}
            selectName="Цвет"
            onChange={(e) => setColors([...colors, e.target.value])}
          />
          <Input
            inputName="Количество на складе"
            inputPlaceholder="Количество на складе"
            inputType="text"
            props={register("amount")}
          />
        </div>
        <div className="asad_color">
          <div
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
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                // border: "1px solid black",
                marginLeft: "30px",
              }}
              src=""
              id="img_file"
              alt=""
            />
          </div>
        </div>
        <p className="global-p">Галерия</p>
        <div className="factory-item-img">
          <ImgInput setImages={setImages} images={images} />
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
          <Input inputType="text" inputPlaceholder="AR/VR" inputName="VR:" />
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
              onChange={(e) =>
                setProperties_data((prevState) => ({
                  ...prevState,
                  key_name: [e.target.value],
                }))
              }
            />
            <InputBottom
              inputPlaceholder="Введите название свойства"
              inputType="text"
              onChange={(e) =>
                setProperties_data((prevState) => ({
                  ...prevState,
                  value_name: [e.target.value],
                }))
              }
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
              width: "200px",
              height: "70px",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            {loading ? <ButtonLoadingComponent /> : "Добавить товар"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFactories;
