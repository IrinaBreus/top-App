import { TopLevelCatecory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps {
	firstCategory: TopLevelCatecory,
    page: TopPageModel,
    products: ProductModel[]
}