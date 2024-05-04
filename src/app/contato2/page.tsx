"use client";
import { useState } from "react";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";

const Contact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");

  const changeName = (event: any) => {
    setName(event.target.value);
  };

  const changeAddress = (event: any) => {
    setAddress(event.target.value);
  };
  const changePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const changeCep = (event: any) => {
    setCep(event.target.value);
  };

  const sendForm = () => {
    fetch('https://endereco.do.leo.com.br/api/client', {
        method: 'post',
        body: {
            _name: name,
            fullAddress: address
        }
    })
  };

  return (
    <section className="m-4">
      <header>
        <h1 className="text-4xl">Formulário de contato</h1>
      </header>
      <FormInput label="Nome" value={name} onChange={changeName} />
      <FormInput label="Endereço" value={address} onChange={changeAddress} />
      <FormInput label="Telefone" value={phone} onChange={changePhone} />
      <FormInput label="CEP" value={cep} onChange={changeCep} />

      <FormButton text="Enviar" onClick={sendForm} />

    </section>
  );
};

export default Contact;
