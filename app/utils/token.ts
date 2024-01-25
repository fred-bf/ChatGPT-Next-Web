import { ChatContent } from "../store";

export function estimateTokenLength(content: ChatContent[]): number {
  let tokenLength = 0;

  const input = content.filter((c) => c.type === "text").map((c) => c.text).join("")

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (charCode < 128) {
      // ASCII character
      if (charCode <= 122 && charCode >= 65) {
        // a-Z
        tokenLength += 0.25;
      } else {
        tokenLength += 0.5;
      }
    } else {
      // Unicode character
      tokenLength += 1.5;
    }
  }

  return tokenLength;
}
