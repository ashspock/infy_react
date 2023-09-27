import { initialMobileState } from '../state/mobiles.state';


export const mobileReducer = ( state = initialMobileState, action ) => {
    switch (action.type) {
        case "PURCHASE_MOBILE":
            return{
                ...state, // copy of state
                noOfMobiles: state.noOfMobiles - 1,// updating
                customerArray: [...state.customerArray, action.customerId]// adding 
            }
        case "RETURN_MOBILE":
            return{
                ...state,
                noOfMobiles: state.noOfMobiles + 1,
                // customerArray: state.customerArray.pop()
                customerArray : state.customerArray.filter(customerId => customerId !== action.customerId)
            }
        default:
            return state;
    }
}
