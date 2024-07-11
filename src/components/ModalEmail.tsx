import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react";

interface ModalProps {
  OpenModal: () => void;
  emails: string[];
  addEmail: (event: FormEvent<HTMLFormElement>) => void;
  removeEmail: (email: string) => void;
}

const ModalEmail = ({ OpenModal, emails, addEmail, removeEmail }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl w-[640px] p-4 bg-zinc-900 space-y-10">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-xl">Selecionar convidados</h2>
            <p className="text-zinc-400 text-sm">
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </p>
          </div>

          <div>
            <button type="button" onClick={OpenModal} className="">
              <X />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {emails.map(email => (
            <div className="bg-zinc-800 flex p-2 rounded-lg">
              <span className="text-zinc-300">{email}</span>
              <button type="button" onClick={() => removeEmail(email)} className="">
                <X />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full border-zinc-800 border-t"></div>

        <form onSubmit={addEmail}>
          <div className="flex items-center px-4 h-16 bg-zinc-950 rounded-xl">
            <div className="flex items-center flex-1 gap-2">
              <AtSign className="text-zinc-400 size-5" />
              <input type="email" name="email" placeholder="Digite o email do convidado" className="bg-transparent text-zinc-400 text-sm" />
            </div>

            <button type="submit" className="bg-lime-300 text-lime-950 px-5 py-2 flex items-center rounded-lg font-medium hover:bg-lime-400 gap-2">
              Convidar
              <Plus className="size-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalEmail