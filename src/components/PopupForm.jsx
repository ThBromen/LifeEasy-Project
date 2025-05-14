import React, { useState } from "react";

const PopupForm = ({ onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    subcategory: "",
    account: "",
    date: "",
    transactionType: "",
    description: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{type === "transaction" ? "Add Transaction" : "Add Category"}</h2>
        <form onSubmit={handleSubmit}>
          {type === "transaction" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Transaction Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subcategory"
                placeholder="Subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="account"
                placeholder="Account"
                value={formData.account}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <select
                name="transactionType"
                value={formData.transactionType}
                onChange={handleChange}
                required
              >
                <option value="">Select Transaction Type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </>
          )}

          {type === "category" && (
            <>
              <input
                type="text"
                name="category"
                placeholder="Category Name"
                value={formData.category}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subcategory"
                placeholder="Subcategory (comma separated)"
                value={formData.subcategory}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
