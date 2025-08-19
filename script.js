const fortunas = [
  "Un nuevo camino se abrirá ante ti si confías en tu instinto.",
  "La paciencia te llevará más lejos de lo que imaginas.",
  "Una sonrisa hoy puede cambiar el rumbo de tu mañana.",
  "El éxito llega cuando dejas de buscarlo y comienzas a crearlo.",
  "Escucha el susurro del viento, te traerá respuestas inesperadas.",
  "Un pequeño gesto de bondad transformará tu día.",
  "La oportunidad que esperas está más cerca de lo que crees.",
  "Tus sueños son el mapa, tu esfuerzo es el camino.",
  "A veces, el silencio revela más que las palabras.",
  "Un encuentro casual puede convertirse en una gran amistad.",
  "La perseverancia convierte los sueños en realidades.",
  "El cambio que temes es el que te hará crecer.",
  "Confía en el proceso, todo llega en el momento justo.",
  "Una idea audaz hoy será tu victoria mañana.",
  "La felicidad no se encuentra, se construye día a día.",
  "Un paso pequeño hoy te llevará a grandes destinos.",
  "El universo siempre conspira a favor de los valientes.",
  "Tu corazón sabe lo que tu mente aún no entiende.",
  "La gratitud transforma lo ordinario en extraordinario.",
  "Un desafío hoy es una lección para mañana.",
  "El amor verdadero comienza cuando aprendes a amarte.",
  "Escucha a tu intuición, es tu mejor guía.",
  "La creatividad florece cuando te permites soñar.",
  "Un error no es un fracaso, es una oportunidad para aprender.",
  "Tu energía positiva atraerá lo que deseas.",
  "La aventura comienza cuando sales de tu zona de confort.",
  "Un amigo inesperado te sorprenderá pronto.",
  "El pasado te enseña, pero el futuro te espera.",
  "Tu valentía inspirará a otros a seguirte.",
  "La verdad siempre encuentra su camino hacia la luz.",
  "Un pequeño acto de generosidad puede cambiar una vida.",
  "El éxito no es el destino, es el viaje.",
  "Atrévete a ser diferente y el mundo te seguirá.",
  "La paz interior es el mayor tesoro que puedes encontrar.",
  "Un nuevo comienzo está a la vuelta de la esquina.",
  "La confianza en ti mismo abrirá puertas inesperadas.",
  "Escucha con atención, las respuestas están en los detalles.",
  "Tu pasión es la chispa que encenderá grandes logros.",
  "El equilibrio es la clave para una vida plena.",
  "Una puerta cerrada es solo una invitación a buscar otra entrada.",
  "El tiempo que dedicas a otros regresa multiplicado.",
  "La simplicidad es el secreto de la verdadera felicidad.",
  "Un sueño compartido es el comienzo de una gran aventura.",
  "La vida te sorprenderá cuando menos lo esperes.",
  "Tu esfuerzo hoy será la semilla de tu éxito mañana.",
  "El amor florece donde hay sinceridad y respeto.",
  "Un paso hacia lo desconocido puede llevarte a lo extraordinario.",
  "La humildad te llevará más lejos que la arrogancia.",
  "Tu sonrisa es un regalo que ilumina el mundo.",
  "El coraje es el primer paso hacia la grandeza.",
  "Una palabra amable puede sanar un corazón roto.",
  "La vida es un lienzo, pinta con colores audaces.",
  "Tu destino no está escrito, tú lo creas cada día.",
  "Un momento de reflexión te dará claridad en el caos.",
  "La bondad es una inversión que siempre da frutos.",
  "El futuro pertenece a quienes creen en sus sueños.",
  "Una mente abierta atrae oportunidades infinitas.",
  "El cambio es incómodo, pero necesario para crecer.",
  "Tu voz tiene el poder de inspirar a otros.",
  "La paciencia es la llave que abre puertas imposibles.",
  "Un gesto sincero puede cambiar el rumbo de un día.",
  "La vida recompensa a quienes se atreven a soñar en grande.",
  "Tu mayor fortaleza está en tu capacidad de adaptarte.",
  "El amor no busca perfección, solo autenticidad.",
  "Una nueva perspectiva puede transformar tu realidad.",
  "El éxito comienza con un solo paso valiente.",
  "La gratitud convierte lo que tienes en suficiente.",
  "Un amigo verdadero es un tesoro para toda la vida.",
  "La creatividad es la llave para desbloquear tu potencial.",
  "El pasado no define tu futuro, tú lo haces.",
  "Una pequeña acción hoy puede cambiar tu destino.",
  "La felicidad está en los momentos que compartes.",
  "Tu fuerza interior es más grande de lo que imaginas.",
  "El universo siempre encuentra la manera de equilibrarse.",
  "Una palabra de aliento puede mover montañas.",
  "La vida es un rompecabezas, cada pieza encaja con el tiempo.",
  "Tu bondad es una luz que nunca se apaga.",
  "El coraje no es la ausencia de miedo, sino actuar a pesar de él.",
  "Un sueño claro es el primer paso hacia el éxito.",
  "La sinceridad abre puertas que el engaño nunca podrá.",
  "Tu historia aún no está escrita, toma el lápiz.",
  "Una chispa de inspiración puede encender un gran cambio.",
  "La vida te dará lo que necesitas, no siempre lo que quieres.",
  "El respeto mutuo es la base de toda relación duradera.",
  "Un momento de calma puede revelar grandes verdades.",
  "Tu esfuerzo constante construye puentes hacia el éxito.",
  "La felicidad es un viaje, no un destino.",
  "Un corazón abierto atrae bendiciones inesperadas.",
  "La perseverancia transforma lo imposible en posible.",
  "Tu luz interior brilla más cuando ayudas a otros.",
  "El cambio comienza con una sola decisión valiente.",
  "Una mente curiosa encuentra tesoros ocultos.",
  "La vida es un eco, lo que das regresa a ti.",
  "Tu determinación es más fuerte que cualquier obstáculo.",
  "Un acto de amor puede sanar heridas invisibles.",
  "La paciencia te llevará a lugares que la prisa nunca alcanzará.",
  "Tu creatividad es un regalo que el mundo espera.",
  "El éxito no es la meta, es el camino que recorres.",
  "Una palabra de apoyo puede cambiar una vida.",
  "La vida te sorprenderá si mantienes el corazón abierto.",
  "Tu fuerza está en tu capacidad para levantarte tras caer.",
  "El amor verdadero crece con el tiempo y la dedicación.",
  "Una idea simple puede convertirse en algo extraordinario.",
  "La gratitud es la llave para una vida plena.",
  "Un nuevo amigo traerá alegría a tu vida pronto.",
  "La vida es un lienzo, tú decides los colores.",
  "Tu valentía será recompensada con oportunidades.",
  "El cambio que buscas comienza dentro de ti.",
  "Una pequeña acción hoy puede cambiar el mundo mañana.",
  "La sinceridad es el puente hacia relaciones duraderas.",
  "Tu pasión es la brújula que guía tu camino.",
  "El éxito llega cuando alineas tus acciones con tus valores.",
  "Una mente tranquila encuentra soluciones donde otros ven problemas.",
  "La bondad es una semilla que siempre florece.",
  "Tu destino está en tus manos, moldéalo con amor.",
  "Un momento de valentía puede cambiar tu vida para siempre.",
  "La vida te sonríe cuando compartes tu alegría.",
  "Tu esfuerzo hoy será la base de tu éxito mañana.",
  "El amor es el idioma universal que todos entendemos.",
  "Una nueva aventura está esperando por ti.",
  "La humildad te abrirá puertas que el orgullo cierra.",
  "Tu sonrisa es un faro en la oscuridad de otros.",
  "El coraje es la chispa que enciende grandes cambios.",
  "Una palabra amable puede transformar un día gris.",
  "La vida es un rompecabezas, cada experiencia es una pieza.",
  "Tu bondad es una luz que ilumina el mundo.",
  "El éxito es el resultado de pequeños pasos constantes.",
  "Una mente abierta encuentra oportunidades donde otros ven muros.",
  "La paciencia es el arte de esperar con esperanza.",
  "Tu creatividad es la llave para desbloquear tu futuro.",
  "El amor verdadero no busca, encuentra.",
  "Un gesto de bondad regresa multiplicado.",
  "La vida te recompensa cuando sigues tu corazón.",
  "Tu fuerza interior es tu mayor aliado.",
  "El cambio es la puerta hacia nuevas posibilidades.",
  "Una palabra de aliento puede mover el mundo.",
  "La vida es un viaje, disfruta cada paso.",
  "Tu determinación hará realidad tus sueños.",
  "El amor crece donde hay respeto y confianza.",
  "Una idea audaz puede cambiar tu destino.",
  "La gratitud transforma lo ordinario en mágico.",
  "Un amigo inesperado cruzará tu camino pronto.",
  "La vida es un lienzo, pinta con audacia.",
  "Tu valentía abrirá puertas inesperadas.",
  "El cambio comienza con un solo paso valiente.",
  "Una pequeña acción puede tener un gran impacto.",
  "La sinceridad es la base de toda relación sólida.",
  "Tu pasión es la llave que abre nuevas puertas.",
  "El éxito llega cuando trabajas con el corazón.",
  "Una mente tranquila ve soluciones claras.",
  "La bondad es una inversión que nunca falla.",
  "Tu destino lo escribes con cada decisión.",
  "Un momento de valentía puede cambiarlo todo.",
  "La vida te sonríe cuando compartes amor.",
  "Tu esfuerzo hoy florecerá mañana.",
  "El amor verdadero se construye con paciencia.",
  "Una nueva aventura está a punto de comenzar.",
  "La humildad es la llave para aprender y crecer.",
  "Tu sonrisa ilumina más de lo que imaginas.",
  "El coraje es el primer paso hacia la libertad.",
  "Una palabra amable puede sanar un corazón herido.",
  "La vida es un rompecabezas, cada día una nueva pieza.",
  "Tu bondad es un regalo que nunca se olvida.",
  "El éxito es el fruto de la constancia y la fe.",
  "Una mente abierta atrae infinitas posibilidades.",
  "La paciencia te llevará a donde los sueños comienzan.",
  "Tu creatividad es un tesoro que espera brillar.",
  "El amor verdadero florece en la autenticidad.",
  "Un gesto de bondad puede cambiar una vida.",
  "La vida te recompensa cuando sigues tu verdad.",
  "Tu fuerza interior es más grande que cualquier reto.",
  "El cambio es el comienzo de algo extraordinario.",
  "Una palabra de apoyo puede encender una chispa.",
  "La vida es un viaje, cada paso cuenta.",
  "Tu determinación hará realidad lo imposible.",
  "El amor crece donde hay respeto mutuo.",
  "Una idea simple puede transformar el mundo.",
  "La gratitud es el secreto de la abundancia.",
  "Un amigo nuevo traerá risas a tu vida.",
  "La vida es un lienzo, pinta con pasión.",
  "Tu valentía te llevará a lugares inesperados.",
  "El cambio es la semilla de un nuevo comienzo.",
  "Una pequeña acción hoy puede mover montañas.",
  "La sinceridad construye puentes inquebrantables.",
  "Tu pasión es la luz que guía tu camino.",
  "El éxito llega cuando sigues tu propósito.",
  "Una mente tranquila encuentra paz en el caos.",
  "La bondad es un regalo que siempre regresa.",
  "Tu destino lo forjas con cada elección.",
  "Un momento de valentía puede abrir mil puertas.",
  "La vida te sonríe cuando compartes bondad.",
  "Tu esfuerzo hoy es la semilla de mañana.",
  "El amor verdadero se fortalece con el tiempo.",
  "Una nueva aventura espera por tu valentía.",
  "La humildad te llevará a grandes alturas.",
  "Tu sonrisa es una chispa que enciende corazones.",
  "El coraje es la llave para desbloquear tu potencial.",
  "Una palabra amable puede cambiar un destino.",
  "La vida es un rompecabezas, cada pieza cuenta.",
  "Tu bondad es una luz que nunca se extingue.",
  "El éxito es el resultado de pasos pequeños y constantes.",
  "Una mente abierta encuentra caminos donde otros ven muros.",
  "La paciencia es la clave para los grandes logros.",
  "Tu creatividad es un faro en la oscuridad.",
  "El amor verdadero crece en la sinceridad.",
  "Un gesto de bondad puede transformar el mundo.",
  "La vida te recompensa cuando sigues tu pasión.",
  "Tu fuerza interior es más poderosa que cualquier tormenta.",
  "El cambio es la puerta hacia un nuevo comienzo.",
  "Una palabra de aliento puede mover el universo.",
  "La vida es un viaje, disfruta cada momento.",
  "Tu determinación hará realidad tus sueños más grandes.",
  "El amor crece donde hay confianza y respeto.",
  "Una idea audaz puede cambiarlo todo.",
  "La gratitud convierte lo cotidiano en extraordinario.",
  "Un amigo inesperado iluminará tu camino.",
  "La vida es un lienzo, pinta con amor.",
  "Tu valentía abrirá puertas que nunca imaginaste.",
  "El cambio comienza con un corazón valiente.",
  "Una pequeña acción puede tener un impacto eterno.",
  "La sinceridad es la base de toda conexión verdadera.",
  "Tu pasión es la chispa que enciende el cambio.",
  "El éxito llega cuando sigues tu verdad.",
  "Una mente tranquila encuentra soluciones en el silencio.",
  "La bondad es una semilla que siempre crece.",
  "Tu destino lo construyes con cada paso.",
  "Un momento de valentía puede transformar tu vida.",
  "La vida te sonríe cuando compartes tu luz.",
  "Tu esfuerzo hoy será la base de tu futuro.",
  "El amor verdadero se fortalece con la paciencia.",
  "Una nueva aventura está esperando por ti.",
  "La humildad es el camino hacia la grandeza.",
  "Tu sonrisa es un regalo que ilumina el mundo.",
  "El coraje es el primer paso hacia el cambio.",
  "Una palabra amable puede sanar un alma.",
  "La vida es un rompecabezas, cada día una pieza nueva.",
  "Tu bondad es una luz que brilla eternamente.",
  "El éxito es el fruto de la perseverancia.",
  "Una mente abierta encuentra oportunidades infinitas.",
  "La paciencia es la llave para los sueños imposibles.",
  "Tu creatividad es un tesoro que el mundo necesita.",
  "El amor verdadero florece en la confianza.",
  "Un gesto de bondad puede cambiar una vida entera.",
  "La vida te recompensa cuando sigues tu corazón.",
  "Tu fuerza interior es más grande que cualquier obstáculo.",
  "El cambio es la semilla de un nuevo futuro.",
  "Una palabra de apoyo puede mover montañas.",
  "La vida es un viaje, cada paso es una lección.",
  "Tu determinación hará realidad lo imposible.",
  "El amor crece donde hay sinceridad y respeto.",
  "Una idea simple puede transformar el mundo.",
  "La gratitud es la clave para una vida plena.",
  "Un amigo nuevo cruzará tu camino pronto.",
  "La vida es un lienzo, pinta con valentía.",
  "Tu valentía te llevará a destinos inesperados.",
  "El cambio comienza con un solo paso audaz.",
  "Una pequeña acción hoy puede cambiar el mañana.",
  "La sinceridad construye relaciones eternas.",
  "Tu pasión es la luz que ilumina tu camino.",
  "El éxito llega cuando sigues tu propósito con fe.",
  "Una mente tranquila encuentra paz en la tormenta.",
  "La bondad es un regalo que nunca se pierde.",
  "Tu destino lo forjas con amor y esfuerzo.",
  "Un momento de valentía puede abrir un nuevo mundo.",
  "La vida te sonríe cuando compartes tu bondad.",
  "Tu esfuerzo hoy será la semilla de tu éxito.",
  "El amor verdadero crece con paciencia y dedicación.",
  "Una nueva aventura está a punto de comenzar.",
  "La humildad te llevará a lugares inimaginables.",
  "Tu sonrisa es una chispa que enciende corazones.",
  "El coraje es la llave para un futuro brillante.",
  "Una palabra amable puede cambiar un destino.",
  "La vida es un rompecabezas, cada experiencia cuenta.",
  "Tu bondad es una luz que nunca se apaga.",
  "El éxito es el resultado de pasos pequeños y firmes.",
  "Una mente abierta encuentra caminos inesperados.",
  "La paciencia es la clave para grandes victorias.",
  "Tu creatividad es un regalo para el mundo.",
  "El amor verdadero se construye con autenticidad.",
  "Un gesto de bondad puede mover el universo.",
  "La vida te recompensa cuando sigues tu verdad.",
  "Tu fuerza interior es más poderosa que cualquier desafío.",
  "El cambio es la puerta hacia un nuevo comienzo.",
  "Una palabra de aliento puede transformar una vida.",
  "La vida es un viaje, disfruta cada instante.",
  "Tu determinación hará realidad tus sueños más grandes.",
  "El amor crece donde hay respeto y confianza.",
  "Una idea audaz puede cambiar el rumbo de tu vida.",
  "La gratitud convierte lo ordinario en extraordinario.",
  "Un amigo inesperado traerá alegría a tu vida.",
  "La vida es un lienzo, pinta con pasión y amor.",
  "Tu valentía abrirá puertas que nunca imaginaste."
];

const mensajesMagicos = [
  "Consultando al universo...",
  "Leyendo tu energía astral...",
  "Sacudiendo la bola mágica...",
  "Abriendo los portales del destino...",
  "Sintonizando las vibras cósmicas...",
  "Descifrando tu suerte estelar...",
  "Tu fortuna está en camino...",
  "Conectando con el oráculo...",
  "La galaxia está susurrando tu fortuna...",
  "Invocando a los espíritus sabios..."
];

const btnFortuna = document.getElementById("btnFortuna");
const btnGalleta = document.getElementById("btnGalleta");
const resultado = document.getElementById("resultadoFortuna");
const space = document.getElementById("space");

let activo = false;          // galleta ON/OFF
let generando = false;       // evita dobles clics
let cooldownActivo = false;  // controla el cooldown de 10s
let timeoutID = null;        // para cancelar animaciones

function mostrarPorDefecto() {
  resultado.classList.remove("fade-out");
  resultado.classList.add("visible");
  resultado.innerHTML = "Presiona el botón para ver tu fortuna.";
}

function mostrarCocinando() {
  const msg = mensajesMagicos[Math.floor(Math.random() * mensajesMagicos.length)];
  resultado.classList.remove("fade-out");
  resultado.classList.add("visible");
  resultado.innerHTML = `
    <p>${msg}</p>
    <img src="https://media3.giphy.com/media/Gmb9dijBtUIuE4MW6R/giphy.gif"
        alt="Cocinando fortuna" style="max-width:150px;margin-top:10px;">
  `;
}

function mostrarFortuna() {
  const indice = Math.floor(Math.random() * fortunas.length);
  const fortuna = fortunas[indice];
  resultado.classList.remove("fade-out");
  resultado.classList.add("visible");
  resultado.textContent = fortuna;
}

// Botón GALLETA (On/Off)
btnGalleta.addEventListener("click", () => {
  activo = !activo;

  btnFortuna.style.display = activo ? "inline-block" : "none";
  if (space) space.style.display = activo ? "inline-block" : "none";

  clearTimeout(timeoutID);
  generando = false;

  if (!activo) {
    resultado.classList.remove("visible");
    resultado.classList.add("fade-out");
    setTimeout(() => {
      resultado.innerHTML = "";
    }, 300);
  } else {
    mostrarPorDefecto();
  }
});

// Botón FORTUNA
btnFortuna.addEventListener("click", () => {
  if (!activo || generando || cooldownActivo) return;

  generando = true;
  cooldownActivo = true;
  btnFortuna.disabled = true;

  mostrarCocinando();

  timeoutID = setTimeout(() => {
    mostrarFortuna();
    generando = false;

    setTimeout(() => {
      cooldownActivo = false;
      btnFortuna.disabled = false;
    }, 43200000); 
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const starCount = 100;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 30 + 30}s`;
    space.appendChild(star);
  }
});

document.addEventListener("DOMContentLoaded", mostrarPorDefecto);
