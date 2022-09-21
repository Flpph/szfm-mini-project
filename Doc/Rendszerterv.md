# Rendszerterv
## A rendszer célja
- Egy olyan weboldalt készítünk, melyen a felhasználók akár saját képükről tudnak egy vicces képet, azaz egy “meme”-t készíteni.  
- Emellett megtekintheti majd, hogy más felhasználók milyen szöveggel drukkolnak elő arra képre. 
- Szeretnénk, hogy a képek könnyen szerkeszthetőek legyenek, az oldal működése és kezelése egyszerű, könnyen tanulható legyen.  
- Az oldal rendelkezni fog egy kép gyűjteménnyel amit fel lehet használni alapként.
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
![Ábra 1](/Doc/imgs/abra1.jpg)
## Követelmények
1. K01 - Bejelentkezési felület:
- A bejelentkezési adatok az adatbaázisba vannak lesznek letárolva.
2. K02 - Kép bank:
- A képi alapok a webszerveren lesznek feltöltve. 
3. K03 - ID-hoz csatolás
- Az elkészített képeket a felhasználó ID-jához kapcsoljuk.
4. K04 - Védelem a képfeltöltésnél
- Ha a felhasználó nem png vagy jpg fájlformátumot használ, akkor hibával jelez vissza a felhasználónak.
5. K05 - Kép letöltés
- Miután legeneráljuk a végleges képet, ezt letölthető lesz a felhasználó által.
6. K06 - A weboldal multiplatform flexibilis
- A weboldalt a leggyakrabban használt böngészőkben, illetve asztali számítógépeken, laptopokon és telefonokon is használható legyen.
7. K07 - Szövegírás a képre
- Működőképes szövegírás a képekre, a megfelelő helyen.
8. K08 - Főoldal
- A főoldalon megtekinthetőek lesznek a legfrissebb memek amik az oldalon készültek akár más felhasználók által.

## Fizikai környezet
- Nem volt szükség komponenseket, vagy külső rendszereket vásárolni.

- Fejlesztői eszközök:  
        - Visual Studio Code  
        - GitHub  
        - Trello  
  
- Fejlesztői platformok:  
        - Html5  
        - CSS  
        - JavaScript  

## Adatbázis terv
- Az adatbázisban dokumentumok fognak szerepelni, egy dokumentumban a kép létrehozásának dátuma, kép elérése, illetve a kép létrehozójának neve szerepel.
- Egy kép dokumentumban szerepel:
    - id (objectid)
      - Egy egyedi ObjectID, amit a MongoDB kezel.
    - author (objectid)
      - Egy felhasználó ObjectID
    - createdAt (date)
      - A dokumentum létrehozásának dátuma. (A kép feltöltésének dátuma)
      - UTC időzóna
    - updatedAt (date)
      - A dokumentum legutóbbi szerkesztésének dátuma.
      - Legtöbb esetben meg fog egyezni a létrehozás dátummal.
      - UTC időzóna
    - path (string)
      - A kép elérésének címe.
- Egy felhasználó dokumentumban szerepel:
    - id (objectid)
      - Egy egyedi ObjectID, amit a MongoDB kezel.
    - username (string)
      - A felhasználó által adott felhasználónév.
    - createdAt (date)
      - A dokumentum létrehozásának dátuma. (A felhasználó regisztálásának dátuma)
      - UTC időzóna
    - updatedAt (date)
      - A dokumentum legutóbbi szerkesztésének dátuma.
      - Esetleges jelszó vagy felhasználónév változtatás során változik.
    - password (string)
      - Egy hashelt string
    - admin (boolean)
      - Igaz/hamis, az adott felhasználó admin-e vagy sem
- A dokumentumok megkülönböztethetőek lesznek az id alapján.
![Ábra 2](/Doc/imgs/abra2.jpeg)

## Implementációs terv
- Frontend
  - A frontend több HTML5/CSS/JS fájlból fog szerepelni, ezek fogják tartalmazni az alkalmazás oldalait illetve megjelenését.
  - A dizájnhoz Bootstrap 5.2 könyvtárat fogjuk használni.
- Backend
  - A backend egy NodeJS projekt lesz, ami tartalmazni fogja az összes olyan logikát, amit a szervernek kell, hogy lebonyolítson. 
  - Biztosítja az adatbázis adatait a frontendnek.
  - Tárolja és biztosítja a képeket.
  - Tartalmazza a bejelentkezés / regisztráció logikát.
- Adatbázis
  - Egy MongoDB cluster.
  - Tárolja a felhasználókról és a képekről az adatokat.
  - Magát a képet nem itt tároljuk.

## Tesztterv
- Beta teszt
    - A tesztet a fejlesztők végzik, illetve általuk kijelölt személyek.
    - A tesztnél egy “production” környezetben kell letesztelni a rendszer funkcionalitását.
    - A kijelölt személyek és a tesztelők hibákat küldhetnek, amikre a fejlesztők visszajelzést adnak.
## Telepítési terv
A szoftver webes felületéhez csak egy böngésző telepítése szükséges. A szerverre közvetlenül az internetről kapcsolódnak rá a kliensek.
## Karbantartási terv
A karbantartás abban a formában fog megvalósulni, hogy a felhasználó által feltöltött és megalkotott képeket ellenőrizni fogjuk, hogy akár kiskorúak is megtudják tekinteni a weboldalt. Valamint a képi alap adatbázist is bővíteni fogjuk, hogy frissüljenek a meglévő képek.