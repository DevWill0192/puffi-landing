import { useState } from 'react';
import Swal from 'sweetalert2'

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate emails
    return regex.test(email);
  };

  const validateText = (text: string): boolean => {
    return text.trim().length > 0; // Validate that the text is not empty
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate the corresponding field
    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors({
          ...errors,
          email: 'Por favor, ingresa un correo electrónico válido.',
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { email, ...rest } = errors; // Remove the email error if it's valid
        setErrors(rest);
      }
    }

    if (name === 'text') {
      if (!validateText(value)) {
        setErrors({
          ...errors,
          text: 'Este campo no puede estar vacío.',
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { text, ...rest } = errors; // Remove the text error if it's valid
        setErrors(rest);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      Swal.fire({
        icon: "success",
        title: "¡Suscripción exitosa! Te enterarás de todas las novedades.",
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al suscribirse. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
