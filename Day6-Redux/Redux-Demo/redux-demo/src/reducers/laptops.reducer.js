import { initialLaptopState } from '../state/laptop.state';
export const laptopReducer = ( state = initialLaptopState, action ) => {
    switch (action.type) {
        case "PURCHASE_LAPTOP":
            return{
                ...state, // copy of state
                noOfLaptops: state.noOfLaptops - 1,// updating
                customerArray: [...state.customerArray, action.customerId]// adding 
            }
        case "RETURN_LAPTOP":
            return{
                ...state,
                noOfLaptops: state.noOfLaptops + 1,
                // customerArray: state.customerArray.pop()
                customerArray : state.customerArray.filter(customerId => customerId !== action.customerId)
            }
        default:
            return state;
    }
}
