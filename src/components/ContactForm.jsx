// components/ContactForm.jsx
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
import { useState } from "react";

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset(); // clear form
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Get in Touch</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <input
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className={styles.contactInput}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          className={styles.contactInput}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <textarea
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className={styles.contactTextarea}
          rows={5}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}

        <button type="submit" className={styles.contactButton}>Send</button>

        {submitted && (
          <p style={{ color: "green", textAlign: "center", marginTop: "16px" }}>
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;

