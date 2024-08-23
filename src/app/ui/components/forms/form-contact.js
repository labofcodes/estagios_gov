"use client";

import { useEffect, useState } from 'react';
import Text_body from '../text/text-body';
import Text_display_3 from '../text/text-display-3';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValided, setIsValided] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Clear previous status message
    setIsValided(false); // Disable the form while submitting

    try {
      const res = await fetch('/api/emails', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setStatusMessage('A sua mensagem foi enviada com sucesso, obrigado!');
      } else {
        setStatusMessage('Falha ao enviar e-mail. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
    } finally {
      setIsValided(true);
      setInterval(() => {
        setStatusMessage('');
      }, 10000);
    }
  };

  useEffect(() => {
    
    setIsValided(name !== '' && email !== '' && message !== '');
  }, [name, email, message]);

  return (
    <div className='flex flex-col w-full'>
      <form onSubmit={sendEmail} className="w-full flex flex-col gap-4 border-2 border-blue-crea-400 bg-blue-crea-400/5 rounded-lg p-5 md:p-10">
        <Text_display_3 className="mb-5">Entre em contato</Text_display_3>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 bg-transparent border-b-2 hover:outline-none focus:outline-none placeholder:text-blue-crea-400 focus:border-blue-crea-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-transparent border-b-2 hover:outline-none focus:outline-none placeholder:text-blue-crea-400 focus:border-blue-crea-400"
          required
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 bg-transparent border-b-2 hover:outline-none focus:outline-none placeholder:text-blue-crea-400 focus:border-blue-crea-400"
          required
        />
        <button
          type="submit"
          disabled={!isValided}
          className="mt-5 text-center flex justify-center md:justify-between items-center rounded-full md:max-w-max py-2 px-5 border border-blue-crea-500 text-blue-crea-500 hover:bg-blue-crea-500 hover:text-white hover:border-transparent hover:translate-x-1 transition-all disabled:opacity-30 disabled:cursor-default"
        >
          <Text_body className="font-medium">
            Enviar mensagem
          </Text_body>
        </button>
      </form>
      {statusMessage && (
        <div className='mt-4 bg-blue-crea-400 rounded-md text-center text-white p-5'>
          <Text_body>{statusMessage}</Text_body>
        </div>
      )}
    </div>
  );
}
