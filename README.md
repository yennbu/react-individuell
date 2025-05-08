# Where it's @
Individuell inlämningsuppgift för React-kursen

[Länk till FigJam](https://www.figma.com/board/Ia0Tn3veevlod8UP3PEc8O/-?node-id=0-1&t=CL4MfJWnnxiyK3FJ-1)

## Externa bibliotek

### Swiper
Jag använde swiper för att jag tyckte att det var ett passande sätt att visa biljetterna i appen på. För en mobilanvändare tänker jag att det är smidigt att kunna svepa mellan biljetterna och det ger ett mindre "rörigt" intryck att visa en biljett i taget än att ha alla biljetter framme samtidigt.
Jag kopierade koden direkt från swiperjs.com och stoppade in det jag ville använda i stället för deras exempel. Swiper använder sig av en container "Swiper" och av själva slidsen "SwiperSlide" (i mitt fall varje biljett). När man har installerat swiper importerar man Swiper, SwiperSlide och css-filen 'swiper/css' i filen man vill använda Swiper i. Sen kan man använda egen css. I mitt fall behövde jag säga åt containern att den skulle fylla ut sidan (width: 100%). Resten av stylingen la jag på biljett-containern.

Det jag tyckte var mest krångligt var att förstå hur jag skulle använda Swiper och Swiperslide  för att rendera en slide för varje biljett användaren köper. Men det löste sig rätt fort. Överlag tyckte jag att det var supersmidigt och enkelt att använda! 

### FontAwesome

### UUID
