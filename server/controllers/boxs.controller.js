const boxService = require("../services/boxs.service");

function healthCheck(req, res, next) {
    console.log(req.user);
    return res.status(201).json({
        isSuccess: true,
        message: "Server is ok",
        data: null,
    });
}

async function createBox(req, res, next) {
    try {
        const { year, month } = req.body;

        if (typeof year !== "number" || typeof month !== "number") {
            return res.status(400).json({
                isSuccess: false,
                message: "Year and Month should be number",
                data: null
            });
        }

        if (month < 1 || month > 12) return res.status(400).json({
            isSuccess: false,
            message: "Month should be between 1 and 12",
            data: null
        });

        if (year < 2024 || year > 9999) return res.status(400).json({
            isSuccess: false,
            message: "Year should be between 2024 and 9999",
            data: null
        });

        const boxId = await boxService.createBox(req.user.userId, year, month);
    
        return res.status(201).json({
            isSuccess: true,
            message: "Created",
            data: boxId
        })
    } catch (err) {
        return res.status(500).json({
            isSuccess: false,
            message: err.message,
            data: null
        })
    }
}

async function createItems(req, res, next) {
    try {
        const { incomes, expenses } = req.body;
        const boxId = Number(req.params.boxId);
        console.log(boxId);

        if (!Array.isArray(incomes) || !Array.isArray(expenses)) return res.status(400).json({
            isSuccess: true,
            message: "Incomes and Expense should be array",
            data: null
        });

        let isInvalidType = false;
        for (let incomeItem of incomes) {
            if (typeof incomeItem.title !== "string" || typeof incomeItem.amount !== "number") {
                isInvalidType = true;
                break;
            }
        }

        if (!isInvalidType) {
            for (let expenseItem of expenses) {
                if (typeof expenseItem.title !== "string" || typeof expenseItem.amount !== "number") {
                    isInvalidType = true;
                    break;
                }
            }
        }

        if (isInvalidType) return res.status(400).json({
            isSuccess: true,
            message: "Type of object incomes or expense is invalid (should be {title: string, amount: number})",
            data: null
        });

        const isOwner = await boxService.isOwnerBox(Number(req.user.userId), boxId);
        if (!isOwner) return res.status(400).json({
            isSuccess: false,
            message: "No permission",
            data: null
        });

        for (let incomeItem of incomes) {
            await boxService.addIncomeItem(boxId, incomeItem.title, incomeItem.amount);
        }

        for (let expenseItem of expenses) {
            await boxService.addExpenseItem(boxId, expenseItem.title, expenseItem.amount);
        }

        return res.status(201).json({
            isSuccess: true,
            message: "Created",
            data: isInvalidType
        })
    } catch (err) {
        return res.status(500).json({
            isSuccess: false,
            message: err.message,
            data: null
        });
    }
}

module.exports = {
    healthCheck,
    createBox,
    createItems
}