import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

interface GuestsProps{
  handleOpenConfirmParticipationModal: () => void,
}

export function Guests({
  handleOpenConfirmParticipationModal
}:GuestsProps){
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Taynara Veloso</span>
            <span className="block text-sm text-zinc-400 truncate">taynarasantos23@hotmail.com</span>
          </div>
          <CircleCheck className="text-lime-400 size-5 shrink-0"/>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Augusto Cesar</span>
            <span className="block text-sm text-zinc-400 truncate">cesarsilva19@hotmail.com</span>
          </div>
          <CircleCheck className="text-lime-400 size-5 shrink-0"/>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Leticia Santos</span>
            <span className="block text-sm text-zinc-400 truncate">leticiasantos@hotmail.com</span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Ayla Meow</span>
            <span className="block text-sm text-zinc-400 truncate">aylaMeow@gmail.com</span>
          </div>
          <CircleCheck className="text-lime-400 size-5 shrink-0"/>
        </div>
      </div>
      <Button variant="secondary" size="full" onClick={handleOpenConfirmParticipationModal}>
        <UserCog className="size-5"/>
        Gerenciar convidados
      </Button>
    </div>
  )
}