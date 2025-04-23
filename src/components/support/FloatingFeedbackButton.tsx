
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { FeedbackFormModal } from "./FeedbackFormModal";
import { Button } from "@/components/ui/button";

export const FloatingFeedbackButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed z-40 bottom-24 right-6 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 p-3 transition-colors"
        style={{ minWidth: 48, minHeight: 48 }}
        onClick={() => setOpen(true)}
        aria-label="Give Feedback"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <FeedbackFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
