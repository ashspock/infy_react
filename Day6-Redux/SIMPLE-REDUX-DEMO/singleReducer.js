// 1. import redux module here
const redux = require('redux');

// inventory >> mobiles >> noOfMobiles, 
// on purchase >> count reduced by 1
// on return >> count increase by 1

// Define the Action ??
// >> Any event/signal that informs redux store that some changes are required
//  in the states

//  Action >> obj containing 2 things :
//  1. type of action - string value >> uniquely identifies the type of event
//  2. payload - data
//  action = { type: "PURRCHASE_MOBILE", customerId: 1001, customerName:"Jane Doe", model:"Note 10"}

// let purchaseAction = { type: "PURCHASE_MOBILE", customerId: 1001 }
// let purchaseAction2 = { type: "PURCHASE_MOBILE", customerId: 1002 }
// 1 action >> per customer

// to generalize for n customer
// this func. takes some data i.e. id and returns action object >> 
// Action Creators **
let purchaseMobile = ( customerId ) => {
    return { type: "PURCHASE_MOBILE", customerId: customerId}
}

let returnMobile = ( customerId ) => {
    return { type: "RETURN_MOBILE", customerId: customerId}
}
// 3. Reducer Func. >> 
// reducer is a pure func. that helps in modifying the state variable in the store
// reducer func >> 2 para >> 1. state/initial state, 2. action 

let initialMobileState = {
    noOfMobiles : 20,
    customerArray : []
}

let mobileReducer = ( state = initialMobileState, action ) => {
    //write the code here >> PURCHASE MOBILE >> noOfMobile >> -- , customerId >> customer Array
    switch (action.type) {
        case "PURCHASE_MOBILE":
            return{
                ...state, // copy of state
                noOfMobiles: state.noOfMobiles - 1,// updating
                customerArray: [...state.customerArray, action.customerId]// adding 
            }
        // break; >> not needed >> value is being returned already
        
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

// use redux module to create store >> createStore() predefined method 

let store = redux.createStore(mobileReducer); // helps us to create a store
// it needs to know which reducer is going to do changes
console.log("Initial State", store.getState());// gives current state values

// define a code that will show us the updated state whenever an action is dispatched
// subscribe >> it gets invoked whenever state changes
// store.subscribe(callback)

store.subscribe(() => console.log("latest state value", store.getState()))
// this gets invoked after every state change happens

// to dispatch
store.dispatch(purchaseMobile("Sachin"));
store.dispatch(purchaseMobile("Shubham"));
store.dispatch(purchaseMobile("Harsh"));
store.dispatch(purchaseMobile("Priya"));
store.dispatch(purchaseMobile("Chandan"));
store.dispatch(returnMobile("Shubham"));

// define another action "RETURN_MOBILE"
