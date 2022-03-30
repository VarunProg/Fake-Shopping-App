import React, { FormEventHandler, useEffect, useState } from "react";
import { toast } from "react-toastify";

const NewProduct = () => {
  const [catergory, setCatergory] = useState<Array<string>>([]);
  //fetch categories
  const fetchCategories = async () => {
    const res = await fetch("/categories");
    const data = await res.json();
    console.log(data, "data");
    setCatergory(data.items);
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
    const formData = new FormData(formElem);
    const imageFile = formData.get("image") as File;
    if (imageFile.size === 0) {
      toast("Please select Image");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = async (e) => {
      // console.log(e.target?.result);
      const imageUrl = e.target?.result;
      if (!imageUrl) {
        return toast("failed to convert image");
      }
      formData.set("image", imageUrl.toString());
      const postData = await fetch("/add", { method: "POST", body: formData });
      formElem.reset();
      toast("Data Submitted");
    };

    // console.log(data, "form DATA"); //creates form data object
    // console.log(data.getAll("productName"));

    // const postData = await fetch("/add", { method: "POST", body: data });
  };

  return (
    <div className="form">
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
        <input type="text" name="name" placeholder="Product Name" required />
        <input type="text" name="price" placeholder="Price" required />
        <input type="text" name="rating" placeholder="Rating" required />
        <textarea
          name="description"
          id=""
          cols={30}
          rows={10}
          placeholder="Description"
        />
        <select name="catergory" id="">
          <option value="">Select Product</option>
          {catergory.map((catg) => {
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
