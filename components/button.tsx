import { ReactNode } from "react";
import Link from "next/link";

export const Button = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <button className="bg-[#383939] hover:bg-neutral-600 duration-300 border border-[#383939] hover:border-white text-white w-full lg:w-auto py-3 px-16 lg:py-4 lg:px-24 rounded-full">
        {children}
      </button>
    </Link>
  );
};
