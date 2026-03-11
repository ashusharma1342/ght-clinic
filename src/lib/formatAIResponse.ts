export function formatAIResponse(text: string) {
  if (!text) return [];

  const sections = text.split("\n");

  const formatted = [];

  let currentTitle = "";
  let content = "";

  sections.forEach((line) => {
    if (
      line.toLowerCase().includes("issue") ||
      line.toLowerCase().includes("explanation") ||
      line.toLowerCase().includes("suggested") ||
      line.toLowerCase().includes("advice")
    ) {
      if (currentTitle) {
        formatted.push({
          title: currentTitle,
          text: content.trim(),
        });
      }

      currentTitle = line.replace(":", "");
      content = "";
    } else {
      content += line + " ";
    }
  });

  if (currentTitle) {
    formatted.push({
      title: currentTitle,
      text: content.trim(),
    });
  }

  return formatted;
}
