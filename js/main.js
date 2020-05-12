setCopyright();

function setCopyright() {
  const copyrightHolder = document.getElementById("copyrightNotice");
  const currentYear = new Date().getFullYear();

  copyrightHolder.innerHTML = `Copyright Daniel Thompson © || ${currentYear}`;
}
