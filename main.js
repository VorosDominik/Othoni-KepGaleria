import { keplist } from "./Kepek.js";
import { Kepelem } from "./Kepelem.js";

$(document).ready(function () {
  const articleelem = $("article"); // Az article elem kiválasztása

  // Kepelem objektum létrehozása és az article elem átadása
  const kepelem = new Kepelem(keplist, articleelem);

  // Képek hozzáadása az article elemhez és stílusok beállítása
  kepelem.setupImageClickHandlers();
  articleelem.css({
    display: "flex", // Flexbox elrendezés engedélyezése
    justifyContent: "space-between", // A képek közötti térköz kialakítása
    alignItems: "center", // Középen igazítás
  });
});
