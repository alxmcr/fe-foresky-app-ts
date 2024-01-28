import './AppButton.scss';

type AppButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AppButton({
  children,
  onClick,
  className = '',
}: AppButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
