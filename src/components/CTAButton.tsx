import { cn } from "../utils/MergeTailwindClasses";

type CTAButtonProps = {
  width?: "full" | "max";
  onClick?: () => void;
  children?: React.ReactNode;
  styleClasses?: string;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  width = "max",
  onClick,
  children = "Müraciət edin",
  styleClasses,
}) => {
  const widthClass = width === "full" ? "w-full" : "w-max";

  return (
    <button
      className={cn(
        `flex items-center justify-center gap-2.5 bg-black-10 rounded-xl text-white py-[clamp(0.75rem,1vh,1.125rem)] px-[clamp(1rem,2vw,1.5rem)] ${widthClass}`,
        styleClasses
      )}
      onClick={onClick}>
      <div className="flex items-center justify-center bg-secondary-color h-4 min-w-4 md:h-5 md:min-w-5 rounded-full">
        <div className="bg-primary-color min-h-2 min-w-2 md:h-3 md:w-3 rounded-full"></div>
      </div>
      {children}
    </button>
  );
};

export default CTAButton;
