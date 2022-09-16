# Funkcionális specifikáció
## Áttekintés
Egy olyan weboldalt készítünk, melyen a felhasználók akár saját képükről tudnak egy vicces képet, azaz egy memet készíteni. Emellett megtekintheti majd, hogy más felhasználók milyen szöveggel drukkolnak elő arra képre. Szeretnénk, hogy a képek könnyen szerkeszthetőek legyenek, az oldal működése és kezelése egyszerű, könnyen tanulható legyen. Az oldal rendelkezni fog egy képgyűjteménnyel amit fel lehet használni alapként.

## Jelenlegi helyzet

A megrendelő, külső weboldalakra van szorulva, ha szeretné megvalósítani saját képét. Ezen szeretne változtatni úgy, hogy saját oldalt szeretne, ahol olyan memeket tud készíteni, amilyet ő szeretne. Mivel a külső oldalak vízjellel megszokták jelölni a legenerált képeit, így látszik melyik konkurenciát használja. Emellett egy kicsit játékossá akarja tenni, hogy véletlenszerű képekre is lehet majd minél viccesebb szövegeket írni.

## Vágyálom rendszer

Egy olyan weboldalt szeretne, amelyen egyszerűen lehet akár feltölteni, akár kiválasztani egy kép alapot, melyre könnyedén tud szöveget írni. Ha a kreativitását szeretné növelni, akkor pedig a véletlenszerű képekre lehet írni saját szöveget. Ezeket a memek pedig egy másik oldalon megtekinthetőek lesznek majd, ahol le lehet azokat tölteni.
## Követelménylista
- K01 Regisztráció: A felhasználó a felhasználói nevének, email címének és jelszavának megadásával regisztrálja magát.  
A jelszó tárolása kódolva történik az adatbázisban.
Ha valamelyik adat ezek közül hiányzik vagy nem felel meg a követelményeknek,akkor a rendszer értesíti erről a felhasználót.
- K02 Bejelentkezési felület: A felhasználó az email címe és a jelszava segítségével bejelentkezhet.Ha a megadott email cím vagy jelszó nem megfelelő, akkor a felhasználó hibaüzenetet kap.
- K03 Felhasználó módosítása: A felhasználó módosítani tudja saját Felhasználónevét. Ehhez szükséges a régi és az új felhasználók megadása, az új megerősítése, valamint a felhasználó jelszavának megadása.
- K04 Jelszó módosítása: A felhasználó módosítani tudja saját jelszavát. Ehhez szükséges a régi és az új jelszavának megadása, valamint az új megerősítése.
- K05 Kép bank létrehozása, ezekből a képekből választhat a felhasználó.
- K06 Az elkészített/feltöltött képek ID-val felhasználókhoz való kötése.
- K07 Opció kép feltöltésére, ha nem megfelelő filet választ ki a felhasználó, hibaüzenettel értesítődik erről a felhasználó.
- K08 Elkészített kép letöltési opció.
- K09 A weboldal multiplatform flexibilis legyen.
- K10 Text írása a képre.
## Jelenlegi üzleti folyamatok
## Igényelt üzleti folyamatok
Kép feltöltése/kiválasztása => bemeneti adatok ellenőrzése => ha minden helyes, akkor kép generálása => a kép kimutatása a felhasználónak => a kép lementése
## Használati esetek
- Egyszerű képszerkesztéshez nem kell külön képszerkesztő felületet letölteni, ezt a weboldalon is végre lehet hajtani
- Képre szövegírás
- Kép letöltés illetve kép feltöltés
- Felhasználó által készített képek egy oldalon való megtekintése
## Fogalomtár

