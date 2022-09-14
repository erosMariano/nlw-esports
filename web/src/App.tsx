import "./styles/main.css"
import logoImg from "./assets/logo-nlw-esports.svg"
import {MagnifyingGlassPlus} from "phosphor-react"
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
        </h1>


        <div className="grid grid-cols-6 gap-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-1.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">League Of Legends</strong>
              <span className="text-zinc-300 text-sm block mt-1">9 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-2.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">Dota 2</strong>
              <span className="text-zinc-300 text-sm block mt-1">6 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-3.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">CS GO</strong>
              <span className="text-zinc-300 text-sm block mt-1">2 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-4.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">Apex Legends</strong>
              <span className="text-zinc-300 text-sm block mt-1">5 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-5.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">1 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-6.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0  right-0 bottom-0">
              <strong className="text text-white font-bold block">World WarCraft</strong>
              <span className="text-zinc-300 text-sm block mt-1">2 anúncios</span>
            </div>
          </a>
        </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#1a2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex items-center gap-3 transition-all">
              <MagnifyingGlassPlus size={24}/> Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}
export default App