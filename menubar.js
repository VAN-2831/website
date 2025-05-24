<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const aside = document.createElement("aside");
  aside.className = "fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-6 space-y-4";
  aside.innerHTML = `
    <h1 class="text-xl font-bold">Menu</h1>
    <nav class="space-y-2">
      <a href="../index.html" class="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
      <a href="instalasi.html" class="block hover:bg-gray-700 p-2 rounded">Instalasi Debian</a>
      <a href="web-server.html" class="block hover:bg-gray-700 p-2 rounded">Web Server</a>
    </nav>
  `;
  document.body.prepend(aside);
});
=======
document.addEventListener("DOMContentLoaded", () => {
  const aside = document.createElement("aside");
  aside.className = "fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-6 space-y-4";
  aside.innerHTML = `
    <h1 class="text-xl font-bold">Menu</h1>
    <nav class="space-y-2">
      <a href="../index.html" class="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
      <a href="instalasi.html" class="block hover:bg-gray-700 p-2 rounded">Instalasi Debian</a>
      <a href="web-server.html" class="block hover:bg-gray-700 p-2 rounded">Web Server</a>
    </nav>
  `;
  document.body.prepend(aside);
});
>>>>>>> 5b2ed9b63bdff8a75037a4b5bce3b6686c5967f8
