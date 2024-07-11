import { Calendar, Clock, Tag, X } from "lucide-react";

interface ModalProps {
  OpenModal: () => void;
}

const ModalAddActivity = ({ OpenModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl  p-4 bg-zinc-900 space-y-10">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-xl text-white font-semibold mb-2">Cadastrar atividade</h2>
            <p className="text-zinc-400 text-sm">
              Todos convidados podem visualizar as atividades.
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
            <Tag className="text-zinc-400 size-5" />
            <input type="email" name="text" placeholder="Qual actividade?" className="bg-transparent text-zinc-400 text-sm w-full" />
          </div>

          <div className="flex gap-2">
            <div className="flex items-center w-5/6 px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
              <Calendar className="text-zinc-400 size-5" />
              <input type="text" placeholder="Quando?" className="bg-transparent text-zinc-400 text-sm w-full" />
            </div>

            <div className="flex items-center px-4 py-4 gap-2 bg-zinc-950 rounded-xl border-zinc-800 border">
              <Clock className="text-zinc-400 size-5" />
              <input type="text" placeholder="Horário" className="bg-transparent text-zinc-400 text-sm w-full" />
            </div>
          </div>

          <div className="w-full">
            <button className="bg-lime-300 w-full text-lime-950 px-5 py-2 rounded-lg text-center font-medium hover:bg-lime-400">
              Salvar atividade
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddActivity