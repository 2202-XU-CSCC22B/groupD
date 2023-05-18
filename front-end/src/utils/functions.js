const handleLogoutClick = () => {
  alert("Logout clicked");
  window.location.href = "/";
};

export { handleLogoutClick };

export function titleCase(string) {
  const words = string.split(" ");
  const titlecasedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const titlecasedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titlecasedWords.push(titlecasedWord);
  }

  return titlecasedWords.join(" ");
}
