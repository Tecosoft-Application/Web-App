"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeBookDemo } from "@/store/uiSlice";
import BookDemoModal from "@/components/BookDemo";

export default function GlobalModals() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.bookDemoOpen);

  return (
    <BookDemoModal isOpen={isOpen} onClose={() => dispatch(closeBookDemo())} />
  );
}
