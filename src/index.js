import UI from "./modules/UI";
import { format } from "date-fns";

document.addEventListener("DOMContentLoaded", UI.loadHomepage());

const today = format(new Date(), "dd/MM/yyyy");
console.log(today);
