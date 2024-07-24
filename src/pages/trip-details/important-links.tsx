import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps{
  handleOpenRegisterLinkModal: () => void,
}

export function ImportantLinks({
  handleOpenRegisterLinkModal,
}:ImportantLinksProps) {
  return (
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
      <Button variant="secondary" size="full" onClick={handleOpenRegisterLinkModal}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}