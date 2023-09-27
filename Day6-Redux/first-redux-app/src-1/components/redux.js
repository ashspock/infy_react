import { createStore, combineReducers } from 'redux';
const initialBankState = { accountBalance: 1000 };
// can be present in action.js file
export const debitAction = (amt) => {
    console.log('2. Inside the debitAction');
    console.log('3. going to reducer', {
        type: 'DEBIT',
        amount: amt
    });
    return ({
        type: 'DEBIT',
        amount: amt
      })
    };
export const creditAction = (amt) => {
        console.log('2. Inside the creditAction');
        console.log('3. going to reducer', {
            type: 'CREDIT',
            amount: amt
        });
        return ({
            type: 'CREDIT',
            amount: amt
          })
        };
// can be present in reducers.js file
export const accountReducer = (initialState = initialBankState.accountBalance, action) => {
    console.log("4 .Reducer:: account reducer");
    switch (action.type) {
        case 'DEBIT':
            console.log('5. Case::DEBIT');
            let newDebBal = initialState - action.amount;
            console.log("6. Return Data", newDebBal);
            return newDebBal;
        case 'CREDIT':
            console.log('5. Case::CREDIT');
            let newCredBal = initialState + (-(-action.amount));
            console.log("6. Return Data", newCredBal);
            return newCredBal;
        default:
            return initialState;
    }
};
export const bankReducers = combineReducers({ accountBalance: accountReducer });
// can be present in store.js file
function configureStore() {
    const store = createStore(bankReducers, initialBankState);
    return store;
}
export const bankStore = configureStore();
