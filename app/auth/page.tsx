"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // Função para processar a submissão do formulário de login
  }

  function handleForgotPassword() {
    // Função para lidar com a recuperação de senha
  }

  function handleSignUp() {
    // Função para redirecionar o usuário para a página de cadastro
  }

  return (
    <div>
      <div className="p-4 max-w-2xl mx-auto">
        <div className="flex items-center mt-10">
          <h1 className="text-3xl font-bold mt-20">ArachWrite</h1>
          <div className="ml-4 mt-20">
            <Image
              src="/Logo.png"
              alt="ArachWrite Logo"
              width={60}
              height={60}
            />
          </div>
        </div>
        <h1 className="text-sm">Transforme suas ideias em aventuras épicas! Descubra a plataforma que facilita a escrita de roteiros de jogos. Comece agora!</h1>
      </div>
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-sm font-bold">Email</h1>
        <textarea
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example@email.com"
          rows={1}
          className="w-full border border-gray-300 rounded p-2 mb-2 text-black"
        />
        <h1 className="text-sm font-bold mt-2">Password</h1>
        <textarea
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          rows={1}
          className="w-full border border-gray-300 rounded p-2 text-black"
        />

        <div style={{ float: "right" }}>
          <button
            onClick={handleForgotPassword}
            className="text-blue-500 hover:text-blue-700 p-2 mb-4"
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
        >
          Submit
        </button>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-center">
            Don't you have an account?{" "}
            <button
              onClick={handleSignUp}
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
