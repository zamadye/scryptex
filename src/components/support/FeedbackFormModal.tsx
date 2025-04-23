
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/inputui";
import { useToast } from "@/hooks/use-toast";
import { RecentTestimonialsBanner } from "./RecentTestimonialsBanner";

const FEEDBACK_TYPES = [
  { value: "bug", label: "Bug" },
  { value: "suggestion", label: "Suggestion" },
  { value: "testimonial", label: "Testimonial" },
];

const dummyTestimonials = [
  { type: "testimonial", message: "Scryptex made my research so much easier!", email: "alice@dmail.com"},
  { type: "testimonial", message: "The best on-chain analysis platform.", email: "bob@dmail.com"},
  { type: "testimonial", message: "Love the UI. Looking forward to more features!", email: "" },
];

export const FeedbackFormModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [feedback, setFeedback] = useState({
    type: FEEDBACK_TYPES[0].value,
    message: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [allTestimonials, setAllTestimonials] = useState(dummyTestimonials);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFeedback({ ...feedback, type: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Thanks for your feedback!",
        description: "We'll review it shortly.",
      });
      if (feedback.type === "testimonial") {
        setAllTestimonials([
          { type: "testimonial", message: feedback.message, email: feedback.email },
          ...allTestimonials.slice(0, 2)
        ]);
      }
      setFeedback({ ...feedback, message: "" });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Give Feedback</DialogTitle>
          <DialogDescription>
            We'd love to hear from you. Your feedback helps us improve Scryptex!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm mb-1 font-medium">Type</label>
            <select
              id="type"
              name="type"
              value={feedback.type}
              onChange={handleTypeChange}
              className="w-full py-2 pl-3 pr-8 rounded-md border border-input bg-background text-sm"
              required
              disabled={submitting}
            >
              {FEEDBACK_TYPES.map((opt) => (
                <option value={opt.value} key={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1 font-medium">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              value={feedback.message}
              onChange={handleChange}
              placeholder="Share your feedback or describe an issue…"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1 font-medium">Email <span className="text-gray-400 font-normal">(optional)</span></label>
            <Input
              id="email"
              name="email"
              type="email"
              value={feedback.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="bg-background"
              disabled={submitting}
              autoComplete="email"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={submitting || submitted} className="w-full">
              {submitting ? "Submitting…" : submitted ? "Submitted!" : "Send Feedback"}
            </Button>
          </DialogFooter>
        </form>
        <div className="mt-6">
          <RecentTestimonialsBanner testimonials={allTestimonials.slice(0, 3)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
