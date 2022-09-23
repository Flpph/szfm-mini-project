# Funkcionális specifikáció

## Áttekintés
Egy olyan weboldalt készítünk, melyen a felhasználók akár saját képükről tudnak egy vicces képet, azaz egy memet készíteni. Emellett megtekintheti majd, hogy más felhasználók milyen szöveggel drukkolnak elő arra képre. Szeretnénk, hogy a képek könnyen szerkeszthetőek legyenek, az oldal működése és kezelése egyszerű, könnyen tanulható legyen. Az oldal rendelkezni fog egy képgyűjteménnyel amit fel lehet használni alapként.

## Jelenlegi helyzet

A megrendelő, külső weboldalakra van szorulva, ha szeretné megvalósítani saját képét. Ezen szeretne változtatni úgy, hogy saját oldalt szeretne, ahol olyan memeket tud készíteni, amilyet ő szeretne. Mivel a külső oldalak vízjellel megszokták jelölni a legenerált képeit, így látszik melyik konkurenciát használja. Emellett egy kicsit játékossá akarja tenni, hogy véletlenszerű képekre is lehet majd minél viccesebb szövegeket írni.

## Vágyálom rendszer

Egy olyan weboldalt szeretne, amelyen egyszerűen lehet akár feltölteni, akár kiválasztani egy kép alapot, melyre könnyedén tud szöveget írni. Ha a kreativitását szeretné növelni, akkor pedig a véletlenszerű képekre lehet írni saját szöveget. Ezeket a memek pedig egy másik oldalon megtekinthetőek lesznek majd, ahol le lehet azokat tölteni.
## Követelménylista

- K01 A kép elkészítésekor a felhasználónak egy felhasználó nevet kell megadnia.
- K02 Kép bank létrehozása, ezekből a képekből választhat a felhasználó.
- K03 Az elkészített/feltöltött képek ID-val felhasználókhoz való kötése.
- K04 Opció kép feltöltésére, a kép legyen mindig .jpg vagy .png formátumú.
- K05 Ha nem megfelelő filet választ ki a felhasználó, hibaüzenettel értesítődik erről a felhasználó.
- K06 Elkészített kép letöltési opció.
- K07 A weboldal multiplatform flexibilis legyen.
- K08 Text írása a képre.
- K09 Amikor a felhasználó belép a weboldalra a nemrég feltöltött/készített képeket megtudja tekinteni
- K10 A nemrég feltöltött képek alatt egy "@"-el jelenjen meg mely felhasználó készítette
- K11 A weboldal 2 oldalból álljon: főoldal, meme generátor
- K12 Az oldal tetején legyen egy navigációs felület ahol a felhasználó tud váltani a meme generátor és a főoldal között

## Jelenlegi üzleti folyamatok
A jelenlegi üzleti folyamatokhoz tartozik a galéria, ahol a felhasználó megnézheti az oldalra feltöltött képeket, ám ezek egyelőre még csak statikusan szerepelnek az oldalon, az adminisztrátor által feltöltött képeket lehet csak megnézni.
A feltöltött képeknél nem láthatjuk a feltöltés dátumát.

## Igényelt üzleti folyamatok
Kép feltöltése/kiválasztása => bemeneti adatok ellenőrzése => ha minden helyes, akkor kép generálása => a kép kimutatása a felhasználónak => a kép lementése

## Használati esetek
- Egyszerű képszerkesztéshez nem kell külön képszerkesztői felületet letölteni, ezt a weboldalon is végre lehet hajtani
- Képre szövegírás
- Kép letöltés illetve kép feltöltés
- Felhasználó által készített képek egy oldalon való megtekintése

## Fogalomtár
- meme : Egy olyan kép, melyre minél viccesebb szöveget akarunk írni. 
- kollázs : Képek mozaikszerűen elhelyezve.


