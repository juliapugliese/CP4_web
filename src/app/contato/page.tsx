"use client";
import "./styles.css"
import { useState } from "react";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const sendForm = () => {
   console.log(form)
  };

  const changeState = (type: string, value: string) => {
    setForm({
      ...form,
      [type]: value
    })
  };

  return (
    <section className="formulario">
      <h2>Contato</h2>

      <div>
        <FormInput
          label="Nome"
          value={form.name}
          onChange={(event: any) => {
            changeState("name", event.target.value);
          }}
        />
        <FormInput
          label="Email"
          value={form.email}
          onChange={(event: any) => {
            changeState("email", event.target.value);
          }}
        />
        <FormInput
          label="Telefone"
          value={form.phone}
          onChange={(event: any) => {
            changeState("phone", event.target.value);
          }}
        />
        <FormInput
        inputclassname="mensagem"
          label="Mensagem"
          value={form.comment}
          onChange={(event: any) => {
            changeState("comment", event.target.value);
          }}
        />
        <FormButton text="Enviar" onClick={sendForm} />
      </div>
      

    </section>
  );
};

export default Contact;
