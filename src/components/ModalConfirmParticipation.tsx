import { Mail, User, X } from "lucide-react"

interface ModalProps {
  OpenModal: () => void;
}

const ModalConfirmParticipation = ({ OpenModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl w-[640px] p-4 bg-zinc-900 space-y-10">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-xl text-white font-semibold mb-2">Confirmar criação da viagem</h2>
            <p className="text-zinc-400 text-sm">
              Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis,
                Brasi</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
            </p>

            <p className="text-zinc-400 text-sm">
              Para confirmar sua presença na viagem, preencha os dados abaixo:
            </p>
          </div>

          <div>
            <button type="button" onClick={OpenModal} className="">
              <X />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
            <User className="text-zinc-400 size-5" />
            <input type="text" name="email" placeholder="Seu nome completo" className="bg-transparent text-zinc-400 text-sm w-full" />
          </div>

          <div className="flex items-center px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
            <Mail className="text-zinc-400 size-5" />
            <input type="email" name="email" placeholder="Digite o email do convidado" className="bg-transparent text-zinc-400 text-sm w-full" />
          </div>

          <div className="w-full">
            <a href="/trips" className="bg-lime-300 w-full text-lime-950 px-5 py-2 rounded-lg text-center font-medium hover:bg-lime-400">
              Confirmar minha presença
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalConfirmParticipation