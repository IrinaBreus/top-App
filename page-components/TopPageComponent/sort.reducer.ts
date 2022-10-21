import { SortEnum } from "../../components/Sort/Sort.props";
import { ProductModel } from '../../interfaces/product.interface';

export type SortAction = {type: SortEnum} | {type: SortEnum.Price};

export interface SortReduceState {
    sort: SortEnum;
    products: ProductModel[];
}

export const sortReducer = (state: SortReduceState, action: SortAction): SortReduceState => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        default:
            throw new Error('Неверный параметр сортировки');
    }
};