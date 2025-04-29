import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form submited:", formData);
    alert("sent!");
    setFormData({ first_name: "", last_name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="h-screen max-w-screen-sm mx-auto px-4 my-16 flex flex-col gap-8">
        <p className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black w-fit">Contact</p>
        <div className="flex flex-col gap-6">
          <p className="">
            I would love to hear from you. Please fill out the form to get in
            touch with me!
          </p>
          <p>
            You can usually expect a response within one day, but please bear
            with me if it takes a little longer.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label>
              <span>first name</span>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
            <label>
              <span>last name</span>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="input"
              />
            </label>
          </div>
          <label>
            <span>your email address</span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </label>
          <label className="flex flex-col">
            <span>comment or message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea min-h-32 resize-none"
            ></textarea>
          </label>

          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
