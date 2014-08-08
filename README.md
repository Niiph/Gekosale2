Gekosale 2
========
Nieoficjalne repozytorium Gekosale 2, którego celem jest zintegrowanie wszystkich dostępnych poprawek i doprowadzenie projektu do wersji stabilnej, która zostanie oznaczona jako 2.1.

# Instalacja
Najprościej jest pobrać pliki w formie ZIPa https://github.com/jmarceli/Gekosale2/archive/master.zip i rozpakować na serwerze do katalogu głównego.

Kolejny krok to wejście na adres pod którym są one dostępne, powinna pojawić się strona instalacji.

Przed rozpoczęciem instalacji należy założyć nową bazę danych MySQL dla tworzonego sklepu. Dane dostępowe trzeba będzie podać podczas procesu instalacji.

Proces instacji jest prosty, wymaga podania kilku informacji o nowozakładanym sklepie.

Do poprawnego działania wymagane jest PHP w wersji przynajmniej 5.3

# Przykładowy sklep
Przykładowy sklep z wprowadzonymi poprawkami można znaleźć pod adresem http://fixg2.mygekosale.pl

# Poprawki
Poniżej pojawi się lista poprawek w stosunku do wersji podstawowej (pobranej z http://gekosale.pl) oznaczonej przez autorów jako 2.0.1.

* Problem z modyfikacją danych do faktury w podsumowaniu zamówienia
* Usunięcie nieużywanych plików z szablonami stronicowania i nieużywanego szablonu e-mail
* Przeniesienie zawartości pliku init.js do plików Javascript szablonu
* Problem z filtracją, użytkownik po zastosowaniu filtracji nie był przenoszony na pierwszą stronę wyników
* Dodawanie statusu produktu bez symbolu generowało błąd
* Opcje dostawy widoczne w koszyku zmieniały kolejność za pierwszym razem kiedy klient zmieniał wybraną opcję
* Pojawiał się błąd gdy klient chciał się ponownie zapisać do newslettera
* Niepoprawne naliczanie ceny zamówienia według wagi podczas edycji zamówienia w panelu
* Powielenie wpisów dotyczących zamówienia widzianych przez klientów w podglądzie konta na stronach wielojęzycznych
* Linki do stron statycznych na mapie strony
* Problem przy zapisywaniu nowej kategorii jeśli nie wybierzemy mapowania Ceneo.pl
* Błąd wydruku zamówienia do formatu PDF
* Problem dotyczący składania zamówienia przez klienta jeśli nie zaznaczy opcji zakładania konta
* Liczne problemy dotyczące zmiany ilości produktów w koszyku
* Uzupełnienie brakujących tłumaczeń sklepu po stronie klienta
* Dodanie tzw. cookie bara z informacją o wykorzystywaniu na stronie plików cookies
* Rozwiązanie problemu output_buffering podczas instalacji

# Błędy / problemy
Ewentualne problemy prosimy zgłaszać w zakładce https://github.com/jmarceli/Gekosale2/issues za pomocą przycisku 'New issue'.
Podanie jak największej liczby informacji o napotkanym błędzie znacznie uprości pracę i pomoże w szybkim naprawieniu problemu.

# Repozytorium
Repozytorium istnieje dzięki http://mygekosale.pl, oferujemy liczne [rozszerzenia](http://mygekosale.pl/moduly) dla Gekosale jak również piszemy nowe na zamówienie.

Jeśli ktokolwiek byłby zainteresowany współpracą w udoskonalaniu tego repozytorium zapraszamy do kontaktu mailowego ([adres email dostępny na naszej stronie](http://mygekosale.pl))

# Autorzy
Modyfikowany kod został pobrany z http://gekosale.pl i tam też należy szukać jego autorów.
