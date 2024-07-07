import React, { useState } from 'react';
import { z } from 'zod';
import FormItem from '../components/FormItem';
import FormSelect from '../components/FormSelect';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
});

export default function GiveAway() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      alert('Form submitted successfully');
    } catch (err) {
      const formattedErrors = err.format();
      setErrors(formattedErrors);
    }
  };
  
  return (
    <div className="flex h-[80vh]">
      <div className="p-12 drop-shadow-xl bg-blue-200 flex flex-col items-center gap-6 w-1/2 max-w-[800px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex gap-6">
          <FormItem
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName?._errors[0]}
            />
            <FormItem
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName?._errors[0]}
            />
          </div>
          <div className="flex gap-6">
            <FormItem
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber?._errors[0]}
            />
            <FormItem
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address?._errors[0]}
            />
          </div>
          <div className="flex gap-6">
            <FormItem
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city?._errors[0]}
            />
            <FormSelect
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={errors.country?._errors[0]}
            />
          </div>
          <button type="submit" className="p-2 bg-blue-300 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src="path-to-your-image.jpg" alt="Giveaway Image" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}