function goToAnchor(anchor) {
  const loc = document.location.toString().split("#")[0];
  document.location = loc + "#" + anchor;
  return false;
}