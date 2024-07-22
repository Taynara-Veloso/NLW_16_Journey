import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { RegisterLinkModal } from "./register-link-modal";
import { ConfirmParticipationModal } from "./confirm-participation-modal";

interface TripDetailsPageProps{
  handleCloseGuestsInput: () => void
}

export function TripDetailsPage({
  handleCloseGuestsInput,
}: TripDetailsPageProps) {
  const [isCreateActivityModal, setIsCreateActivityModal] = useState(false)
  const [isRegisterLinkModal, setIsRegisterLinkModal] = useState(false)
  const [isConfirmParticipationModal, setIsConfirmParticipationModal] = useState(false)

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModal(true)
  }

  function handleCloseCreateActivityModal() {
    setIsCreateActivityModal(false)
  }

  function handleOpenRegisterLinkModal() {
    setIsRegisterLinkModal(true)
  }

  function handleCloseRegisterLinkModal() {
    setIsRegisterLinkModal(false)
  }

  function handleOpenConfirmParticipationModal() {
    setIsConfirmParticipationModal(true)
  }

  function handleCloseConfirmParticipationModal() {
    setIsConfirmParticipationModal(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400"/> 
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>
      
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/> 
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
        

          <div className="w-px h-6 bg-zinc-800"/>

          <button onClick={handleCloseGuestsInput} type="submit" className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 hover:text-lime-950">
            Alterar local/data
            <Settings2 className="size-5"/>
          </button>
        </div>  
      </div>
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={handleOpenCreateActivityModal} type="button" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5"/>
              Cadastrar atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300"/>
                <span className="text-zinc-100">Viagem para Curitiba</span>
                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
              </div>
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300"/>
                <span className="text-zinc-100">Viagem para Ubatuba</span>
                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do Hotel
                  </span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.trivago.com.br/pt-BR/odr/hot%C3%A9is-taubat%C3%A9-brasil?search=200-60723
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0 hover:text-lime-400"/>
              </div>
            </div>
            <button type="submit" onClick={handleOpenRegisterLinkModal} className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-900">
              <Plus className="size-5"/>
              Cadastrar novo link
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800"/>

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
            <button type="submit" onClick={handleOpenConfirmParticipationModal} className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-900">
              <UserCog className="size-5"/>
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

      {isCreateActivityModal && (
        <CreateActivityModal
          handleCloseCreateActivityModal={handleCloseCreateActivityModal}
        />
      )}

      {isRegisterLinkModal && (
        <RegisterLinkModal 
          handleCloseRegisterLinkModal={handleCloseRegisterLinkModal}
        />
      )}

      {isConfirmParticipationModal && (
        <ConfirmParticipationModal 
          handleCloseConfirmParticipationModal={handleCloseConfirmParticipationModal}
        />
      )}
    </div>
  )
}