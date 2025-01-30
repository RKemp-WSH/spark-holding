import { type VariantProps, cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex text-lg font-bold text-wsh-gray-800 items-center justify-center whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md",
  {
    variants: {
      variant: {
        default: "uppercase text-white bg-wsh-blue-500 hover:bg-wsh-blue-600",
        destructive: "uppercase text-white bg-red-500 hover:bg-red-500/90",
        outline:
          "uppercase border border-neutral-200 bg-white hover:bg-wsh-gray-200 hover:text-wsh-gray-900",
        secondary:
          "uppercase hover:bg-wsh-blue-600 hover:text-white text-wsh-blue-500 border-wsh-blue-500 border-2 hover:border-wsh-blue-600",
        link: "uppercase underline-offset-4 hover:underline",
        hero: "capitalize border border-neutral-200 bg-white hover:bg-wsh-gray-200 hover:text-wsh-gray-900 rounded-full bg-white px-9 py-4 text-xl font-medium text-wsh-navy-500",
        bath: "capitalize text-white bg-white hover:bg-wsh-blue-600 rounded-full bg-wsh-blue-500 px-9 py-4 text-xl font-medium",
        btnPrimary:
          "bg-wsh-brand-blue-500 justify-center rounded-full font-medium capitalize text-white hover:bg-wsh-blue-700 hover:no-underline cursor-pointer",
        btnSecondary:
          "justify-center rounded-full border border-neutral-200 bg-white font-medium capitalize text-wsh-navy-500 hover:bg-wsh-gray-200 hover:text-wsh-gray-900 hover:no-underline focus-visible:ring-white focus-visible:ring-offset-black hover:no-underline cursor-pointer",
      },
      size: {
        default: "h-14 w-32",
        sm: "h-8 w-24",
        lg: "h-14 w-60 xs:w-72",
        icon: "h-10 w-10",
        fluid: "w-min",
        btnDf: "px-9 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;