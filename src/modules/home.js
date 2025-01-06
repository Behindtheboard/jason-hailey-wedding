export default function home() {
  document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault()
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
