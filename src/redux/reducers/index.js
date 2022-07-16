import { combineReducers } from "redux";
import user from "./userReducer";
import AuthReducer from "./Auth/AuthReducer";
import OrdersReducer from "./Orders/OrdersReducer";
import ProfilReducer from "./Profil/ProfilReducer";
import RenameProfileReducer from "./Profil/RenameProfileReducer";
import ProductReducer from "./Product/ProductReducer";
import CategoryProductReducer from "./Product/CategoryProductReducer";
import ProfileClientReducer from "./Auth/ProfileClientReducer";
import CategoryRegion from "./Product/CategoryRegionReducer";
import ProductLockReducer from "./Product/ProductLockReducer";
import CreateNewProductReducer from "./Product/CreateNewProductReducer";
import ProductBrandsReducer from "./Product/ProductBrandsReducer";
import SubCategoryIdReducer from "./Product/SubCategoryIdReducer";
import FillterCategoryReducer from "./Product/FillterCategoryReducer";
import RenameProductReducer from "./Product/RenameProductReducer";
import ProductViewReducer from "./Product/ProductViewReducer";
import ProductColorReducer from "./Product/ProductColorReducer";
import CommentReducer from "./Comment/CommentReducer";
import ChatReducer from "./Chat/ChatReducer";

const reducer = combineReducers({
  user: user,
  auth: AuthReducer,
  orders: OrdersReducer,
  profil: ProfilReducer,
  renameProfile: RenameProfileReducer,
  product: ProductReducer,
  categoryProduct: CategoryProductReducer,
  profileClient: ProfileClientReducer,
  categoryRegion: CategoryRegion,
  productLock: ProductLockReducer,
  newProduct: CreateNewProductReducer,
  brands: ProductBrandsReducer,
  subCategory: SubCategoryIdReducer,
  fillter: FillterCategoryReducer,
  editProduct: RenameProductReducer,
  productViewDetail: ProductViewReducer,
  color: ProductColorReducer,
  reviews: CommentReducer,
  chat: ChatReducer,
});

export default reducer;
