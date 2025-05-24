document.addEventListener("DOMContentLoaded", () => {
  const aside = document.createElement("aside");
  aside.className = "fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-6 space-y-4";
  aside.innerHTML = `
    <h1 class="text-xl font-bold">Menu</h1>
    <nav class="space-y-2">
      <a href="index.html" class="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
      <a href="instalasi.html" class="block hover:bg-gray-700 p-2 rounded">Instalasi Debian</a>
      <a href="web-server.html" class="block hover:bg-gray-700 p-2 rounded">Web Server</a>
      <a href="dhcp-server.html" class="block hover:bg-gray-700 p-2 rounded">DHCP Server</a>
      <a href="ftp-server.html" class="block hover:bg-gray-700 p-2 rounded">FTP Server</a>
    </nav>
  `;
  document.body.prepend(aside);
});
