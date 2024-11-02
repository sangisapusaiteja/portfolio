import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "a710d125-8361-445e-bdcf-82b265efc7c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear the form
      console.log("Success", res);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center text-2xl pl-[60px]">
      <div>
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none">
          &lt;contact&gt;
        </h2>

        <p className=" mb-4 text-sm md:text-xl w-[80%] ">Contact Me!</p>
        <p className=" mb-4 text-sm md:text-xl w-[80%]">
          If you have any questions, please fill out the form, and I’ll respond
          to you soon!
        </p>

        <form onSubmit={onSubmit} className="">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 p-2  w-[80%]  md:w-full text-sm md:text-xl border border-purple-500 rounded bg-transparent   focus:border-purple-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-2  w-[80%]  md:w-full text-sm md:text-xl border border-purple-500 rounded bg-transparent   focus:border-purple-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="mb-4 p-2  w-[80%]  md:w-full text-sm md:text-xl border border-purple-500 rounded bg-transparent   focus:border-purple-500 focus:outline-none"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-[80%] border    md:w-full    text-sm md:text-xl border-purple-500 text-purple-500 px-4 py-2 rounded hover:text-white hover:bg-purple-500 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className="text-green-500 mt-4  text-sm md:text-xl">
            Message sent successfully!
          </p>
        )}

        <h2 className="text-purple-500 text-xl sm:text-2xl font-none ">
          &lt;/ contact&gt;
        </h2>
      </div>
    </div>
  );
};

export default Contact;
