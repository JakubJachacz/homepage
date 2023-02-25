{
  const welcome = () => {
    console.log("Witam wszystkich developerów!");
  }

  welcome();
}

{
  const toggleTheme = () => {
    const button = document.querySelector(".button");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    button.addEventListener("click", () => {
      body.classList.toggle("dark");
      themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    });
  };

  toggleTheme();

}
