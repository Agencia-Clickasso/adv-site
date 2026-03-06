export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=11967586911"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-text-secondary sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="none" className="sm:h-[30px] sm:w-[30px]">
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.122 1.392-.207.237-.414.266-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.547.155-.724.159-.158.355-.414.533-.622.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.949 0 1.738 1.27 3.417 1.447 3.654.178.237 2.5 3.82 6.063 5.207.849.292 1.51.466 2.027.596.851.204 1.627.175 2.24.106.683-.077 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z"
          fill="#fff"
        />
      </svg>
    </a>
  )
}
