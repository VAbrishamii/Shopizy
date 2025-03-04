import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Input, Button, TextArea, ErrorText, PopupContainer, PopupMessage } from "../styles/ContactStyles";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPopup, setShowPopup] = useState(false);
    const onSubmit = (data) => {
        setShowPopup(true);
        reset();
        console.log(data);

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
    <>
        {showPopup && (
            <PopupContainer>
              <PopupMessage>
              {"Your request has been received!\nWe will respond within 24 hours."}
              </PopupMessage>
            </PopupContainer>
          )}
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Full Name" {...register("fullName", { required: "Full name is required", minLength: { value: 3, message: "Must be at least 3 characters" } })} />
        {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
  
        <Input type="text" placeholder="Subject" {...register("subject", { required: "Subject is required", minLength: { value: 3, message: "Must be at least 3 characters" } })} />
        {errors.subject && <ErrorText>{errors.subject.message}</ErrorText>}
  
        <Input type="email" placeholder="Email" {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
  
        <TextArea placeholder="Your message" {...register("body", { required: "Message is required", minLength: { value: 3, message: "Must be at least 3 characters" } })} />
        {errors.body && <ErrorText>{errors.body.message}</ErrorText>}
  
        <Button type="submit">Send Message</Button>
      </Form>
    </>
    );
}

export default ContactForm;