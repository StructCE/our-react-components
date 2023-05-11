import { useState } from "react";
import { Alert, AlertCall } from "..";

export function AlertExample() {
  const [bestAnime, setBestAnime] = useState("");
  const [responseForSubmit, setResponseForSubmit] = useState("");

  const handleChange = (ev) => {
    setBestAnime(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (bestAnime) {
      const confirmedReply = await AlertCall({
        content: "Tem certeza que esse é o melhor anime? aiai",
      });
      if (confirmedReply && bestAnime === "one piece") {
        setResponseForSubmit("Parabéns, percebo que você entende das coisas");
      } else if (confirmedReply) {
        setResponseForSubmit("Melhore!");
      }
    }
  };

  return (
    <>
      <h1>Bem vindo ao AnimeTest 🔥</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bestAnime">Qual o melhor anime que existe?</label>
          <input
            type="text"
            value={bestAnime}
            onChange={handleChange}
            id="bestAnime"
          />
        </div>

        <Alert
          conditionToOpen={bestAnime === ""}
          content="Não quer colocar nada no input?"
          onConfirm={() => setResponseForSubmit("Melhore!")}
        >
          <button type="submit">Responder</button>
        </Alert>
      </form>

      {responseForSubmit && <h2>{responseForSubmit}</h2>}
    </>
  );
}
