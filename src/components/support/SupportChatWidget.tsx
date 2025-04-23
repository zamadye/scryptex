
import React, { useRef, useState } from "react";
import { MessageSquare, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  sender: "bot" | "user" | "agent";
  text: string;
  timestamp?: number;
  id?: string;
};

const FAQ = [
  {
    label: "How do I use Analyze?",
    answer: "Just click 'Analyze' on any project and follow the prompts! Scryptex will fetch and summarize key data for you.",
  },
  {
    label: "What is Credit?",
    answer: "Credits are used to unlock advanced AI analyses, farming tools, and more. You can see your balance at the top right.",
  },
  {
    label: "How to earn more Credits?",
    answer: "Top up via crypto wallet or invite friends — each referral earns you +5 credits instantly!",
  },
  {
    label: "How to invite friends?",
    answer: "Share your unique referral link from the Referral page. Friends who join grant you bonus credits!",
  },
];

export const SupportChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi, I’m Scryptex Assistant. What can I help you with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [offeredAgent, setOfferedAgent] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const sendUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      // Try to match FAQ
      const matchFAQ = FAQ.find(
        (f) => text && f.label.toLowerCase() === text.trim().toLowerCase()
      );
      if (matchFAQ) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: matchFAQ.answer },
        ]);
        setIsTyping(false);
        setOfferedAgent(false);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              "Would you like to connect with a support agent?",
          },
        ]);
        setIsTyping(false);
        setOfferedAgent(true);
      }
      // Auto-scroll
      setTimeout(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
      }, 120);
    }, 1050);
  };

  const handleFAQ = (faqLabel: string) => {
    sendUserMessage(faqLabel);
  };

  const handleRequestAgent = () => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: "Request Support Agent" },
      {
        sender: "bot",
        text: "A support agent will respond shortly. Please check back in a few minutes.",
      },
    ]);
    setIsTyping(true);
    setOfferedAgent(false);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: "Hello! I’m here to assist you. What’s the issue you’re facing?",
        },
      ]);
      setIsTyping(false);
      setTimeout(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
      }, 120);
    }, 1600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      sendUserMessage(input.trim());
    }
  };

  // Scroll always to bottom when chat is opened or grows
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
      }, 100);
    }
  }, [open, messages.length]);

  return (
    <>
      {/* Floating chat icon */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-primary text-primary-foreground rounded-full shadow-lg p-3 hover:bg-primary/90 transition-colors animate-fade-in"
        style={{ minWidth: 48, minHeight: 48 }}
        onClick={() => setOpen(true)}
        aria-label="Chat Support"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-50 bottom-24 right-6 w-80 max-w-full md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 animate-fade-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between py-2 px-4 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold text-sm">Scryptex Support</span>
            </div>
            <button onClick={() => setOpen(false)} className="hover:opacity-80" aria-label="Close Chat">&times;</button>
          </div>
          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto bg-background px-3 py-2 space-y-2"
            style={{ maxHeight: 320 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={[
                    "rounded-lg px-3 py-2 max-w-xs text-sm shadow-sm",
                    msg.sender === "bot"
                      ? "bg-secondary/80 text-gray-800"
                      : msg.sender === "agent"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-primary text-white",
                    "animate-fade-in",
                  ].join(" ")}
                  style={{ marginTop: 2, marginBottom: 2 }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary px-3 py-2 rounded-lg text-sm italic text-gray-500 animate-pulse transition-all">
                  Typing…
                </div>
              </div>
            )}
          </div>
          {/* FAQ + Input */}
          {!offeredAgent && (
            <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-gray-50 border-t border-gray-200">
              {FAQ.map((faq) => (
                <Button
                  key={faq.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFAQ(faq.label)}
                  className="text-xs px-2 py-1"
                  style={{ minWidth: 0 }}
                  tabIndex={-1}
                >
                  {faq.label}
                </Button>
              ))}
            </div>
          )}
          {offeredAgent && (
            <div className="flex flex-col items-center gap-2 px-3 py-2 bg-gray-50 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleRequestAgent}
              >
                Request Support Agent
              </Button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-gray-50 flex items-center gap-2 border-t border-gray-200 px-3 py-2">
            <Textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="resize-none flex-1 text-sm"
              style={{ minHeight: 24, maxHeight: 48 }}
              disabled={isTyping}
            />
            <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
              <MessageSquare className="h-5 w-5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
