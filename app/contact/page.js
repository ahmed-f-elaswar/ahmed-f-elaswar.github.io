import ContactForm from '@/components/ContactForm';
import QuoteGenerator from '@/components/QuoteGenerator';

export const metadata = {
  title: 'Contact | Ahmed Farid Elaswar',
};

export default function ContactPage() {
  return (
    <>
      <section className="card reveal">
        <h2>Contact Information</h2>
        <ul className="contact-list">
          <li>
            <span>Phone</span>
            <a href="tel:+201033109590">+20 103 310 9590</a>
          </li>
          <li>
            <span>Email</span>
            <a href="mailto:ahmed-farid@aucegypt.edu">ahmed-farid@aucegypt.edu</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href="https://linkedin.com/in/ahmed-f-elaswar" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ahmed-f-elaswar
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href="https://github.com/ahmed-f-elaswar" target="_blank" rel="noopener noreferrer">
              github.com/ahmed-f-elaswar
            </a>
          </li>
        </ul>
      </section>

      <section className="card reveal delay-1">
        <h2>Send Me a Message</h2>
        <ContactForm />
      </section>

      <section className="card reveal delay-2">
        <QuoteGenerator />
      </section>
    </>
  );
}
