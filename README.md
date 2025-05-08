# Where it's @
Individuell inlämningsuppgift för React-kursen

[Länk till FigJam](https://www.figma.com/board/Ia0Tn3veevlod8UP3PEc8O/-?node-id=0-1&t=CL4MfJWnnxiyK3FJ-1)

## Externa bibliotek

### Swiper
Jag använde Swiper för att jag tyckte att det var ett passande sätt att visa biljetterna i appen på. För en mobilanvändare tänker jag att det är smidigt att kunna svepa mellan biljetterna och det ger ett mindre "rörigt" intryck att visa en biljett i taget än att ha alla biljetter framme samtidigt.
Jag kopierade koden direkt från swiperjs.com och stoppade in det jag ville använda i stället för deras exempel. Swiper använder sig av en container "Swiper" och av själva slidsen "SwiperSlide" (i mitt fall varje biljett). När man har installerat Swiper importerar man Swiper, SwiperSlide och css-filen 'swiper/css' i filen man vill använda Swiper i. Sen kan man använda egen css. I mitt fall behövde jag säga åt containern att den skulle fylla ut sidan (width: 100%). Resten av stylingen la jag på biljett-containern.

Det jag tyckte var mest krångligt var att förstå hur jag skulle använda Swiper och Swiperslide  för att rendera en slide för varje biljett användaren köper. Men det löste sig rätt fort. Överlag tyckte jag att det var supersmidigt och enkelt att använda! 

### Fontawesome
Jag tyckte att Fontawesome var smidigt att använda eftersom jag har använt det i HTML/JS förut. I React var det bara att installera Fonawesome och sedan importera React-komponenten för fontawesome och sedan hitta koden för den ikon man vill använda och importera den. Sedan kan man styla ikonen i css.

Jag använde ett hus som ikon för att användaren ska kunna ta sig till startsidan och en soptunna för att användaren ska kunna tömma kundkorgen. Jag tyckte att ikonerna var mycket snyggare och tog mindre plats än att skriva ut det med text. 

### UUID
UUID var ett smidigt sätt att ta fram ordernummer på. I ett mindre projekt som det här hade det kanske räckt att ha en math.random-funktion som slumpade fram bokstäver och siffror till ett ordernummer (som jag gjorde med sittplatser), men jag tyckte att det var bra att träna på att använda UUID. I större projekt - och där det faktiskt är viktigt att alla komponenter/objekt får ett unikt ID-nummer är UUID mycket bättre att använda för att inte riskera dubletter.

UUID används genom att (som alltid) installera biblioteket via terminalen. Sedan importerade jag komponenten i den fil jag ville använda UUID:t i. 

import { v4 as uuidv4 } from 'uuid';

Sedan använde jag uuidv4(); som funktion inuti **const generateOrderNumber** som tog det fullständiga ID:t, kortade ner det till 5 tecken och sedan gjorde alla bokstäver till stora bokstäver.

Jag tyckte att det var enkelt att använda. Det svåra var att komma på hur man skulle göra för att varje biljett skulle få ett unikt ID, men det hade inte med själva UUID:t att göra.
