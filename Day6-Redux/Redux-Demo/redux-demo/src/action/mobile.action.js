// named exports not default
export const purchaseMobile = ( customerId ) => {
    return { type: "PURCHASE_MOBILE", customerId: customerId}
}

export const returnMobile = ( customerId ) => {
    return { type: "RETURN_MOBILE", customerId: customerId}
}
