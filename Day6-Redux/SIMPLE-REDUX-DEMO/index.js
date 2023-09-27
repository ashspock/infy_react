
const redux = require('redux');

let purchaseMobile = ( customerId ) => {
    return { type: "PURCHASE_MOBILE", customerId: customerId}
}

let returnMobile = ( customerId ) => {
    return { type: "RETURN_MOBILE", customerId: customerId}
}

let initialMobileState = {
    noOfMobiles : 20,
    customerArray : []
}

let mobileReducer = ( state = initialMobileState, action ) => {
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

let initialLaptopState = {
    noOfLaptops : 20,
    customerArray : []
}
let purchaseLaptop = ( customerId ) => {
    return { type: "PURCHASE_LAPTOP", customerId: customerId}
}

let returnLaptop = ( customerId ) => {
    return { type: "RETURN_LAPTOP", customerId: customerId}
}

let laptopReducer = ( state = initialLaptopState, action ) => {
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


// let store = redux.createStore(mobileReducer); // helps us to create a store
// console.log("Initial State", store.getState());// gives current state values

// store.subscribe(() => console.log("latest state value", store.getState()))
// store.dispatch(purchaseMobile("Sachin"));
// store.dispatch(purchaseMobile("Shubham"));
// store.dispatch(purchaseMobile("Harsh"));
// store.dispatch(purchaseMobile("Priya"));
// store.dispatch(purchaseMobile("Chandan"));
// store.dispatch(returnMobile("Shubham"));

let rootReducer = redux.combineReducers({ mobileReducer , laptopReducer });

let store = redux.createStore(rootReducer); // helps us to create a store
console.log("Initial State", store.getState());// gives current state values

store.subscribe(() => console.log("latest state value", store.getState()))

store.dispatch(purchaseLaptop("Sachin"));
store.dispatch(purchaseMobile("Sachin"));
store.dispatch(purchaseMobile("Shubham"));
store.dispatch(purchaseLaptop("Harsh"));
store.dispatch(purchaseMobile("Priya"));
store.dispatch(purchaseMobile("Chandan"));
store.dispatch(purchaseLaptop("Chandan"));
store.dispatch(returnMobile("Shubham"));
store.dispatch(returnLaptop("Harsh"));

// combineReducers >> group multiple reducer func.

