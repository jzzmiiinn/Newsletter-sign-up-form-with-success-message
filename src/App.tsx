import { useState } from "react";
import { Form } from "./components/SignupForm";
import { Success } from "./components/SuccessMessage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (email: string) => {
    setEmail(email);
    setIsSubmitted(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <>
      {isSubmitted ? (
        <Success email={email} onDismiss={handleDismiss} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default App;
