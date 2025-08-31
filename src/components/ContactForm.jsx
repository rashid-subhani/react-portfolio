import { useForm } from "react-hook-form";

export default function ContactForm(){
  const { register, handleSubmit, formState:{errors, isSubmitSuccessful}, reset } = useForm();

  const onSubmit = (data) => {
    // In real app, POST to your API or use EmailJS / Formspree.
    console.log("Contact submission:", data);
    reset();
    alert("Thanks! I will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card" style={{display:"grid",gap:"1rem"}}>
      <h2 style={{margin:0}}>Get in touch</h2>

      <div className="row">
        <div>
          <label>Name</label>
          <input {...register("name",{required:true,minLength:2})} placeholder="Your name"/>
          {errors.name && <small style={{color:"#f87171"}}>Please enter your name.</small>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email",{required:true, pattern:/^\S+@\S+$/i})} placeholder="you@example.com"/>
          {errors.email && <small style={{color:"#f87171"}}>Valid email required.</small>}
        </div>
      </div>

      <div>
        <label>Message</label>
        <textarea rows="5" {...register("message",{required:true,minLength:10})} placeholder="How can I help?"/>
        {errors.message && <small style={{color:"#f87171"}}>Please add a message (min 10 chars).</small>}
      </div>

      <button className="btn brand" type="submit">Send Message</button>
      {isSubmitSuccessful && <span className="badge">Message sent ✔</span>}
    </form>
  );
}
