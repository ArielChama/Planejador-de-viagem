import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus} from "lucide-react"
import { FormEvent, useState } from "react"
import ModalEmail from "./components/ModalEmail"
import ModalConfirmEmail from "./components/ModalConfirmEmail"

function App() {
  const [inputs, setInputs] = useState(true)
  const [modalEmail, setModalEmail] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [emails, setEmails] = useState([
    "jessica.white44@yahoo.com",
    "erik_leffler3@gmail.com",
    "rebekah.conn21@gmail.com",
    "emile.mayer25@yahoo.com"
  ])

  const next = () => {
    setInputs(!inputs)
  }

  const openModal = () => {
    setModalEmail(!modalEmail)
  }

  const openModalConfirm = () => {
    setModalConfirm(!modalEmail)
  }

  const removeEmail = (emailRemoved: string) => {
    const newEmails = emails.filter(email => email != emailRemoved)
    setEmails(newEmails)
  }

  function addEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emails.includes(email)) {
      return
    }

    setEmails([
      ...emails,
      email
    ])

    event.currentTarget.reset()
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-16">
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

          <div className="flex items-center px-4 h-16 bg-zinc-900 rounded-xl shadow-shape ">
            <div className="flex items-center flex-1 gap-2">
              <MapPin className="text-zinc-400 size-5" />
              <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input type="text" name="" placeholder="Quando?" className="bg-transparent text-lg w-40 border-r border-zinc-800 mr-2" />
            </div>

            {inputs ? (
              <>
                <button type="button" onClick={next} className="bg-lime-300 text-lime-950 px-5 py-2 flex items-center rounded-lg font-medium hover:bg-lime-400 gap-2">
                  Continuar
                  <ArrowRight className="size-5" />
                </button>
              </>
            ) : (
              <button type="button" onClick={next} className="bg-zinc-800 text-zinc-200 text-sm px-5 py-2 flex items-center rounded-lg font-medium gap-2">
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            )}
          </div>

          {inputs ? (
            <>
            </>
          ) : (
            <div className="flex items-center px-4 h-16 bg-zinc-900 rounded-xl shadow-shape ">
              <div className="flex items-center flex-1 gap-2">
                <UserRoundPlus className="text-zinc-400 size-5" />
                <button type="button" onClick={openModal} className="bg-transparent text-zinc-400 text-lg">
                  {emails.length == 0 ? "Quem estará na viagem?" : `${emails.length} pessoa(s) convidada(s)`}
                </button>
              </div>

              <button type="button" onClick={openModalConfirm} className="bg-lime-300 text-lime-950 px-5 py-2 flex items-center rounded-lg font-medium hover:bg-lime-400 gap-2">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}

          <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
            com nossos <a href="" className="text-zinc-300 underline">termos de uso</a> e
            <a href="" className="text-zinc-300 underline">políticas de privacidade</a>.
          </p>
        </div>
      </div>

      {modalEmail ? (
        <ModalEmail OpenModal={openModal} emails={emails} addEmail={addEmail} removeEmail={removeEmail} />
      ) : (
        <></>
      )}

      {modalConfirm ? (
        <ModalConfirmEmail OpenModal={openModalConfirm} />
      ) : (
        <></>
      )}
    </>
  )
}

export default App
