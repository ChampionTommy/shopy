'use client';

import { ProductDataTypes } from '@types';
import { EmptyImgCard } from 'public/images';
import { ChangeEvent, useState } from 'react';
import { useCreateProductMutation } from 'resources/product/product.api';

export default function CreateProduct() {
  const [addProduct, response] = useCreateProductMutation();
  const [productData, setProductData] = useState<ProductDataTypes>({
    imageUrl: '',
    title: '',
    price: '',
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const imageUrl = event.target?.result as string;
      setProductData((prevState) => ({
        ...prevState,
        imageUrl,
      }));
    };
    reader.readAsDataURL(file);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setProductData((prevState) => ({
      ...prevState,
      title,
    }));
  };
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    setProductData((prevState) => ({
      ...prevState,
      price,
    }));
  };
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, imageUrl, price } = e.target.elements;
    const formData = {
      title: title.value,
      price: Number(price.value),
      categoryId: 1,
      description: "Nu tut kakoe-to nazvanie dolzno bit' :)",
      images: [imageUrl.value],
    };
    addProduct(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  return (
    <form className="collections__create" onSubmit={onSubmit}>
      <div>
        <h1>Create new product</h1>
      </div>
      <div className="collections__upload">
        <div className="collections__upload_image">
          {productData.imageUrl === '' ? <EmptyImgCard /> : (
            <img
              src={productData.imageUrl}
              className="collections__upload_image_icon"
              alt="upload_productImage"
            />
          )}
        </div>
        <label className="button button__default" htmlFor="imageUrl">
          Upload Photo
          <input
            id="imageUrl"
            className="none"
            type="file"
            name="imageUrl"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <div className="input__block collections__input">
        <label htmlFor="title">
          <h2>Title of the product</h2>
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="form__input input__default"
          placeholder="Enter title of the product..."
          value={productData.title || ''}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input__block collections__input">
        <label htmlFor="price">
          <h2>Price</h2>
        </label>
        <input
          id="price"
          type="number"
          name="price"
          className="form__input input__default"
          placeholder="Enter price of the product..."
          value={productData.price}
          onChange={handlePriceChange}
        />
      </div>
      <button className="button button__default" type="submit">
        Upload product
      </button>
    </form>
  );
}
