import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    desc: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/products/add",
        formValue
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitBtn}>
        <input
          type="text"
          value={formValue.name}
          name="name"
          onChange={onHandleChange}
        />
        <input
          type="text"
          value={formValue.price}
          name="price"
          onChange={onHandleChange}
        />
        <input
          type="text"
          value={formValue.desc}
          name="desc"
          onChange={onHandleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductsForm;
