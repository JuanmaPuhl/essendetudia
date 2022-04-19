//Even though execCommand is deprecated, it's still a good option as there is no other alternative
export async function copyTextToClipboard(text : string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand("copy", true, text)
  }
}