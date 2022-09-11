# Követelmény specifikáció
## Jelenlegi helyzet leírása
## Megrendelői cél / Vágyálomrendszer leírása
Egy olyan honlapot szeretnénk létrehozni, amely segítségével a felhasználó egyedi vicces képeket ("meme"-eket) tud készíteni.  Ennek elérésére a felhasználó feltud tölteni saját képet, vagy akár választhat egy képet az oldal képbankjából. Miután a felhasználó kiválasztotta/feltöltötte a képet erre egyedi szöveget tud majd írni.
## Rendszerre vonatkozó szabályok
## Technikai feltételek
A honlap egy HTML/CSS/JS (frontend) és egy bármilyen nyelven készült API (backend) legyen.  
Az API kezelje, illetve mentse le a feltöltött képeket és hajtsa végre a felhasználó által kért módosításokat.  
A felhasználó adatainak (jelen esetben egy felhasználónév és jelszó) egy MySQL adatbázisba menthetőnek, elérhetőnek kell lennie.  
A feltöltött és lekezelt képeket egy adott felhasználóhoz kell tudnunk kötni, ezek kulcsok (ID) segítségével kell, hogy történjen.
## Követelménylista
- a weboldalon ne legyenek felesleges funkciók
- a felhasználói felület legyen könnyen használható, minden funkció legyen egyértelmű
- a weboldal legyen megbízható, bírja a terhelést
- új funckiókkal bővíthető legyen a weboldal
- bírja a magas látogatottságot/nagy terhelést
- a weboldal kompatibilis legyen telefonon is
- az elkészült képek könnyen letölthetőek legyenek