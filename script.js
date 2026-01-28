<script>
  const toggle = document.getElementById("darkToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerText = 
      document.body.classList.contains("dark-mode") ? "☀ Light" : "🌙 Dark";
  });
</script>
<script>
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}
</script>
