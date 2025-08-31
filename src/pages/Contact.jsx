import ContactForm from "../components/ContactForm.jsx";

export default function Contact(){
  return (
    <div className="grid" style={{gap:"1rem"}}>
      <section className="card">
        <h1 style={{margin:0}}>Contact</h1>
        <p style={{color:"var(--muted)"}}>
          Have a question or a project in mind? Send me a message and I’ll get back to you.
        </p>
      </section>
      <ContactForm/>
    </div>
  );
}
