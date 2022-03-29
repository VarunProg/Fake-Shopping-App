import React, { FormEventHandler, useEffect, useState } from "react";

const NewProduct = () => {
  const [category, setCategory] = useState<Array<string>>([]);
  //fetch categories
  const fetchCategories = async () => {
    const res = await fetch("/categories");
    const data = await res.json();
    console.log(data, "data");
    setCategory(data.items);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e, "form");
    e.preventDefault();
    const formElem = e.currentTarget;
    //console.log(formElem, "fromElem"); // targeted all elements
    const data = new FormData(formElem);
    // console.log(data, "form DATA"); //creates form data object
    // console.log(data.getAll("productName"));

    const postData = await fetch("/add", { method: "POST", body: data });
    const res = await postData.json();
    console.log(res, "check data if coming or not");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          gap: "10px",
          margin: "10px",
        }}
      >
        <input
          type="text"
          name="productName"
          placeholder="product name"
          required
        />
        <textarea
          name="description"
          id=""
          cols={30}
          rows={10}
          placeholder="description"
        />
        <select name="category" id="">
          <option value="">Select Product</option>
          {category.map((catg) => {
            return (
              <option key={catg} value={catg}>
                {catg}
              </option>
            );
          })}
        </select>
        <input
          type="file"
          name="image"
          id=""
          placeholder="selectImage"
          accept="image/jpeg"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewProduct;
