"use client";

import { useState } from "react";
import { validateContactPayload } from "@/lib/contact";

const initialValues = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  monthlyFileVolume: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validation = validateContactPayload(values);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatus("error");
      setMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        setErrors(payload.errors || {});
        setStatus("error");
        setMessage(payload.message || "We could not send your message right now.");
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setMessage(payload.message || "Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage("We could not send your message right now. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <FormField
          label="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        <FormField
          label="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
        <FormField
          label="Company"
          name="company"
          value={values.company}
          onChange={handleChange}
          error={errors.company}
        />
        <FormField
          label="Role"
          name="role"
          value={values.role}
          onChange={handleChange}
          error={errors.role}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormField
          label="Monthly file volume"
          name="monthlyFileVolume"
          value={values.monthlyFileVolume}
          onChange={handleChange}
          error={errors.monthlyFileVolume}
        />
      </div>

      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={values.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </div>

      <div className="form-actions">
        <button className="button-primary submit-button" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Schedule a Discovery Call"}
        </button>
        <p className="form-note">We typically respond within 1 business day.</p>
      </div>

      {message ? (
        <div className={`form-feedback form-feedback-${status === "success" ? "success" : "error"}`}>
          {message}
        </div>
      ) : null}
    </form>
  );
}

function FormField({ label, name, type = "text", value, onChange, error, required = false }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label} {required ? <span>*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}
