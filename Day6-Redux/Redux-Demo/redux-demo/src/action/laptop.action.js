export const purchaseLaptop = ( customerId ) => {
    return { type: "PURCHASE_LAPTOP", customerId: customerId}
}

export const  returnLaptop = ( customerId ) => {
    return { type: "RETURN_LAPTOP", customerId: customerId}
}