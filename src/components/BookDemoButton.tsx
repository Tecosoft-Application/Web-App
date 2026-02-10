"use client";

import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { openBookDemo } from "@/store/uiSlice";

interface BookDemoButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function BookDemoButton({
  children = "Book a Demo",
  className = "",
  disabled = false,
  onClick,
}: BookDemoButtonProps) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        dispatch(openBookDemo());
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
