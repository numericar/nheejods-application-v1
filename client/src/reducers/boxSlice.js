import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
    name: "transaction",
    initialState: {
        boxItems: [{
            boxId: 1,
            month: "มกราคม",
            remaining: 20000,
            incomeSummary: 30000,
            expensesSummary: 10000,
            rickLevel: 2,
            expensesPercen: 30
        },{
            boxId: 2,
            month: "กุมภาพันธ์",
            remaining: 20000,
            incomeSummary: 30000,
            expensesSummary: 10000,
            rickLevel: 2,
            expensesPercen: 30
        },{
            boxId: 3,
            month: "มีนาคม",
            remaining: 20000,
            incomeSummary: 30000,
            expensesSummary: 10000,
            rickLevel: 2,
            expensesPercen: 30
        },{
            boxId: 4,
            month: "เมษายน",
            remaining: 20000,
            incomeSummary: 30000,
            expensesSummary: 10000,
            rickLevel: 2,
            expensesPercen: 30
        }],
        incomeTotal: 0,
        expenseTotal: 0
    },
    reducers: {

    }
});

export default boxSlice.reducer;