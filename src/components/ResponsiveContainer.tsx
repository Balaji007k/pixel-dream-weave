
import { ReactNode } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "6xl" | "full";
}

export const ResponsiveContainer = ({ 
  children, 
  className = "", 
  maxWidth = "6xl" 
}: ResponsiveContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "6xl": "max-w-6xl",
    full: "max-w-full"
  };

  return (
    <div className={`
      container mx-auto 
      px-4 sm:px-6 lg:px-8 
      ${maxWidthClasses[maxWidth]} 
      w-full 
      overflow-hidden
      ${className}
    `}>
      {children}
    </div>
  );
};
