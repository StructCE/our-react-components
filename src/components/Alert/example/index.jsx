import { useState } from "react";
import { Alert, AlertCall } from "..";

export function AlertExample() {
  const [bestAnime, setBestAnime] = useState("");
  const [confirmedReply, setConfirmedReply] = useState(false);

  const handleChange = (ev) => {
    setBestAnime(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (bestAnime.length > 0) {
      setConfirmedReply(
        await AlertCall({
          content: "Tem certeza que esse é o melhor anime? aiai 🙄",
        })
      );
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
          content="Não quer colocar nada no input? 🤨"
        >
          <button type="submit">Responder</button>
        </Alert>
      </form>

      <span>{confirmedReply ? "true" : "false"}</span>
    </>
  );
}
