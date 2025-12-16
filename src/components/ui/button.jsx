import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold leading-none tracking-tight transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        // primary, vou deixar tudo descrito aqui para facilitar a leitura (minha)
        default:
          "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg",
        primary:
          "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg",
        // secondary: fundo branco, texto azul, borda visivel
        secondary:
          "bg-white text-blue-700 border border-blue-600 shadow-sm hover:bg-blue-50 hover:border-blue-700",
        // outline: fundo transparente, texto azul, borda azul
        outline:
          "bg-transparent text-blue-700 border border-blue-600 shadow-none hover:bg-blue-50 hover:border-blue-700",
        // ghost: só texto azul, sem fundo, hover
        ghost:
          "bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800",
        // link-style button
        link:
          "bg-transparent text-blue-700 underline-offset-4 hover:text-blue-800 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 px-7 has-[>svg]:px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
