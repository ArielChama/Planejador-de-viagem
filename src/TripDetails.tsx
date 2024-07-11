import { Calendar, CircleCheck, CircleDashed, MapPin, Plus, Settings2, UserCog } from "lucide-react"
import { useState } from "react"
import ModalAddActivity from "./components/ModalAddActivity"
import ModalAddLinks from "./components/ModalAddLinks"


const TripDetails = () => {
  const [modalTask, setModalTask] = useState(false)
  const [modalLinks, setModalLinks] = useState(false)

  const openModalNewTask = () => {
    setModalTask(!modalTask)
  }

  const openModalNewLinks = () => {
    setModalLinks(!modalLinks)
  }


  return (
    <>
      <div className="h-screen flex my-10 justify-center">
        <div className="w-10/12">
          <div className="flex items-center px-4 h-16 bg-zinc-900 rounded-xl shadow-shape ">
            <div className="flex items-center flex-1 gap-2">
              <MapPin className="text-zinc-400 size-5" />
              <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input type="text" name="" placeholder="Quando?" className="bg-transparent text-lg w-40 border-r border-zinc-800 mr-2" />
            </div>


            <button type="button" className="bg-zinc-800 text-zinc-200 text-sm px-5 py-2 flex items-center rounded-lg font-medium gap-2">
              Alterar local/data
              <Settings2 className="size-5" />
            </button>
          </div>

          <div className="flex justify-between mt-5">
            <div className="w-8/12">
              <div className="flex justify-between">
                <div>
                  <h1>Atividades</h1>
                </div>

                <div>
                  <button type="submit" onClick={openModalNewTask} className="bg-lime-300 text-lime-950 px-5 py-2 flex items-center rounded-lg font-medium hover:bg-lime-400 gap-2">
                    <Plus className="size-5" />
                    Cadastrar atividade
                  </button>
                </div>
              </div>

              <div>
                <div className="w-full mb-5">
                  <h2>Dia 17</h2>
                  <div className="flex items-center justify-between w-full px-4 h-10 mt-2 bg-zinc-900 rounded-xl shadow-shape">
                    <div className="flex items-center gap-2">
                      <CircleCheck className="text-lime-300" />
                      Corrida de kart
                    </div>

                    <div>
                      14:00h
                    </div>
                  </div>
                </div>

                <div>
                  <h2>Dia 18</h2>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-bold mb-4">Links importantes</h2>
              <h3 className="font-semibold">Reserva de AirBnB</h3>
              <a href="">https://www.airbnb.com.br/rooms/104700011</a>

              <h3 className="font-semibold mt-3">Regras da casa</h3>
              <a href="">https://www.airbnb.com.br/rooms/104700011</a>

              <button type="submit" onClick={openModalNewLinks} className="bg-zinc-800 justify-center text-zinc-200 mt-3 px-5 py-2 flex w-full items-center rounded-lg font-medium hover:bg-zinc-900 gap-2">
                <Plus className="size-5" />
                Cadastrar novo link
              </button>

              <div className="border-t border-zinc-800 my-4"></div>

              <div>
                <h2 className="font-bold">Convidados</h2>

                <div className="flex justify-between my-2">
                  <div>
                    <h2 className="text-zinc-100">Jessica White</h2>
                    <p className="text-zinc-400">jessica.white44@yahoo.com</p>
                  </div>

                  <div>
                    <CircleDashed />
                  </div>
                </div>
              </div>

              <button type="submit" className="bg-zinc-800 justify-center text-zinc-200 mt-3 px-5 py-2 flex w-full items-center rounded-lg font-medium hover:bg-zinc-900 gap-2">
                <UserCog className="size-5" />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalTask ? (
        <ModalAddActivity OpenModal={openModalNewTask} />
      ) : (
        <></>
      )}
      {modalLinks ? (
        <ModalAddLinks OpenModal={openModalNewLinks} />
      ) : (
        <></>
      )}
    </>


  )
}

export default TripDetails