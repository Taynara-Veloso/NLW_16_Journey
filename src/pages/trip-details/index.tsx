import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { RegisterLinkModal } from "./register-link-modal";
import { ConfirmParticipationModal } from "./confirm-participation-modal";
import { DestinationAndDateHeader } from "./destinationAndDateHeader";
import { Activities } from "./activities";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Button } from "../../components/button";

export function TripDetailsPage() {
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
      <DestinationAndDateHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button variant="primary" onClick={handleOpenCreateActivityModal}>
              <Plus className="size-5"/>
              Cadastrar atividade
            </Button>
          </div>
          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks handleOpenRegisterLinkModal={handleOpenRegisterLinkModal}/>

          <div className="w-full h-px bg-zinc-800"/>

          <Guests 
            handleOpenConfirmParticipationModal={handleOpenConfirmParticipationModal}
          />
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