export type ChatMessageType = {
  role: "user" | "ai";
  text?: string;
  image?: string;
  typing?: boolean;
};
