import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in all fields.");
      return;
    }

    const newContact = {
      id: Date.now(),
      ...form,
    };
    setData((prev) => [...prev, newContact]);

    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-5">
        {data.map((u) => (
          <div key={u.id} className="bg-neutral-900 p-3 rounded-lg">
            <h3 className="text-xl">{u.name}</h3>
            <p>{u.email}</p>
            <small>{u.phone}</small>
          </div>
        ))}
      </div>

      {/* form */}
      <div className="flex flex-col max-w-xl mx-auto gap-5 bg-zinc-900 p-4 rounded-lg text-center">
        <h2 className="text-2xl">Contact Page</h2>

        <form className="flex flex-col gap-4" onSubmit={formSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="enter name here"
            className="border border-gray-700/20 px-4 py-2 rounded-md outline-0 focus:ring-0 focus:border-white/50"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="enter email here"
            className="border border-gray-700/20 px-4 py-2 rounded-md outline-0 focus:ring-0 focus:border-white/50"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="enter phone here"
            className="border border-gray-700/20 px-4 py-2 rounded-sm"
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-sm bg-black text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
