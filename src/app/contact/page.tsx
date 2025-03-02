"use client";
import Navbar from "@components/Navbar";
import ClickableLogo from "@components/ClickableLogo";

export default function Contact() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const formParams = new URLSearchParams();
  
    formData.forEach((value, key) => {
      formParams.append(key, value as string);
    });
  
    try {
      const response = await fetch("/__form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit form. Please try again.");
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="mt-9 flex justify-center">
        <ClickableLogo />
      </div>
      <div className="mb-9">
        <Navbar />
      </div>

      <form name="contactme" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="feedback" />
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email (optional)" />
      <input name="message" type="text" placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}