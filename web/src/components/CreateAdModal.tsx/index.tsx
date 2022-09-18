import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToogleGroup from "@radix-ui/react-toggle-group";

import { Check, GameController } from "phosphor-react";
import { Input } from "../Form/input";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

interface Game {
  id: string;
  title: string;
}

function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    axios("http://localhost:3333/games/").then((response) =>
      setGames(response.data)
    );
  }, []);

  const [weekDays, setWeekDays] = useState<string[]>([""]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    //validações


    if(!data.name){
      return 
    }
    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hoursStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      alert("Anúncio criado com sucesso!")

    } catch (error) {
      console.log(error)
      alert("Erro ao criar anúncio")
    }
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
          <Dialog.Title className="text-3xl text-white font-black">
            Públique um anúncio
          </Dialog.Title>

          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={(event) => handleCreateAd(event)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o game?
              </label>
              <select
                defaultValue={""}
                id="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                name="game"
              >
                <option disabled value="">
                  Selecione o game que deseja jogar
                </option>

                {games.map((game) => (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input
                  type="number"
                  id="yearsPlaying"
                  name="yearsPlaying"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu discord?</label>
                <Input
                  type="text"
                  id="discord"
                  placeholder="Usuario#0000"
                  name="discord"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>

                <ToogleGroup.Root
                  onValueChange={setWeekDays}
                  value={weekDays}
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                >
                  <ToogleGroup.Item
                    value="0"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("0") ? "bg-violet-500" : ""
                    }`}
                    title="Domingo"
                  >
                    D
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="1"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("1") ? "bg-violet-500" : ""
                    }`}
                    title="Segunda"
                  >
                    S
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="2"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("2") ? "bg-violet-500" : ""
                    }`}
                    title="Terça"
                  >
                    T
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="3"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("3") ? "bg-violet-500" : ""
                    }`}
                    title="Quarta"
                  >
                    Q
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="4"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("4") ? "bg-violet-500" : ""
                    }`}
                    title="Quinta"
                  >
                    Q
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="5"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("5") ? "bg-violet-500" : ""
                    }`}
                    title="Sexta"
                  >
                    S
                  </ToogleGroup.Item>
                  <ToogleGroup.Item
                    value="6"
                    className={`w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-all ${
                      weekDays.includes("6") ? "bg-violet-500" : ""
                    }`}
                    title="Sábado"
                  >
                    S
                  </ToogleGroup.Item>
                </ToogleGroup.Root>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="hourStart"
                    name="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <Input
                    id="hourEnd"
                    type="time"
                    name="hourEnd"
                    placeholder="Até"
                  />
                </div>
              </div>
            </div>

            <label
              id="checkbox"
              className="mt-2 flex items-center gap-2 text-sm"
            >
              <Checkbox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setUseVoiceChannel(true);
                  } else {
                    setUseVoiceChannel(false);
                  }
                }}
                className="w-6 h-6 rounded p-1 bg-zinc-900"
              >
                <Checkbox.Indicator>
                  <Check className="text-emerald-400  w-4 h-4" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600  transition-all">
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500  hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 transition-all"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

export default CreateAdModal;
