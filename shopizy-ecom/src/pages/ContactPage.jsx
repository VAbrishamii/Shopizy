import ContactForm from "../components/ContactForm";
import { ContactContainer } from "../styles/ContactStyles";
/**
 * @returns ContactPage component that renders a contact form for user inquiries.
 * It imports and uses the ContactForm component to handle user input.

 */
const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
