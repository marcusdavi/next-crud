interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "gray";
  return (
    <button onClick={props.onClick}
      className={`text-white rounded-md px-4 py-2 bg-gradient-to-r from-${cor}-400 to-${cor}-700 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
