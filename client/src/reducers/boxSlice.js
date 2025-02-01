import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
    name: "transaction",
    initialState: {
        boxs: [{
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
        expenseTotal: 0,
        boxSelected: null
    },
    reducers: {
        getBoxById: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.boxs.length) {
                state.boxSelected = state.boxs[index];
            } else {
                state.boxSelected = null;
            }
        }
    }
});

export const { getBoxById } = boxSlice.actions;

export default boxSlice.reducer;