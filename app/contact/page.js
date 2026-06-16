import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ahmed Farid \u2014 email, phone, LinkedIn, GitHub, and resume.',
  alternates: { canonical: '/contact/' },
};

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'a.f.elaswar@gmail.com';
const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL ||
  'https://aucegypt0-my.sharepoint.com/:b:/g/personal/ahmed-farid_aucegypt_edu/IQBFyu8QUlN0RaR6AK1NvJlHAdH4WDB6iiGBBs_M6l3yOUs?e=VATIea';

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
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
          <li>
            <span>Resume</span>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </li>
        </ul>
      </section>

      <section className="card reveal delay-1">
        <h2>Send Me a Message</h2>
        <ContactForm />
      </section>
    </>
  );
}
