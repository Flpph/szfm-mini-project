# Követelmény specifikáció
## Jelenlegi helyzet leírása
Sokszor eszünkbe jut egy képről egy vicces történet és ezt szerettük volna ráírni egy képre, hogy továbbküldjük barátainknak és együtt nevessünk. Eddig ezt nehezen tehettük meg, mivel az ehhez hasonló weboldalak mindig nehezen használhatóak voltak és vízjelezték a képet, ami miatt egy kicsit azt lehet érezni, hogy nem is a tiéd az az általad kitalált meme.  
Erre szeretnénk egy megoldást létrehozni, mellyel teljesen saját képeket vagy memeket tudunk létrehozni, amelyet más felhasználók is láthatnak és pontozhatnak. 

## Megrendelői cél / Vágyálomrendszer leírása
Egy olyan honlapot szeretnénk létrehozni, amely segítségével a felhasználó egyedi vicces képeket ("meme"-eket) tud készíteni.  
Ennek elérésére a felhasználó feltud tölteni saját képet, vagy akár választhat egy képet az oldal képbankjából.  
Miután a felhasználó kiválasztotta/feltöltötte a képet erre egyedi szöveget tud majd írni.

## Rendszerre vonatkozó szabályok
- a felhasználó adataira vonatkozó jogszabályok betartása
- 18 év alattiak számára nem ajánlott tartalom ne jelenjen meg a weboldalon
- trágár és nem odaillő memek kiszűrése az oldalról
- a weboldal HTML5, CSS és JavaScript-tel valósuljon meg
- a szöveg betűtípusa nem számít
- a szöveg színe nem számít
- a felhasználói felület könnyen használható legyen
- a feltölthető kép típusa mindig .jpg formátumú legyen

## Technikai feltételek
A honlap egy HTML/CSS/JS (frontend) és egy bármilyen nyelven készült API (backend) legyen.  
Az API kezelje, illetve mentse le a feltöltött képeket és hajtsa végre a felhasználó által kért módosításokat.  
A felhasználó adatainak (jelen esetben egy felhasználónév és jelszó) egy MySQL adatbázisba menthetőnek, elérhetőnek kell lennie.  
A feltöltött és lekezelt képeket egy adott felhasználóhoz kell tudnunk kötni, ezek kulcsok (ID) segítségével kell, hogy történjen.

## Követelménylista
- felhasználónévvel történő bejelentkezés
- a weboldalon ne legyenek felesleges funkciók
- a felhasználói felület legyen könnyen használható, minden funkció legyen egyértelmű
- a weboldal legyen megbízható
- új funckiókkal bővíthető legyen a weboldal
- bírja a magas látogatottságot/nagy terhelést
- a weboldalra belépéskor jelenjenek meg a nemrég elkészült képek
- a weboldal kompatibilis legyen telefonon is
- az elkészült képek könnyen letölthetőek legyenek
- a feltölthető kép esetén ha a kép mindig legyen .jpg típusú
- ha a feltöltött kép nem .jpg típusú akkor dobjon error üzenetet a weboldal

## Fogalomszótár
- meme: Vicces kép, melyet a felhaszálók szöveggel kiegészítve készítenek.
