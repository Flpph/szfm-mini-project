# Rendszerterv
## A rendszer célja
- Egy olyan weboldalt készítünk, melyen a felhasználók akár saját képükről tudnak egy vicces képet, azaz egy “meme”-t készíteni. Emellett megtekintheti majd, hogy más felhasználók milyen szöveggel drukkolnak elő arra képre.  
Szeretnénk, hogy a képek könnyen szerkeszthetőek legyenek, az oldal működése és kezelése egyszerű, könnyen tanulható legyen. Az oldal rendelkezni fog egy kép gyűjteménnyel amit fel lehet használni alapként.
## Projektterv
    - Projektszerepkörök, felelősségek: 
        - Frontend
        - Backend
        - Adatbázis

    - Projektmunkások:
        - Szabó Zoltán
        - Sárközi Dániel
        - Szél Attila

    - Ütemezés:
        - Fejlesztés: 2022.09.19-2022-09.25
        - Átadás: 2022.09.26

## Üzleti folyamatok ábrája
## Követelmények
## Fizikai környezet
## Adatbázis terv
- Az adatbázisban dokumentumok fognak szerepelni, egy dokumentumban a kép létrehozásának dátuma, kép elérése, illetve a kép létrehozójának neve szerepel.
- Egy dokumentumban szerepel:
    - id (objectid)
    - author (string)
    - createdAt (date)
    - path (string)
- A dokumentumok megkülönböztethetőek lesznek az id alapján.

## Implementációs terv
  - A frontend több HTML5/CSS/JS fájlból fog szerepelni, ezek fogják tartalmazni az alkalmazás oldalait illetve megjelenését.
  - A backend egy MoleculerJS projekt lesz, ami tartalmazni fogja az összes olyan logikát, amit a szervernek kell, hogy lebonyolítson. Biztosítja az adatbázis adatait a frontendnek.
- Az adatbázis egy MongoDB cluster lesz, ami a felhőben fog futni, nem a mi saját szerverünkön.

## Tesztterv
- Beta teszt
    - A tesztet a fejlesztők végzik, illetve általuk kijelölt személyek.
    - A tesztnél egy “production” környezetben kell letesztelni a rendszer funkcionalitását.
    - A kijelölt személyek és a tesztelők hibákat küldhetnek, amikre a fejlesztők visszajelzést adnak.
## Telepítési terv
## Karbantartási terv