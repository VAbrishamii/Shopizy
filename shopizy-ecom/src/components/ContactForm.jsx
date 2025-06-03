import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  TextArea,
  ErrorText,
  PopupContainer,
  PopupMessage,
} from "../styles/ContactStyles";
import { FormGroup } from "../styles/checkOutStyle";
/**
 * ContactForm component for handling user contact requests.
 * It uses react-hook-form for form handling and validation.
 * Displays a popup message upon successful submission.
 * The form includes fields for full name, subject, email, and message body.
 */
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPopup, setShowPopup] = useState(false);
  const onSubmit = (data) => {
    setShowPopup(true);
    reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      {showPopup && (
        <PopupContainer>
          <PopupMessage>
            {
              "Your request has been received!\nWe will respond within 24 hours."
            }
          </PopupMessage>
        </PopupContainer>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label htmlFor="fullName">Full Name</label>
          <Input
            id="fullName"
            type="text"
            placeholder="Full Name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
          />
          {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="subject">Subject</label>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
          />
          {errors.subject && <ErrorText>{errors.subject.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">email</label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="body">Your Message</label>
          <TextArea
            id="body"
            placeholder="Your message"
            {...register("body", {
              required: "Message is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
          />
          {errors.body && <ErrorText>{errors.body.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Button type="submit">Send Message</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default ContactForm;
