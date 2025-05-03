'use client';

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils" // Assuming cn utility exists

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dtima-blue-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-dtima-red text-white hover:bg-dtima-red/90", // Primary Action
        secondary: "bg-dtima-blue text-white hover:bg-dtima-blue-light", // Secondary Action
        success: "bg-dtima-green text-white hover:bg-dtima-green-light", // Success State
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Assuming standard destructive variant
        outline: "border border-dtima-black bg-background hover:bg-dtima-gray-100 hover:text-accent-foreground",
        ghost: "hover:bg-dtima-gray-100 hover:text-dtima-red", // Adjusted hover for ghost as per NavBar example
        link: "text-dtima-blue underline-offset-4 hover:underline hover:text-dtima-blue-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 