'use client';

import { ProductDataTypes } from '@types';
import { EmptyImgCard } from 'public/images';
import { ChangeEvent, useState } from 'react';

export default function CreateProduct() {
  const [productData, setProductData] = useState<ProductDataTypes>({
    title: null,
    imageUrl: null,
    count: null,
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    setProductData((prevState) => ({
      ...prevState,
      title,
    }));
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const imageUrl = e.target?.result as string;
      setProductData((prevState) => ({
        ...prevState,
        imageUrl,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="collections__create">
      <div>
        <h1>Create new product</h1>
      </div>
      <div className="collections__upload">
        <div className="collections__upload_image">
          {productData.imageUrl === null
            ? <EmptyImgCard />
            : <img src={productData.imageUrl} className="collections__upload_image_icon" alt="upload_productImage" />}
        </div>

        <label className="button button__default">
          Upload Photo
          <input
            className="none"
            type="file"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <div className="input__block collections__input">
        <label htmlFor="title">
          <h2>Title of the product</h2>
        </label>
        <input
          className="form__input input__default"
          placeholder="Enter title of the product..."
          type="text"
          name="title"
        />
      </div>
      <div className="input__block collections__input">
        <label htmlFor="price">
          <h2>Price</h2>
        </label>
        <input
          className="form__input input__default"
          placeholder="Enter price of the product..."
          type="text"
          name="price"
        />
      </div>
      <button className="button button__default" type="submit">Upload product</button>
    </div>
  );
}
