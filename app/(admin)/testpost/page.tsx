"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define a type for the form data state
interface FormData {
  name: string;
  price: string;
  description: string;
  categories: string;
  images: string | null;
  quantity: string;
  salePrice: string;
  specification: string;
}

// A simple form component to add a new product
const AddProduct: React.FC = () => {
  // State to manage form input values
  const [formData, setFormData] = useState<Record<string, any>>({
    name: '',
    price: '',
    description: '',
    categories: '',
    images: null,
    quantity: '',
    salePrice: '',
    specification: '',
  });
  const [data, setData] = useState()

  // State to manage feedback messages
  const [message, setMessage] = useState<string>('');

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle changes in input fields
  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement) {
      if (name === 'images' && e.target.files) {
        try {
          const base64Image = await convertToBase64(e.target.files[0]);
          setFormData({ ...formData, images: base64Image });
        } catch (error) {
          console.error('Error converting file to base64:', error);
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else if (e.target instanceof HTMLTextAreaElement) {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    setFormData(data)
    console.log("data", formData);

    // Add your form submission logic here
  };


  return (
    <div className='flex flex-col gap-2'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="categories" placeholder="Categories" value={formData.categories} onChange={handleChange} />
        <input type="file" name="images" onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        <input type="number" name="salePrice" placeholder="Sale Price" value={formData.salePrice} onChange={handleChange} />
        <textarea name="specification" placeholder="Specification" value={formData.specification} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;
