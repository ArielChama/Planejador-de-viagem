import { AtSign, Mail, Plus, User, X } from "lucide-react"

interface ModalProps {
  OpenModal: () => void;
}

const ModalConfirmEmail = ({ OpenModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl w-[640px] p-4 bg-zinc-900 space-y-10">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-xl mb-2">Confirmar criação da viagem</h2>
            <p className="text-zinc-400 text-sm">
              Para concluir a criação da viagem para <span className="">Florianópolis,
                Brasi</span> nas datas de 16 a 27 de Agosto de 2024 preencha seus dados abaixo:
            </p>
          </div>

          <div>
            <button type="button" onClick={OpenModal} className="">
              <X />
            </button>
          </div>
        </div>

        <form>
          <div className="space-y-4">
            <div className="flex items-center px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
              <User className="text-zinc-400 size-5" />
              <input type="email" name="email" placeholder="Digite o email do convidado" className="bg-transparent text-zinc-400 text-sm w-full" />
            </div>

            <div className="flex items-center px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
              <Mail className="text-zinc-400 size-5" />
              <input type="email" name="email" placeholder="Digite o email do convidado" className="bg-transparent text-zinc-400 text-sm w-full" />
            </div>

            <button type="submit" className="bg-lime-300 w-full text-lime-950 px-5 py-2 rounded-lg text-center font-medium hover:bg-lime-400 gap-2">
              Confirmar criação da viagem
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalConfirmEmail