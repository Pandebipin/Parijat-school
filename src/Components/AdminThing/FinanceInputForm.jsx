import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../Store/financeSlice"; // Adjust the import path as necessary
import "../../App.css";
function FinanceInputForm() {
  const [year, setYear] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        year,
        income: parseFloat(income),
        expenses: parseFloat(expenses),
      }),
      setExpenses(""),
      setIncome(""),
      setYear("")
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mt-12 mx-auto p-6 text-2xl font-bold mb-6 text-center"
    >
      <h2 className="text-xl font-bold mb-6 text-center">
        Add Income and Expenses Data
      </h2>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="year">
          Year:
        </label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="income">
          Income:
        </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="expenses">
          Expenses:
        </label>
        <input
          type="number"
          id="expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default FinanceInputForm;
