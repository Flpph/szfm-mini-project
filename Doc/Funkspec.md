# Funkcionális specifikáció
## Áttekintés
## Jelenlegi helyzet
## Vágyálom rendszer
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

