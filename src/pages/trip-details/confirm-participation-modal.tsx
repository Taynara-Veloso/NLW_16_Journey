import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";

interface ConfirmParticipationModalProps{
  handleCloseConfirmParticipationModal: () => void
}

export function ConfirmParticipationModal({
  handleCloseConfirmParticipationModal,
}:ConfirmParticipationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar participação</h2>
            <button type="button" onClick={handleCloseConfirmParticipationModal} title="button">
              <X className="size-5 text-zinc-400"/>
            </button>
          </div>
          <div className="space-y-7">
            <p className="text-sm text-zinc-400">
              Você foi convidado(a) para participar de uma viagem para 
              <span className="font-semibold text-zinc-100"> Florianópolis,<br/> Brasil</span> nas datas de 
              <span className="font-semibold text-zinc-100"> 16 a 27 de Agosto de 2024</span> 
            </p>
            <p className="text-sm text-zinc-400">Para confirmar sua presença na viagem, preencha os dados abaixo:</p>
          </div>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400"/>
            <input 
              name="title"
              placeholder="Seu nome completo" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            /> 
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg items-center gap-2">
              <Mail className="size-5 text-zinc-400"/>
              <input 
                type="email"
                placeholder="Seu e-mail" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              /> 
            </div>
          </div>
          <Button size="full">
            Confirmar minha presença
          </Button>
        </form>
      </div>
    </div>
  )
}