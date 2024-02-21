import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'components/Container';
import Page from 'components/Page';

import {
  BlockInfo,
  ContentWrapper,
  ListItem,
  ListWrapper,
  Text,
  TextWrapper,
  Title,
  TitlePage,
} from './styles';

const Policy = () => {
  return (
    <Page>
      <Helmet>
        <title>Foxi abrechnung</title>
        <meta name="description" content="Endlich automatisierte Abrechnung!" />
      </Helmet>
      <ContentWrapper>
        <Container className="imprint__container">
          <TitlePage>Datenschutzerklärung</TitlePage>
          <BlockInfo>
            <TextWrapper>
              <Text>
                Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
                Datenschutz hat einen besonders hohen Stellenwert für die
                Geschäftsleitung der Hopf & Hopf GmbH. Eine Nutzung der
                Internetseiten der Hopf & Hopf GmbH ist grundsätzlich ohne jede
                Angabe personenbezogener Daten möglich. Sofern eine betroffene
                Person besondere Services unseres Unternehmens über unsere
                Internetseite in Anspruch nehmen möchte, könnte jedoch eine
                Verarbeitung personenbezogener Daten erforderlich werden. Ist
                die Verarbeitung personenbezogener Daten erforderlich und
                besteht für eine solche Verarbeitung keine gesetzliche
                Grundlage, holen wir generell eine Einwilligung der betroffenen
                Person ein.
              </Text>
              <Text>
                Die Verarbeitung personenbezogener Daten, beispielsweise des
                Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer
                betroffenen Person, erfolgt stets im Einklang mit der
                Datenschutz-Grundverordnung und in Übereinstimmung mit den für
                die Hopf & Hopf GmbH geltenden landesspezifischen
                Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung
                möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und
                Zweck der von uns erhobenen, genutzten und verarbeiteten
                personenbezogenen Daten informieren. Ferner werden betroffene
                Personen mittels dieser Datenschutzerklärung über die ihnen
                zustehenden Rechte aufgeklärt.
              </Text>
              <Text>
                Die Hopf & Hopf GmbH hat als für die Verarbeitung
                Verantwortlicher zahlreiche technische und organisatorische
                Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der
                über diese Internetseite verarbeiteten personenbezogenen Daten
                sicherzustellen. Dennoch können Internetbasierte
                Datenübertragungen grundsätzlich Sicherheitslücken aufweisen,
                sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus
                diesem Grund steht es jeder betroffenen Person frei,
                personenbezogene Daten auch auf alternativen Wegen,
                beispielsweise telefonisch, an uns zu übermitteln.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>1. Begriffsbestimmungen</Title>
            <TextWrapper>
              <Text>
                Die Datenschutzerklärung der Hopf & Hopf GmbH beruht auf den
                Begrifflichkeiten, die durch den Europäischen Richtlinien- und
                Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
                (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll
                sowohl für die Öffentlichkeit als auch für unsere Kunden und
                Geschäftspartner einfach lesbar und verständlich sein. Um dies
                zu gewährleisten, möchten wir vorab die verwendeten
                Begrifflichkeiten erläutern.
              </Text>
              <Text>
                Wir verwenden in dieser Datenschutzerklärung unter anderem die
                folgenden Begriffe:
              </Text>

              <ListWrapper>
                <ListItem>
                  <Title>a) personenbezogene Daten</Title>
                  <Text>
                    Personenbezogene Daten sind alle Informationen, die sich auf
                    eine identifizierte oder identifizierbare natürliche Person
                    (im Folgenden „betroffene Person“) beziehen. Als
                    identifizierbar wird eine natürliche Person angesehen, die
                    direkt oder indirekt, insbesondere mittels Zuordnung zu
                    einer Kennung wie einem Namen, zu einer Kennnummer, zu
                    Standortdaten, zu einer Online-Kennung oder zu einem oder
                    mehreren besonderen Merkmalen, die Ausdruck der physischen,
                    physiologischen, genetischen, psychischen, wirtschaftlichen,
                    kulturellen oder sozialen Identität dieser natürlichen
                    Person sind, identifiziert werden kann.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>b) betroffene Person</Title>
                  <Text>
                    Betroffene Person ist jede identifizierte oder
                    identifizierbare natürliche Person, deren personenbezogene
                    Daten von dem für die Verarbeitung Verantwortlichen
                    verarbeitet werden.{' '}
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>c) Verarbeitung</Title>
                  <Text>
                    Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                    Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe
                    im Zusammenhang mit personenbezogenen Daten wie das Erheben,
                    das Erfassen, die Organisation, das Ordnen, die Speicherung,
                    die Anpassung oder Veränderung, das Auslesen, das Abfragen,
                    die Verwendung, die Offenlegung durch Übermittlung,
                    Verbreitung oder eine andere Form der Bereitstellung, den
                    Abgleich oder die Verknüpfung, die Einschränkung, das
                    Löschen oder die Vernichtung.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>d) Einschränkung der Verarbeitung</Title>
                  <Text>
                    Einschränkung der Verarbeitung ist die Markierung
                    gespeicherter personenbezogener Daten mit dem Ziel, ihre
                    künftige Verarbeitung einzuschränken.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>e) Profiling</Title>
                  <Text>
                    Profiling ist jede Art der automatisierten Verarbeitung
                    personenbezogener Daten, die darin besteht, dass diese
                    personenbezogenen Daten verwendet werden, um bestimmte
                    persönliche Aspekte, die sich auf eine natürliche Person
                    beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                    Arbeitsleistung, wirtschaftlicher Lage, Gesundheit,
                    persönlicher Vorlieben, Interessen, Zuverlässigkeit,
                    Verhalten, Aufenthaltsort oder Ortswechsel dieser
                    natürlichen Person zu analysieren oder vorherzusagen.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>f) Pseudonymisierung</Title>
                  <Text>
                    Pseudonymisierung ist die Verarbeitung personenbezogener
                    Daten in einer Weise, auf welche die personenbezogenen Daten
                    ohne Hinzuziehung zusätzlicher Informationen nicht mehr
                    einer spezifischen betroffenen Person zugeordnet werden
                    können, sofern diese zusätzlichen Informationen gesondert
                    aufbewahrt werden und technischen und organisatorischen
                    Maßnahmen unterliegen, die gewährleisten, dass die
                    personenbezogenen Daten nicht einer identifizierten oder
                    identifizierbaren natürlichen Person zugewiesen werden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>
                    g) Verantwortlicher oder für die Verarbeitung
                    Verantwortlicher
                  </Title>
                  <Text>
                    Verantwortlicher oder für die Verarbeitung Verantwortlicher
                    ist die natürliche oder juristische Person, Behörde,
                    Einrichtung oder andere Stelle, die allein oder gemeinsam
                    mit anderen über die Zwecke und Mittel der Verarbeitung von
                    personenbezogenen Daten entscheidet. Sind die Zwecke und
                    Mittel dieser Verarbeitung durch das Unionsrecht oder das
                    Recht der Mitgliedstaaten vorgegeben, so kann der
                    Verantwortliche beziehungsweise können die bestimmten
                    Kriterien seiner Benennung nach dem Unionsrecht oder dem
                    Recht der Mitgliedstaaten vorgesehen werden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>h) Auftragsverarbeiter</Title>
                  <Text>
                    Auftragsverarbeiter ist eine natürliche oder juristische
                    Person, Behörde, Einrichtung oder andere Stelle, die
                    personenbezogene Daten im Auftrag des Verantwortlichen
                    verarbeitet.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>i) Empfänger</Title>
                  <Text>
                    Empfänger ist eine natürliche oder juristische Person,
                    Behörde, Einrichtung oder andere Stelle, der
                    personenbezogene Daten offengelegt werden, unabhängig davon,
                    ob es sich bei ihr um einen Dritten handelt oder nicht.
                    Behörden, die im Rahmen eines bestimmten
                    Untersuchungsauftrags nach dem Unionsrecht oder dem Recht
                    der Mitgliedstaaten möglicherweise personenbezogene Daten
                    erhalten, gelten jedoch nicht als Empfänger.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>j) Dritter</Title>
                  <Text>
                    Dritter ist eine natürliche oder juristische Person,
                    Behörde, Einrichtung oder andere Stelle außer der
                    betroffenen Person, dem Verantwortlichen, dem
                    Auftragsverarbeiter und den Personen, die unter der
                    unmittelbaren Verantwortung des Verantwortlichen oder des
                    Auftragsverarbeiters befugt sind, die personenbezogenen
                    Daten zu verarbeiten.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>k) Einwilligung</Title>
                  <Text>
                    Einwilligung ist jede von der betroffenen Person freiwillig
                    für den bestimmten Fall in informierter Weise und
                    unmissverständlich abgegebene Willensbekundung in Form einer
                    Erklärung oder einer sonstigen eindeutigen bestätigenden
                    Handlung, mit der die betroffene Person zu verstehen gibt,
                    dass sie mit der Verarbeitung der sie betreffenden
                    personenbezogenen Daten einverstanden ist.
                  </Text>
                </ListItem>
              </ListWrapper>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              2. Name und Anschrift des für die Verarbeitung Verantwortlichen
            </Title>
            <TextWrapper>
              <Text>Hopf & Hopf GmbH</Text>
              <Text>Glockentraße 35</Text>
              <Text>40476 Düsseldorf</Text>
              <Text>Deutschland</Text>
              <Text>
                E-Mail: info[Teil in Klammern (inkl.)
                entfernen]@foxi-abrechnung.de
              </Text>
              <Text>Website: www.foxi-abrechnung.de</Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>3. Cookies</Title>
            <TextWrapper>
              <Text>
                Zahlreiche Internetseiten und Server verwenden Cookies. Viele
                Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist
                eine eindeutige Kennung des Cookies. Sie besteht aus einer
                Zeichenfolge, durch welche Internetseiten und Server dem
                konkreten Internetbrowser zugeordnet werden können, in dem das
                Cookie gespeichert wurde. Dies ermöglicht es den besuchten
                Internetseiten und Servern, den individuellen Browser der
                betroffenen Person von anderen Internetbrowsern, die andere
                Cookies enthalten, zu unterscheiden. Ein bestimmter
                Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt
                und identifiziert werden.
              </Text>
              <Text>
                Durch den Einsatz von Cookies kann die Hopf & Hopf GmbH den
                Nutzern dieser Internetseite nutzerfreundlichere Services
                bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
              </Text>
              <Text>
                Mittels eines Cookies können die Informationen und Angebote auf
                unserer Internetseite im Sinne des Benutzers optimiert werden.
                Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer
                unserer Internetseite wiederzuerkennen. Zweck dieser
                Wiedererkennung ist es, den Nutzern die Verwendung unserer
                Internetseite zu erleichtern. Der Benutzer einer Internetseite,
                die Cookies verwendet, muss beispielsweise nicht bei jedem
                Besuch der Internetseite erneut seine Zugangsdaten eingeben,
                weil dies von der Internetseite und dem auf dem Computersystem
                des Benutzers abgelegten Cookie übernommen wird. Ein weiteres
                Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der
                Online-Shop merkt sich die Artikel, die ein Kunde in den
                virtuellen Warenkorb gelegt hat, über ein Cookie.
              </Text>
              <Text>
                Die betroffene Person kann die Setzung von Cookies durch unsere
                Internetseite jederzeit mittels einer entsprechenden Einstellung
                des genutzten Internetbrowsers verhindern und damit der Setzung
                von Cookies dauerhaft widersprechen. Ferner können bereits
                gesetzte Cookies jederzeit über einen Internetbrowser oder
                andere Softwareprogramme gelöscht werden. Dies ist in allen
                gängigen Internetbrowsern möglich. Deaktiviert die betroffene
                Person die Setzung von Cookies in dem genutzten Internetbrowser,
                sind unter Umständen nicht alle Funktionen unserer Internetseite
                vollumfänglich nutzbar.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>4. Erfassung von allgemeinen Daten und Informationen</Title>
            <TextWrapper>
              <Text>
                Die Internetseite der Hopf & Hopf GmbH erfasst mit jedem Aufruf
                der Internetseite durch eine betroffene Person oder ein
                automatisiertes System eine Reihe von allgemeinen Daten und
                Informationen. Diese allgemeinen Daten und Informationen werden
                in den Logfiles des Servers gespeichert. Erfasst werden können
                die (1) verwendeten Browsertypen und Versionen, (2) das vom
                zugreifenden System verwendete Betriebssystem, (3) die
                Internetseite, von welcher ein zugreifendes System auf unsere
                Internetseite gelangt (sogenannte Referrer), (4) die
                Unterwebseiten, welche über ein zugreifendes System auf unserer
                Internetseite angesteuert werden, (5) das Datum und die Uhrzeit
                eines Zugriffs auf die Internetseite, (6) eine
                Internet-Protokoll-Adresse (IP-Adresse), (7) der
                Internet-Service-Provider des zugreifenden Systems und (8)
                sonstige ähnliche Daten und Informationen, die der
                Gefahrenabwehr im Falle von Angriffen auf unsere
                informationstechnologischen Systeme dienen.
              </Text>
              <Text>
                Bei der Nutzung dieser allgemeinen Daten und Informationen zieht
                die Hopf & Hopf GmbH keine Rückschlüsse auf die betroffene
                Person. Diese Informationen werden vielmehr benötigt, um (1) die
                Inhalte unserer Internetseite korrekt auszuliefern, (2) die
                Inhalte unserer Internetseite sowie die Werbung für diese zu
                optimieren, (3) die dauerhafte Funktionsfähigkeit unserer
                informationstechnologischen Systeme und der Technik unserer
                Internetseite zu gewährleisten sowie (4) um
                Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur
                Strafverfolgung notwendigen Informationen bereitzustellen. Diese
                anonym erhobenen Daten und Informationen werden durch die Hopf &
                Hopf GmbH daher einerseits statistisch und ferner mit dem Ziel
                ausgewertet, den Datenschutz und die Datensicherheit in unserem
                Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau
                für die von uns verarbeiteten personenbezogenen Daten
                sicherzustellen. Die anonymen Daten der Server-Logfiles werden
                getrennt von allen durch eine betroffene Person angegebenen
                personenbezogenen Daten gespeichert.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>5. Registrierung auf unserer Internetseite</Title>
            <TextWrapper>
              <Text>
                Die betroffene Person hat die Möglichkeit, sich auf der
                Internetseite des für die Verarbeitung Verantwortlichen unter
                Angabe von personenbezogenen Daten zu registrieren. Welche
                personenbezogenen Daten dabei an den für die Verarbeitung
                Verantwortlichen übermittelt werden, ergibt sich aus der
                jeweiligen Eingabemaske, die für die Registrierung verwendet
                wird. Die von der betroffenen Person eingegebenen
                personenbezogenen Daten werden ausschließlich für die interne
                Verwendung bei dem für die Verarbeitung Verantwortlichen und für
                eigene Zwecke erhoben und gespeichert. Der für die Verarbeitung
                Verantwortliche kann die Weitergabe an einen oder mehrere
                Auftragsverarbeiter, beispielsweise einen Paketdienstleister,
                veranlassen, der die personenbezogenen Daten ebenfalls
                ausschließlich für eine interne Verwendung, die dem für die
                Verarbeitung Verantwortlichen zuzurechnen ist, nutzt.
              </Text>
              <Text>
                Durch eine Registrierung auf der Internetseite des für die
                Verarbeitung Verantwortlichen wird ferner die vom
                Internet-Service-Provider (ISP) der betroffenen Person vergebene
                IP-Adresse, das Datum sowie die Uhrzeit der Registrierung
                gespeichert. Die Speicherung dieser Daten erfolgt vor dem
                Hintergrund, dass nur so der Missbrauch unserer Dienste
                verhindert werden kann, und diese Daten im Bedarfsfall
                ermöglichen, begangene Straftaten aufzuklären. Insofern ist die
                Speicherung dieser Daten zur Absicherung des für die
                Verarbeitung Verantwortlichen erforderlich. Eine Weitergabe
                dieser Daten an Dritte erfolgt grundsätzlich nicht, sofern keine
                gesetzliche Pflicht zur Weitergabe besteht oder die Weitergabe
                der Strafverfolgung dient.
              </Text>
              <Text>
                Die Registrierung der betroffenen Person unter freiwilliger
                Angabe personenbezogener Daten dient dem für die Verarbeitung
                Verantwortlichen dazu, der betroffenen Person Inhalte oder
                Leistungen anzubieten, die aufgrund der Natur der Sache nur
                registrierten Benutzern angeboten werden können. Registrierten
                Personen steht die Möglichkeit frei, die bei der Registrierung
                angegebenen personenbezogenen Daten jederzeit abzuändern oder
                vollständig aus dem Datenbestand des für die Verarbeitung
                Verantwortlichen löschen zu lassen.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>6. Abonnement unseres Newsletters</Title>
            <TextWrapper>
              <Text>
                Auf der Internetseite der Hopf & Hopf GmbH wird den Benutzern
                die Möglichkeit eingeräumt, den Newsletter unseres Unternehmens
                zu abonnieren. Welche personenbezogenen Daten bei der Bestellung
                des Newsletters an den für die Verarbeitung Verantwortlichen
                übermittelt werden, ergibt sich aus der hierzu verwendeten
                Eingabemaske.
              </Text>
              <Text>
                Die Hopf & Hopf GmbH informiert ihre Kunden und Geschäftspartner
                in regelmäßigen Abständen im Wege eines Newsletters über
                Angebote des Unternehmens. Der Newsletter unseres Unternehmens
                kann von der betroffenen Person grundsätzlich nur dann empfangen
                werden, wenn (1) die betroffene Person über eine gültige
                E-Mail-Adresse verfügt und (2) die betroffene Person sich für
                den Newsletterversand registriert. An die von einer betroffenen
                Person erstmalig für den Newsletterversand eingetragene
                E-Mail-Adresse wird aus rechtlichen Gründen eine
                Bestätigungsmail im Double-Opt-In-Verfahren versendet. Diese
                Bestätigungsmail dient der Überprüfung, ob der Inhaber der
                E-Mail-Adresse als betroffene Person den Empfang des Newsletters
                autorisiert hat.
              </Text>
              <Text>
                Bei der Anmeldung zum Newsletter speichern wir ferner die vom
                Internet-Service-Provider (ISP) vergebene IP-Adresse des von der
                betroffenen Person zum Zeitpunkt der Anmeldung verwendeten
                Computersystems sowie das Datum und die Uhrzeit der Anmeldung.
                Die Erhebung dieser Daten ist erforderlich, um den(möglichen)
                Missbrauch der E-Mail-Adresse einer betroffenen Person zu einem
                späteren Zeitpunkt nachvollziehen zu können und dient deshalb
                der rechtlichen Absicherung des für die Verarbeitung
                Verantwortlichen.
              </Text>
              <Text>
                Die im Rahmen einer Anmeldung zum Newsletter erhobenen
                personenbezogenen Daten werden ausschließlich zum Versand
                unseres Newsletters verwendet. Ferner könnten Abonnenten des
                Newsletters per E-Mail informiert werden, sofern dies für den
                Betrieb des Newsletter-Dienstes oder eine diesbezügliche
                Registrierung erforderlich ist, wie dies im Falle von Änderungen
                am Newsletterangebot oder bei der Veränderung der technischen
                Gegebenheiten der Fall sein könnte. Es erfolgt keine Weitergabe
                der im Rahmen des Newsletter-Dienstes erhobenen
                personenbezogenen Daten an Dritte. Das Abonnement unseres
                Newsletters kann durch die betroffene Person jederzeit gekündigt
                werden. Die Einwilligung in die Speicherung personenbezogener
                Daten, die die betroffene Person uns für den Newsletterversand
                erteilt hat, kann jederzeit widerrufen werden. Zum Zwecke des
                Widerrufs der Einwilligung findet sich in jedem Newsletter ein
                entsprechender Link. Ferner besteht die Möglichkeit, sich
                jederzeit auch direkt auf der Internetseite des für die
                Verarbeitung Verantwortlichen vom Newsletterversand abzumelden
                oder dies dem für die Verarbeitung Verantwortlichen auf andere
                Weise mitzuteilen.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>7. Newsletter-Tracking</Title>
            <TextWrapper>
              <Text>
                Die Newsletter der Hopf & Hopf GmbH enthalten sogenannte
                Zählpixel. Ein Zählpixel ist eine Miniaturgrafik, die in solche
                E-Mails eingebettet wird, welche im HTML-Format versendet
                werden, um eine Logdatei-Aufzeichnung und eine Logdatei-Analyse
                zu ermöglichen. Dadurch kann eine statistische Auswertung des
                Erfolges oder Misserfolges von Online-Marketing-Kampagnen
                durchgeführt werden. Anhand des eingebetteten Zählpixels kann
                die Hopf & Hopf GmbH erkennen, ob und wann eine E-Mail von einer
                betroffenen Person geöffnet wurde und welche in der E-Mail
                befindlichen Links von der betroffenen Person aufgerufen wurden.
              </Text>
              <Text>
                Solche über die in den Newslettern enthaltenen Zählpixel
                erhobenen personenbezogenen Daten, werden von dem für die
                Verarbeitung Verantwortlichen gespeichert und ausgewertet, um
                den Newsletterversand zu optimieren und den Inhalt zukünftiger
                Newsletter noch besser den Interessen der betroffenen Person
                anzupassen. Diese personenbezogenen Daten werden nicht an Dritte
                weitergegeben. Betroffene Personen sind jederzeit berechtigt,
                die diesbezügliche gesonderte, über das Double-Opt-In-Verfahren
                abgegebene Einwilligungserklärung zu widerrufen. Nach einem
                Widerruf werden diese personenbezogenen Daten von dem für die
                Verarbeitung Verantwortlichen gelöscht. Eine Abmeldung vom
                Erhalt des Newsletters deutet die Hopf & Hopf GmbH automatisch
                als Widerruf.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>8. Kontaktmöglichkeit über die Internetseite</Title>
            <TextWrapper>
              <Text>
                Die Internetseite der Hopf & Hopf GmbH enthält aufgrund von
                gesetzlichen Vorschriften Angaben, die eine schnelle
                elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine
                unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls
                eine allgemeine Adresse der sogenannten elektronischen Post
                (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per
                E-Mail oder über ein Kontaktformular den Kontakt mit dem für die
                Verarbeitung Verantwortlichen aufnimmt, werden die von der
                betroffenen Person übermittelten personenbezogenen Daten
                automatisch gespeichert. Solche auf freiwilliger Basis von einer
                betroffenen Person an den für die Verarbeitung Verantwortlichen
                übermittelten personenbezogenen Daten werden für Zwecke der
                Bearbeitung oder der Kontaktaufnahme zur betroffenen Person
                gespeichert. Es erfolgt keine Weitergabe dieser
                personenbezogenen Daten an Dritte.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              9. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche verarbeitet und
                speichert personenbezogene Daten der betroffenen Person nur für
                den Zeitraum, der zur Erreichung des Speicherungszwecks
                erforderlich ist oder sofern dies durch den Europäischen
                Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber
                in Gesetzen oder Vorschriften, welchen der für die Verarbeitung
                Verantwortliche unterliegt, vorgesehen wurde.
              </Text>
              <Text>
                Entfällt der Speicherungszweck oder läuft eine vom Europäischen
                Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
                Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
                personenbezogenen Daten routinemäßig und entsprechend den
                gesetzlichen Vorschriften gesperrt oder gelöscht.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>10. Rechte der betroffenen Person</Title>
            <TextWrapper>
              <Text></Text>
              <ListWrapper>
                <ListItem>
                  <Title>a) Recht auf Bestätigung</Title>
                  <Text>
                    Jede betroffene Person hat das vom Europäischen Richtlinien-
                    und Verordnungsgeber eingeräumte Recht, von dem für die
                    Verarbeitung Verantwortlichen eine Bestätigung darüber zu
                    verlangen, ob sie betreffende personenbezogene Daten
                    verarbeitet werden. Möchte eine betroffene Person dieses
                    Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu
                    jederzeit an einen Mitarbeiter des für die Verarbeitung
                    Verantwortlichen wenden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>b) Recht auf Auskunft</Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, jederzeit von dem für die
                    Verarbeitung Verantwortlichen unentgeltliche Auskunft über
                    die zu seiner Person gespeicherten personenbezogenen Daten
                    und eine Kopie dieser Auskunft zu erhalten. Ferner hat der
                    Europäische Richtlinien- und Verordnungsgeber der
                    betroffenen Person Auskunft über folgende Informationen
                    zugestanden:
                  </Text>
                  <ListWrapper $inSide>
                    <listItem>die Verarbeitungszwecke</listItem>
                    <listItem>
                      die Kategorien personenbezogener Daten, die verarbeitet
                      werden
                    </listItem>
                    <listItem>
                      die Empfänger oder Kategorien von Empfängern, gegenüber
                      denen die personenbezogenen Daten offengelegt worden sind
                      oder noch offengelegt werden, insbesondere bei Empfängern
                      in Drittländern oder bei internationalen Organisationen
                    </listItem>
                    <listItem>
                      falls möglich die geplante Dauer, für die die
                      personenbezogenen Daten gespeichert werden, oder, falls
                      dies nicht möglich ist, die Kriterien für die Festlegung
                      dieser Dauer
                    </listItem>
                    <listItem>
                      das Bestehen eines Rechts auf Berichtigung oder Löschung
                      der sie betreffenden personenbezogenen Daten oder auf
                      Einschränkung der Verarbeitung durch den Verantwortlichen
                      oder eines Widerspruchsrechts gegen diese Verarbeitung
                    </listItem>
                    <listItem>
                      das Bestehen eines Beschwerderechts bei einer
                      Aufsichtsbehörde
                    </listItem>
                    <listItem>
                      wenn die personenbezogenen Daten nicht bei der betroffenen
                      Person erhoben werden: Alle verfügbaren Informationen über
                      die Herkunft der Daten
                    </listItem>
                    <listItem>
                      das Bestehen einer automatisierten Entscheidungsfindung
                      einschließlich Profiling gemäß Artikel 22 Abs.1 und 4
                      DS-GVO und — zumindest in diesen Fällen — aussagekräftige
                      Informationen über die involvierte Logik sowie die
                      Tragweite und die angestrebten Auswirkungen einer
                      derartigen Verarbeitung für die betroffene Person
                    </listItem>
                  </ListWrapper>
                  <Text>
                    Ferner steht der betroffenen Person ein Auskunftsrecht
                    darüber zu, ob personenbezogene Daten an ein Drittland oder
                    an eine internationale Organisation übermittelt wurden.
                    Sofern dies der Fall ist, so steht der betroffenen Person im
                    Übrigen das Recht zu, Auskunft über die geeigneten Garantien
                    im Zusammenhang mit der Übermittlung zu erhalten.
                  </Text>
                  <Text>
                    Möchte eine betroffene Person dieses Auskunftsrecht in
                    Anspruch nehmen, kann sie sich hierzu jederzeit an einen
                    Mitarbeiter des für die Verarbeitung Verantwortlichen
                    wenden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>c) Recht auf Berichtigung</Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, die unverzügliche
                    Berichtigung sie betreffender unrichtiger personenbezogener
                    Daten zu verlangen. Ferner steht der betroffenen Person das
                    Recht zu, unter Berücksichtigung der Zwecke der
                    Verarbeitung, die Vervollständigung unvollständiger
                    personenbezogener Daten — auch mittels einer ergänzenden
                    Erklärung — zu verlangen.
                  </Text>
                  <Text>
                    Möchte eine betroffene Person dieses Berichtigungsrecht in
                    Anspruch nehmen, kann sie sich hierzu jederzeit an einen
                    Mitarbeiter des für die Verarbeitung Verantwortlichen
                    wenden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>
                    d) Recht auf Löschung (Recht auf Vergessen werden)
                  </Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu
                    verlangen, dass die sie betreffenden personenbezogenen Daten
                    unverzüglich gelöscht werden, sofern einer der folgenden
                    Gründe zutrifft und soweit die Verarbeitung nicht
                    erforderlich ist:
                  </Text>
                  <ListWrapper $inSide>
                    <ListItem>
                      Die personenbezogenen Daten wurden für solche Zwecke
                      erhoben oder auf sonstige Weise verarbeitet, für welche
                      sie nicht mehr notwendig sind.
                    </ListItem>
                    <ListItem>
                      Die betroffene Person widerruft ihre Einwilligung, auf die
                      sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a
                      DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und
                      es fehlt an einer anderweitigen Rechtsgrundlage für die
                      Verarbeitung.
                    </ListItem>
                    <ListItem>
                      Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO
                      Widerspruch gegen die Verarbeitung ein, und es liegen
                      keine vorrangigen berechtigten Gründe für die Verarbeitung
                      vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2
                      DS-GVO Widerspruch gegen die Verarbeitung ein.
                    </ListItem>
                    <ListItem>
                      Die personenbezogenen Daten wurden unrechtmäßig
                      verarbeitet.
                    </ListItem>
                    <ListItem>
                      Die Löschung der personenbezogenen Daten ist zur Erfüllung
                      einer rechtlichen Verpflichtung nach dem Unionsrecht oder
                      dem Recht der Mitgliedstaaten erforderlich, dem der
                      Verantwortliche unterliegt.
                    </ListItem>
                    <ListItem>
                      Die personenbezogenen Daten wurden in Bezug auf angebotene
                      Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1
                      DS-GVO erhoben.
                    </ListItem>
                  </ListWrapper>
                  <Text>
                    Sofern einer der oben genannten Gründe zutrifft und eine
                    betroffene Person die Löschung von personenbezogenen Daten,
                    die bei der Hopf & Hopf GmbH gespeichert sind, veranlassen
                    möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter
                    des für die Verarbeitung Verantwortlichen wenden. Der
                    Mitarbeiter der Hopf & Hopf GmbH wird veranlassen, dass dem
                    Löschverlangen unverzüglich nachgekommen wird.
                  </Text>
                  <Text>
                    Wurden die personenbezogenen Daten von der Hopf & Hopf GmbH
                    öffentlich gemacht und ist unser Unternehmen als
                    Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung
                    der personenbezogenen Daten verpflichtet, so trifft die Hopf
                    & Hopf GmbH unter Berücksichtigung der verfügbaren
                    Technologie und der Implementierungskosten angemessene
                    Maßnahmen, auch technischer Art, um andere für die
                    Datenverarbeitung Verantwortliche, welche die
                    veröffentlichten personenbezogenen Daten verarbeiten,
                    darüber in Kenntnis zu setzen, dass die betroffene Person
                    von diesen anderen für die Datenverarbeitung
                    Verantwortlichen die Löschung sämtlicher Links zu diesen
                    personenbezogenen Daten oder von Kopien oder Replikationen
                    dieser personenbezogenen Daten verlangt hat, soweit die
                    Verarbeitung nicht erforderlich ist. Der Mitarbeiter der
                    Hopf & Hopf GmbH wird im Einzelfall das Notwendige
                    veranlassen.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>e) Recht auf Einschränkung der Verarbeitung</Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, von dem Verantwortlichen
                    die Einschränkung der Verarbeitung zu verlangen, wenn eine
                    der folgenden Voraussetzungen gegeben ist:
                  </Text>
                  <ListWrapper $inSide>
                    <ListItem>
                      Die Richtigkeit der personenbezogenen Daten wird von der
                      betroffenen Person bestritten, und zwar für eine Dauer,
                      die es dem Verantwortlichen ermöglicht, die Richtigkeit
                      der personenbezogenen Daten zu überprüfen.
                    </ListItem>
                    <ListItem>
                      Die Verarbeitung ist unrechtmäßig, die betroffene Person
                      lehnt die Löschung der personenbezogenen Daten ab und
                      verlangt stattdessen die Einschränkung der Nutzung der
                      personenbezogenen Daten.
                    </ListItem>
                    <ListItem>
                      Der Verantwortliche benötigt die personenbezogenen Daten
                      für die Zwecke der Verarbeitung nicht länger, die
                      betroffene Person benötigt sie jedoch zur Geltendmachung,
                      Ausübung oder Verteidigung von Rechtsansprüchen.
                    </ListItem>
                    <ListItem>
                      Die betroffene Person hat Widerspruch gegen die
                      Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es
                      steht noch nicht fest, ob die berechtigten Gründe des
                      Verantwortlichen gegenüber denen der betroffenen Person
                      überwiegen.
                    </ListItem>
                  </ListWrapper>
                  <Text>
                    Sofern eine der oben genannten Voraussetzungen gegeben ist
                    und eine betroffene Person die Einschränkung von
                    personenbezogenen Daten, die bei der Hopf & Hopf GmbH
                    gespeichert sind, verlangen möchte, kann sie sich hierzu
                    jederzeit an einen Mitarbeiter des für die Verarbeitung
                    Verantwortlichen wenden. Der Mitarbeiter der Hopf & Hopf
                    GmbH wird die Einschränkung der Verarbeitung veranlassen.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>f) Recht auf Datenübertragbarkeit</Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, die sie betreffenden
                    personenbezogenen Daten, welche durch die betroffene Person
                    einem Verantwortlichen bereitgestellt wurden, in einem
                    strukturierten, gängigen und maschinenlesbaren Format zu
                    erhalten. Sie hat außerdem das Recht, diese Daten einem
                    anderen Verantwortlichen ohne Behinderung durch den
                    Verantwortlichen, dem die personenbezogenen Daten
                    bereitgestellt wurden, zu übermitteln, sofern die
                    Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1
                    Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO
                    oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b
                    DS-GVO beruht und die Verarbeitung mithilfe automatisierter
                    Verfahren erfolgt, sofern die Verarbeitung nicht für die
                    Wahrnehmung einer Aufgabe erforderlich ist, die im
                    öffentlichen Interesse liegt oder in Ausübung öffentlicher
                    Gewalt erfolgt, welche dem Verantwortlichen übertragen
                    wurde.
                  </Text>
                  <Text>
                    Ferner hat die betroffene Person bei der Ausübung ihres
                    Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO
                    das Recht, zu erwirken, dass die personenbezogenen Daten
                    direkt von einem Verantwortlichen an einen anderen
                    Verantwortlichen übermittelt werden, soweit dies technisch
                    machbar ist und sofern hiervon nicht die Rechte und
                    Freiheiten anderer Personen beeinträchtigt werden.
                  </Text>
                  <Text>
                    Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann
                    sich die betroffene Person jederzeit an einen Mitarbeiter
                    der Hopf & Hopf GmbH wenden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>g) Recht auf Widerspruch</Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, aus Gründen, die sich aus
                    ihrer besonderen Situation ergeben, jederzeit gegen die
                    Verarbeitung sie betreffender personenbezogener Daten, die
                    aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO
                    erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling.
                  </Text>
                  <Text>
                    Die Hopf & Hopf GmbH verarbeitet die personenbezogenen Daten
                    im Falle des Widerspruchs nicht mehr, es sei denn, wir
                    können zwingende schutzwürdige Gründe für die Verarbeitung
                    nachweisen, die den Interessen, Rechten und Freiheiten der
                    betroffenen Person überwiegen, oder die Verarbeitung dient
                    der Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen.
                  </Text>
                  <Text>
                    Verarbeitet die Hopf & Hopf GmbH personenbezogene Daten, um
                    Direktwerbung zu betreiben, so hat die betroffene Person das
                    Recht, jederzeit Widerspruch gegen die Verarbeitung der
                    personenbezogenen Daten zum Zwecke derartiger Werbung
                    einzulegen. Dies gilt auch für das Profiling, soweit es mit
                    solcher Direktwerbung in Verbindung steht. Widerspricht die
                    betroffene Person gegenüber der Hopf & Hopf GmbH der
                    Verarbeitung für Zwecke der Direktwerbung, so wird die Hopf
                    & Hopf GmbH die personenbezogenen Daten nicht mehr für diese
                    Zwecke verarbeiten.
                  </Text>
                  <Text>
                    Zudem hat die betroffene Person das Recht, aus Gründen, die
                    sich aus ihrer besonderen Situation ergeben, gegen die sie
                    betreffende Verarbeitung personenbezogener Daten, die bei
                    der Hopf & Hopf GmbH zu wissenschaftlichen oder historischen
                    Forschungszwecken oder zu statistischen Zwecken gemäß Art.
                    89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei
                    denn, eine solche Verarbeitung ist zur Erfüllung einer im
                    öffentlichen Interesse liegenden Aufgabe erforderlich.
                  </Text>
                  <Text>
                    Zur Ausübung des Rechts auf Widerspruch kann sich die
                    betroffene Person direkt an jeden Mitarbeiter der Hopf &
                    Hopf GmbH oder einen anderen Mitarbeiter wenden. Der
                    betroffenen Person steht es ferner frei, im Zusammenhang mit
                    der Nutzung von Diensten der Informationsgesellschaft,
                    ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht
                    mittels automatisierter Verfahren auszuüben, bei denen
                    technische Spezifikationen verwendet werden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>
                    h) Automatisierte Entscheidungen im Einzelfall
                    einschließlich Profiling
                  </Title>
                  <Text>
                    Jede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, nicht einer ausschließlich
                    auf einer automatisierten Verarbeitung — einschließlich
                    Profiling — beruhenden Entscheidung unterworfen zu werden,
                    die ihr gegenüber rechtliche Wirkung entfaltet oder sie in
                    ähnlicher Weise erheblich beeinträchtigt, sofern die
                    Entscheidung (1) nicht für den Abschluss oder die Erfüllung
                    eines Vertrags zwischen der betroffenen Person und dem
                    Verantwortlichen erforderlich ist, oder (2) aufgrund von
                    Rechtsvorschriften der Union oder der Mitgliedstaaten, denen
                    der Verantwortliche unterliegt, zulässig ist und diese
                    Rechtsvorschriften angemessene Maßnahmen zur Wahrung der
                    Rechte und Freiheiten sowie der berechtigten Interessen der
                    betroffenen Person enthalten oder (3) mit ausdrücklicher
                    Einwilligung der betroffenen Person erfolgt.
                  </Text>
                  <Text>
                    Ist die Entscheidung (1) für den Abschluss oder die
                    Erfüllung eines Vertrags zwischen der betroffenen Person und
                    dem Verantwortlichen erforderlich oder (2) erfolgt sie mit
                    ausdrücklicher Einwilligung der betroffenen Person, trifft
                    die Hopf & Hopf GmbH angemessene Maßnahmen, um die Rechte
                    und Freiheiten sowie die berechtigten Interessen der
                    betroffenen Person zu wahren, wozu mindestens das Recht auf
                    Erwirkung des Eingreifens einer Person seitens des
                    Verantwortlichen, auf Darlegung des eigenen Standpunkts und
                    auf Anfechtung der Entscheidung gehört.
                  </Text>
                  <Text>
                    Möchte die betroffene Person Rechte mit Bezug auf
                    automatisierte Entscheidungen geltend machen, kann sie sich
                    hierzu jederzeit an einen Mitarbeiter des für die
                    Verarbeitung Verantwortlichen wenden.
                  </Text>
                </ListItem>
                <ListItem>
                  <Title>
                    i) Recht auf Widerruf einer datenschutzrechtlichen
                    Einwilligung
                  </Title>
                  <Text>
                    ede von der Verarbeitung personenbezogener Daten betroffene
                    Person hat das vom Europäischen Richtlinien- und
                    Verordnungsgeber gewährte Recht, eine Einwilligung zur
                    Verarbeitung personenbezogener Daten jederzeit zu
                    widerrufen.
                  </Text>
                  <Text>
                    Möchte die betroffene Person ihr Recht auf Widerruf einer
                    Einwilligung geltend machen, kann sie sich hierzu jederzeit
                    an einen Mitarbeiter des für die Verarbeitung
                    Verantwortlichen wenden.
                  </Text>
                </ListItem>
              </ListWrapper>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              11. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten des Unternehmens Facebook integriert.
                Facebook ist ein soziales Netzwerk.
              </Text>
              <Text>
                Ein soziales Netzwerk ist ein im Internet betriebener sozialer
                Treffpunkt, eine Online-Gemeinschaft, die es den Nutzern in der
                Regel ermöglicht, untereinander zu kommunizieren und im
                virtuellen Raum zu interagieren. Ein soziales Netzwerk kann als
                Plattform zum Austausch von Meinungen und Erfahrungen dienen
                oder ermöglicht es der Internetgemeinschaft, persönliche oder
                unternehmensbezogene Informationen bereitzustellen. Facebook
                ermöglicht den Nutzern des sozialen Netzwerkes unter anderem die
                Erstellung von privaten Profilen, den Upload von Fotos und eine
                Vernetzung über Freundschaftsanfragen.
              </Text>
              <Text>
                Betreibergesellschaft von Facebook ist die Facebook, Inc., 1
                Hacker Way, Menlo Park, CA 94025, USA. Für die Verarbeitung
                personenbezogener Daten Verantwortlicher ist, wenn eine
                betroffene Person außerhalb der USA oder Kanada lebt, die
                Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                Harbour, Dublin 2, Ireland.
              </Text>
              <Text>
                Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
                die durch den für die Verarbeitung Verantwortlichen betrieben
                wird und auf welcher eine Facebook-Komponente (Facebook-Plug-In)
                integriert wurde, wird der Internetbrowser auf dem
                informationstechnologischen System der betroffenen Person
                automatisch durch die jeweilige Facebook-Komponente veranlasst,
                eine Darstellung der entsprechenden Facebook-Komponente von
                Facebook herunterzuladen. Eine Gesamtübersicht über alle
                Facebook-Plug-Ins kann{' '}
                <a
                  href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                  target="_blank"
                  rel="noreferrer"
                >
                  unter
                </a>{' '}
                abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält
                Facebook Kenntnis darüber, welche konkrete Unterseite unserer
                Internetseite durch die betroffene Person besucht wird.
              </Text>
              <Text>
                Sofern die betroffene Person gleichzeitig bei Facebook
                eingeloggt ist, erkennt Facebook mit jedem Aufruf unserer
                Internetseite durch die betroffene Person und während der
                gesamten Dauer des jeweiligen Aufenthaltes auf unserer
                Internetseite, welche konkrete Unterseite unserer Internetseite
                die betroffene Person besucht. Diese Informationen werden durch
                die Facebook-Komponente gesammelt und durch Facebook dem
                jeweiligen Facebook-Account der betroffenen Person zugeordnet.
                Betätigt die betroffene Person einen der auf unserer
                Internetseite integrierten Facebook-Buttons, beispielsweise den
                „Gefällt mir“-Button, oder gibt die betroffene Person einen
                Kommentar ab, ordnet Facebook diese Information dem persönlichen
                Facebook-Benutzerkonto der betroffenen Person zu und speichert
                diese personenbezogenen Daten.
              </Text>
              <Text>
                Facebook erhält über die Facebook-Komponente immer dann eine
                Information darüber, dass die betroffene Person unsere
                Internetseite besucht hat, wenn die betroffene Person zum
                Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
                Facebook eingeloggt ist; dies findet unabhängig davon statt, ob
                die betroffene Person die Facebook-Komponente anklickt oder
                nicht. Ist eine derartige Übermittlung dieser Informationen an
                Facebook von der betroffenen Person nicht gewollt, kann diese
                die Übermittlung dadurch verhindern, dass sie sich vor einem
                Aufruf unserer Internetseite aus ihrem Facebook-Account
                ausloggt.
              </Text>
              <Text>
                Die von Facebook veröffentlichte Datenrichtlinie, die{' '}
                <a
                  href="https://de-de.facebook.com/about/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  unter
                </a>{' '}
                abrufbar ist, gibt Aufschluss über die Erhebung, Verarbeitung
                und Nutzung personenbezogener Daten durch Facebook. Ferner wird
                dort erläutert, welche Einstellungsmöglichkeiten Facebook zum
                Schutz der Privatsphäre der betroffenen Person bietet. Zudem
                sind unterschiedliche Applikationen erhältlich, die es
                ermöglichen, eine Datenübermittlung an Facebook zu unterdrücken.
                Solche Applikationen können durch die betroffene Person genutzt
                werden, um eine Datenübermittlung an Facebook zu unterdrücken.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              12. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
              AdSense
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Google AdSense integriert. Google AdSense ist ein
                Online-Dienst, über welchen eine Vermittlung von Werbung auf
                Drittseiten ermöglicht wird. Google AdSense beruht auf einem
                Algorithmus, welcher die auf Drittseiten angezeigten
                Werbeanzeigen passend zu den Inhalten der jeweiligen Drittseite
                auswählt. Google AdSense gestattet ein interessenbezogenes
                Targeting des Internetnutzers, welches mittels Generierung von
                individuellen Benutzerprofilen umgesetzt wird.
              </Text>
              <Text>
                Betreibergesellschaft der Google-AdSense-Komponente ist die
                Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
                E5W5, Ireland.
              </Text>
              <Text>
                Der Zweck der Google-AdSense-Komponente ist die Einbindung von
                Werbeanzeigen auf unserer Internetseite. Google-AdSense setzt
                ein Cookie auf dem informationstechnologischen System der
                betroffenen Person. Was Cookies sind, wurde oben bereits
                erläutert. Mit der Setzung des Cookies wird der Alphabet Inc.
                eine Analyse der Benutzung unserer Internetseite ermöglicht.
                Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
                die durch den für die Verarbeitung Verantwortlichen betrieben
                wird und auf welcher eine Google-AdSense-Komponente integriert
                wurde, wird der Internetbrowser auf dem
                informationstechnologischen System der betroffenen Person
                automatisch durch die jeweilige Google-AdSense-Komponente
                veranlasst, Daten zum Zwecke der Online-Werbung und der
                Abrechnung von Provisionen an die Alphabet Inc. zu übermitteln.
                Im Rahmen dieses technischen Verfahrens erhält die Alphabet Inc.
                Kenntnis über personenbezogene Daten, wie der IP-Adresse der
                betroffenen Person, die der Alphabet Inc. unter anderem dazu
                dienen, die Herkunft der Besucher und Klicks nachzuvollziehen
                und in der Folge Provisionsabrechnungen zu ermöglichen.
              </Text>
              <Text>
                Die betroffene Person kann die Setzung von Cookies durch unsere
                Internetseite, wie oben bereits dargestellt, jederzeit mittels
                einer entsprechenden Einstellung des genutzten Internetbrowsers
                verhindern und damit der Setzung von Cookies dauerhaft
                widersprechen. Eine solche Einstellung des genutzten
                Internetbrowsers würde auch verhindern, dass die Alphabet Inc.
                ein Cookie auf dem informationstechnologischen System der
                betroffenen Person setzt. Zudem kann ein von der Alphabet Inc.
                bereits gesetzter Cookie jederzeit über den Internetbrowser oder
                andere Softwareprogramme gelöscht werden.
              </Text>
              <Text>
                Google AdSense verwendet zudem sogenannte Zählpixel. Ein
                Zählpixel ist eine Miniaturgrafik, die in Internetseiten
                eingebettet wird, um eine Logdatei-Aufzeichnung und eine
                Logdatei-Analyse zu ermöglichen, wodurch eine statistische
                Auswertung durchgeführt werden kann. Anhand des eingebetteten
                Zählpixels kann die Alphabet Inc. erkennen, ob und wann eine
                Internetseite von einer betroffenen Person geöffnet wurde und
                welche Links von der betroffenen Person angeklickt wurden.
                Zählpixel dienen unter anderem dazu, den Besucherfluss einer
                Internetseite auszuwerten.
              </Text>
              <Text>
                Über Google AdSense werden personenbezogene Daten und
                Informationen, was auch die IP-Adresse umfasst und zur Erfassung
                und Abrechnung der angezeigten Werbeanzeigen notwendig ist, an
                die Alphabet Inc. in die Vereinigten Staaten von Amerika
                übertragen. Diese personenbezogenen Daten werden in den
                Vereinigten Staaten von Amerika gespeichert und verarbeitet. Die
                Alphabet Inc. gibt diese über das technische Verfahren erhobenen
                personenbezogenen Daten unter Umständen an Dritte weiter.
              </Text>
              <Text>
                Google-AdSense wird unter diesem{' '}
                <a
                  href="https://www.google.de/intl/de/adsense/start/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>{' '}
                genauer erläutert.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              13. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
              Analytics (mit Anonymisierungsfunktion)
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite die Komponente Google Analytics (mit
                Anonymisierungsfunktion) integriert. Google Analytics ist ein
                Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und
                Auswertung von Daten über das Verhalten von Besuchern von
                Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem
                Daten darüber, von welcher Internetseite eine betroffene Person
                auf eine Internetseite gekommen ist (sogenannte Referrer), auf
                welche Unterseiten der Internetseite zugegriffen oder wie oft
                und für welche Verweildauer eine Unterseite betrachtet wurde.
                Eine Web-Analyse wird überwiegend zur Optimierung einer
                Internetseite und zur Kosten-Nutzen-Analyse von Internetwerbung
                eingesetzt.
              </Text>
              <Text>
                Betreibergesellschaft der Google-Analytics-Komponente ist die
                Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
                E5W5, Ireland.
              </Text>
              <Text>
                Der für die Verarbeitung Verantwortliche verwendet für die
                Web-Analyse über Google Analytics den Zusatz _gat._anonymizeIp.
                Mittels dieses Zusatzes wird die IP-Adresse des
                Internetanschlusses der betroffenen Person von Google gekürzt
                und anonymisiert, wenn der Zugriff auf unsere Internetseiten aus
                einem Mitgliedstaat der Europäischen Union oder aus einem
                anderen Vertragsstaat des Abkommens über den Europäischen
                Wirtschaftsraum erfolgt.
              </Text>
              <Text>
                Der Zweck der Google-Analytics-Komponente ist die Analyse der
                Besucherströme auf unserer Internetseite. Google nutzt die
                gewonnenen Daten und Informationen unter anderem dazu, die
                Nutzung unserer Internetseite auszuwerten, um für uns
                Online-Reports, welche die Aktivitäten auf unseren
                Internetseiten aufzeigen, zusammenzustellen, und um weitere mit
                der Nutzung unserer Internetseite in Verbindung stehende
                Dienstleistungen zu erbringen.
              </Text>
              <Text>
                Google Analytics setzt ein Cookie auf dem
                informationstechnologischen System der betroffenen Person. Was
                Cookies sind, wurde oben bereits erläutert. Mit Setzung des
                Cookies wird Google eine Analyse der Benutzung unserer
                Internetseite ermöglicht. Durch jeden Aufruf einer der
                Einzelseiten dieser Internetseite, die durch den für die
                Verarbeitung Verantwortlichen betrieben wird und auf welcher
                eine Google-Analytics-Komponente integriert wurde, wird der
                Internetbrowser auf dem informationstechnologischen System der
                betroffenen Person automatisch durch die jeweilige
                Google-Analytics-Komponente veranlasst, Daten zum Zwecke der
                Online-Analyse an Google zu übermitteln. Im Rahmen dieses
                technischen Verfahrens erhält Google Kenntnis über
                personenbezogene Daten, wie der IP-Adresse der betroffenen
                Person, die Google unter anderem dazu dienen, die Herkunft der
                Besucher und Klicks nachzuvollziehen und in der Folge
                Provisionsabrechnungen zu ermöglichen.
              </Text>
              <Text>
                Mittels des Cookies werden personenbezogene Informationen,
                beispielsweise die Zugriffszeit, der Ort, von welchem ein
                Zugriff ausging und die Häufigkeit der Besuche unserer
                Internetseite durch die betroffene Person, gespeichert. Bei
                jedem Besuch unserer Internetseiten werden diese
                personenbezogenen Daten, einschließlich der IP-Adresse des von
                der betroffenen Person genutzten Internetanschlusses, an Google
                in den Vereinigten Staaten von Amerika übertragen. Diese
                personenbezogenen Daten werden durch Google in den Vereinigten
                Staaten von Amerika gespeichert. Google gibt diese über das
                technische Verfahren erhobenen personenbezogenen Daten unter
                Umständen an Dritte weiter.
              </Text>
              <Text>
                Die betroffene Person kann die Setzung von Cookies durch unsere
                Internetseite, wie oben bereits dargestellt, jederzeit mittels
                einer entsprechenden Einstellung des genutzten Internetbrowsers
                verhindern und damit der Setzung von Cookies dauerhaft
                widersprechen. Eine solche Einstellung des genutzten
                Internetbrowsers würde auch verhindern, dass Google ein Cookie
                auf dem informationstechnologischen System der betroffenen
                Person setzt. Zudem kann ein von Google Analytics bereits
                gesetzter Cookie jederzeit über den Internetbrowser oder andere
                Softwareprogramme gelöscht werden.
              </Text>
              <Text>
                Ferner besteht für die betroffene Person die Möglichkeit, einer
                Erfassung der durch Google Analytics erzeugten, auf eine Nutzung
                dieser Internetseite bezogenen Daten sowie der Verarbeitung
                dieser Daten durch Google zu widersprechen und eine solche zu
                verhindern. Hierzu muss die betroffene Person ein Browser-Add-On
                unter dem{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>{' '}
                herunterladen und installieren. Dieses Browser-Add-On teilt
                Google Analytics über JavaScript mit, dass keine Daten und
                Informationen zu den Besuchen von Internetseiten an Google
                Analytics übermittelt werden dürfen. Die Installation des
                Browser-Add-Ons wird von Google als Widerspruch gewertet. Wird
                das informationstechnologische System der betroffenen Person zu
                einem späteren Zeitpunkt gelöscht, formatiert oder neu
                installiert, muss durch die betroffene Person eine erneute
                Installation des Browser-Add-Ons erfolgen, um Google Analytics
                zu deaktivieren. Sofern das Browser-Add-On durch die betroffene
                Person oder einer anderen Person, die ihrem Machtbereich
                zuzurechnen ist, deinstalliert oder deaktiviert wird, besteht
                die Möglichkeit der Neuinstallation oder der erneuten
                Aktivierung des Browser-Add-Ons.
              </Text>
              <Text>
                Weitere Informationen und die geltenden Datenschutzbestimmungen
                von Google können unter{' '}
                <a
                  href="https://www.google.de/intl/de/policies/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.google.de/intl/de/policies/privacy/
                </a>{' '}
                und unter{' '}
                <a
                  href="http://www.google.com/analytics/terms/de.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.google.com/analytics/terms/de.html
                </a>{' '}
                abgerufen werden. Google Analytics wird unter diesem{' '}
                <a
                  href="https://www.google.com/intl/de_de/analytics/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>{' '}
                genauer erläutert.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              14. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
              Remarketing
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Dienste von Google Remarketing integriert. Google
                Remarketing ist eine Funktion von Google-AdWords, die es einem
                Unternehmen ermöglicht, bei solchen Internetnutzern Werbung
                einblenden zu lassen, die sich zuvor auf der Internetseite des
                Unternehmens aufgehalten haben. Die Integration von Google
                Remarketing gestattet es einem Unternehmen demnach,
                nutzerbezogene Werbung zu erstellen und dem Internetnutzer
                folglich interessenrelevante Werbeanzeigen anzeigen zu lassen.
              </Text>
              <Text>
                Betreibergesellschaft der Dienste von Google Remarketing ist die
                Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
                E5W5, Ireland.
              </Text>
              <Text>
                Zweck von Google Remarketing ist die Einblendung von
                interessenrelevanter Werbung. Google Remarketing ermöglicht es
                uns, Werbeanzeigen über das Google-Werbenetzwerk anzuzeigen oder
                auf anderen Internetseiten anzeigen zu lassen, welche auf die
                individuellen Bedürfnisse und Interessen von Internetnutzern
                abgestimmt sind.
              </Text>
              <Text>
                Google Remarketing setzt ein Cookie auf dem
                informationstechnologischen System der betroffenen Person. Was
                Cookies sind, wurde oben bereits erläutert. Mit der Setzung des
                Cookies wird Google eine Wiedererkennung des Besuchers unserer
                Internetseite ermöglicht, wenn dieser in der Folge
                Internetseiten aufruft, die ebenfalls Mitglied des
                Google-Werbenetzwerks sind. Mit jedem Aufruf einer
                Internetseite, auf welcher der Dienst von Google Remarketing
                integriert wurde, identifiziert sich der Internetbrowser der
                betroffenen Person automatisch bei Google. Im Rahmen dieses
                technischen Verfahrens erhält Google Kenntnis über
                personenbezogene Daten, wie der IP-Adresse oder des
                Surfverhaltens des Nutzers, welche Google unter anderem zur
                Einblendung interessenrelevanter Werbung verwendet.
              </Text>
              <Text>
                Mittels des Cookies werden personenbezogene Informationen,
                beispielsweise die durch die betroffene Person besuchten
                Internetseiten, gespeichert. Bei jedem Besuch unserer
                Internetseiten werden demnach personenbezogene Daten,
                einschließlich der IP-Adresse des von der betroffenen Person
                genutzten Internetanschlusses, an Google in den Vereinigten
                Staaten von Amerika übertragen. Diese personenbezogenen Daten
                werden durch Google in den Vereinigten Staaten von Amerika
                gespeichert. Google gibt diese über das technische Verfahren
                erhobenen personenbezogenen Daten unter Umständen an Dritte
                weiter.
              </Text>
              <Text>
                Die betroffene Person kann die Setzung von Cookies durch unsere
                Internetseite, wie oben bereits dargestellt, jederzeit mittels
                einer entsprechenden Einstellung des genutzten Internetbrowsers
                verhindern und damit der Setzung von Cookies dauerhaft
                widersprechen. Eine solche Einstellung des genutzten
                Internetbrowsers würde auch verhindern, dass Google ein Cookie
                auf dem informationstechnologischen System der betroffenen
                Person setzt. Zudem kann ein von Google Analytics bereits
                gesetzter Cookie jederzeit über den Internetbrowser oder andere
                Softwareprogramme gelöscht werden.
              </Text>
              <Text>
                Ferner besteht für die betroffene Person die Möglichkeit, der
                interessenbezogenen Werbung durch Google zu widersprechen.
                Hierzu muss die betroffene Person von jedem der von ihr
                genutzten Internetbrowser aus den Link{' '}
                <a
                  href="www.google.de/settings/ads"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.google.de/settings/ads
                </a>{' '}
                aufrufen und dort die gewünschten Einstellungen vornehmen.
              </Text>
              <Text>
                Weitere Informationen und die geltenden Datenschutzbestimmungen
                von Google können unter{' '}
                <a
                  href="https://www.google.de/intl/de/policies/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.google.de/intl/de/policies/privacy/
                </a>{' '}
                .
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              15. Datenschutzbestimmungen zu Einsatz und Verwendung von
              Instagram
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten des Dienstes Instagram integriert.
                Instagram ist ein Dienst, der als audiovisuelle Plattform zu
                qualifizieren ist und den Nutzern das Teilen von Fotos und
                Videos und zudem eine Weiterverbreitung solcher Daten in anderen
                sozialen Netzwerken ermöglicht.
              </Text>
              <Text>
                Betreibergesellschaft der Dienste von Instagram ist die Facebook
                Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin
                2 Ireland.
              </Text>
              <Text>
                Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
                die durch den für die Verarbeitung Verantwortlichen betrieben
                wird und auf welcher eine Instagram-Komponente (Insta-Button)
                integriert wurde, wird der Internetbrowser auf dem
                informationstechnologischen System der betroffenen Person
                automatisch durch die jeweilige Instagram-Komponente veranlasst,
                eine Darstellung der entsprechenden Komponente von Instagram
                herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält
                Instagram Kenntnis darüber, welche konkrete Unterseite unserer
                Internetseite durch die betroffene Person besucht wird.
              </Text>
              <Text>
                Sofern die betroffene Person gleichzeitig bei Instagram
                eingeloggt ist, erkennt Instagram mit jedem Aufruf unserer
                Internetseite durch die betroffene Person und während der
                gesamten Dauer des jeweiligen Aufenthaltes auf unserer
                Internetseite, welche konkrete Unterseite die betroffene Person
                besucht. Diese Informationen werden durch die
                Instagram-Komponente gesammelt und durch Instagram dem
                jeweiligen Instagram-Account der betroffenen Person zugeordnet.
                Betätigt die betroffene Person einen der auf unserer
                Internetseite integrierten Instagram-Buttons, werden die damit
                übertragenen Daten und Informationen dem persönlichen
                Instagram-Benutzerkonto der betroffenen Person zugeordnet und
                von Instagram gespeichert und verarbeitet.
              </Text>
              <Text>
                Instagram erhält über die Instagram-Komponente immer dann eine
                Information darüber, dass die betroffene Person unsere
                Internetseite besucht hat, wenn die betroffene Person zum
                Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
                Instagram eingeloggt ist; dies findet unabhängig davon statt, ob
                die betroffene Person die Instagram-Komponente anklickt oder
                nicht. Ist eine derartige Übermittlung dieser Informationen an
                Instagram von der betroffenen Person nicht gewollt, kann diese
                die Übermittlung dadurch verhindern, dass sie sich vor einem
                Aufruf unserer Internetseite aus ihrem Instagram-Account
                ausloggt.
              </Text>
              <Text>
                Weitere Informationen und die geltenden Datenschutzbestimmungen
                von Instagram können unter{' '}
                <a
                  href="https://help.instagram.com/155833707900388"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://help.instagram.com/155833707900388
                </a>{' '}
                und{' '}
                <a
                  href=" https://www.instagram.com/about/legal/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/about/legal/privacy/
                </a>{' '}
                abgerufen werden..
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              16. Datenschutzbestimmungen zu Einsatz und Verwendung von LinkedIn
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten der LinkedIn Corporation integriert.
                LinkedIn ist ein Internetbasiertes soziales Netzwerk, das eine
                Konnektierung der Nutzer mit bestehenden Geschäftskontakten
                sowie das Knüpfen von neuen Businesskontakten ermöglicht. Über
                400 Millionen registrierte Personen nutzen LinkedIn in mehr als
                200 Ländern. Damit ist LinkedIn derzeit die größte Plattform für
                Businesskontakte und eine der meistbesuchten Internetseiten der
                Welt.
              </Text>
              <Text>
                Betreibergesellschaft von LinkedIn ist die LinkedIn Corporation,
                2029 Stierlin Court Mountain View, CA 94043, USA. Für
                Datenschutzangelegenheiten außerhalb der USA ist LinkedIn
                Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place,
                Dublin 2, Ireland, zuständig.
              </Text>
              <Text>
                Bei jedem einzelnen Abruf unserer Internetseite, die mit einer
                LinkedIn-Komponente (LinkedIn-Plug-In) ausgestattet ist,
                veranlasst diese Komponente, dass der von der betroffenen Person
                verwendete Browser eine entsprechende Darstellung der Komponente
                von LinkedIn herunterlädt. Weitere Informationen zu den
                LinkedIn-Plug-Ins können unter{' '}
                <a
                  href="https://developer.linkedin.com/plugins"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://developer.linkedin.com/plugins
                </a>{' '}
                abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält
                LinkedIn Kenntnis darüber, welche konkrete Unterseite unserer
                Internetseite durch die betroffene Person besucht wird.
              </Text>
              <Text>
                Sofern die betroffene Person gleichzeitig bei LinkedIn
                eingeloggt ist, erkennt LinkedIn mit jedem Aufruf unserer
                Internetseite durch die betroffene Person und während der
                gesamten Dauer des jeweiligen Aufenthaltes auf unserer
                Internetseite, welche konkrete Unterseite unserer Internetseite
                die betroffene Person besucht. Diese Informationen werden durch
                die LinkedIn-Komponente gesammelt und durch LinkedIn dem
                jeweiligen LinkedIn-Account der betroffenen Person zugeordnet.
                Betätigt die betroffene Person einen auf unserer Internetseite
                integrierten LinkedIn-Button, ordnet LinkedIn diese Information
                dem persönlichen LinkedIn-Benutzerkonto der betroffenen Person
                zu und speichert diese personenbezogenen Daten.
              </Text>
              <Text>
                LinkedIn erhält über die LinkedIn-Komponente immer dann eine
                Information darüber, dass die betroffene Person unsere
                Internetseite besucht hat, wenn die betroffene Person zum
                Zeitpunkt des Aufrufes unserer Internetseite gleichzeitig bei
                LinkedIn eingeloggt ist; dies findet unabhängig davon statt, ob
                die betroffene Person die LinkedIn-Komponente anklickt oder
                nicht. Ist eine derartige Übermittlung dieser Informationen an
                LinkedIn von der betroffenen Person nicht gewollt, kann diese
                die Übermittlung dadurch verhindern, dass sie sich vor einem
                Aufruf unserer Internetseite aus ihrem LinkedIn-Account
                ausloggt.
              </Text>
              <Text>
                LinkedIn bietet unter{' '}
                <a
                  href="https://www.linkedin.com/psettings/guest-controls"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/psettings/guest-controls
                </a>{' '}
                die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und
                zielgerichtete Anzeigen abzubestellen sowie
                Anzeigen-Einstellungen zu verwalten. LinkedIn nutzt ferner
                Partner wie Quantcast, Google Analytics, BlueKai, DoubleClick,
                Nielsen, Comscore, Eloqua und Lotame, die Cookies setzen können.
                Solche Cookies können unter
                <a
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/legal/cookie-policy
                </a>{' '}
                abgelehnt werden. Die geltenden Datenschutzbestimmungen von
                LinkedIn sind unter{' '}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>{' '}
                abrufbar. Die Cookie-Richtlinie von LinkedIn ist unter{' '}
                <a
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/legal/cookie-policy
                </a>{' '}
                .
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              17. Datenschutzbestimmungen zu Einsatz und Verwendung von YouTube
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten von YouTube integriert. YouTube ist
                ein Internet-Videoportal, dass Video-Publishern das kostenlose
                Einstellen von Videoclips und anderen Nutzern die ebenfalls
                kostenfreie Betrachtung, Bewertung und Kommentierung dieser
                ermöglicht. YouTube gestattet die Publikation aller Arten von
                Videos, weshalb sowohl komplette Film- und Fernsehsendungen,
                aber auch Musikvideos, Trailer oder von Nutzern selbst
                angefertigte Videos über das Internetportal abrufbar sind.
              </Text>
              <Text>
                Betreibergesellschaft von YouTube ist die Google Ireland
                Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.
              </Text>
              <Text>
                Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
                die durch den für die Verarbeitung Verantwortlichen betrieben
                wird und auf welcher eine YouTube-Komponente (YouTube-Video)
                integriert wurde, wird der Internetbrowser auf dem
                informationstechnologischen System der betroffenen Person
                automatisch durch die jeweilige YouTube-Komponente veranlasst,
                eine Darstellung der entsprechenden YouTube-Komponente von
                YouTube herunterzuladen. Weitere Informationen zu YouTube können
                unter{' '}
                <a
                  href="https://www.youtube.com/yt/about/de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/yt/about/de/
                </a>{' '}
                abgerufen werden. Im Rahmen dieses technischen Verfahrens
                erhalten YouTube und Google Kenntnis darüber, welche konkrete
                Unterseite unserer Internetseite durch die betroffene Person
                besucht wird.
              </Text>
              <Text>
                Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt
                ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein
                YouTube-Video enthält, welche konkrete Unterseite unserer
                Internetseite die betroffene Person besucht. Diese Informationen
                werden durch YouTube und Google gesammelt und dem jeweiligen
                YouTube-Account der betroffenen Person zugeordnet.
              </Text>
              <Text>
                YouTube und Google erhalten über die YouTube-Komponente immer
                dann eine Information darüber, dass die betroffene Person unsere
                Internetseite besucht hat, wenn die betroffene Person zum
                Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
                YouTube eingeloggt ist; dies findet unabhängig davon statt, ob
                die betroffene Person ein YouTube-Video anklickt oder nicht. Ist
                eine derartige Übermittlung dieser Informationen an YouTube und
                Google von der betroffenen Person nicht gewollt, kann diese die
                Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
                unserer Internetseite aus ihrem YouTube-Account ausloggt.
              </Text>
              <Text>
                Die von YouTube veröffentlichten Datenschutzbestimmungen, die
                unter{' '}
                <a
                  href="https://www.google.de/intl/de/policies/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.google.de/intl/de/policies/privacy/
                </a>{' '}
                abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung
                und Nutzung personenbezogener Daten durch YouTube und Google.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              18. Zahlungsart: Datenschutzbestimmungen zu Klarna als Zahlungsart
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten von Klarna integriert. Klarna ist ein
                Online-Zahlungsdienstleister, der den Kauf auf Rechnung oder
                eine flexible Ratenzahlung ermöglicht. Ferner werden von Klarna
                weitere Services, wie beispielsweise ein Käuferschutz oder eine
                Identitäts- und Bonitätsprüfung, angeboten.
              </Text>
              <Text>
                Betreibergesellschaft von Klarna ist die Klarna Bank AB,
                Sveavägen 46, 111 34 Stockholm, Schweden.
              </Text>
              <Text>
                Wählt die betroffene Person während des Bestellvorgangs in
                unserem Online-Shop als Zahlungsmöglichkeit entweder den „Kauf
                auf Rechnung“ oder „Ratenkauf“ aus, werden automatisiert Daten
                der betroffenen Person an Klarna übermittelt. Mit der Auswahl
                einer dieser Zahlungsoptionen willigt die betroffene Person in
                diese, zur Abwicklung des Rechnungs- oder Ratenkaufes oder zur
                Identitäts- und Bonitätsprüfung erforderliche, Übermittlung
                personenbezogener Daten ein.
              </Text>
              <Text>
                Bei den an Klarna übermittelten personenbezogenen Daten handelt
                es sich in der Regel um Vorname, Nachname, Adresse,
                Geburtsdatum, Geschlecht, Email-Adresse, IP-Adresse,
                Telefonnummer, Mobiltelefonnummer sowie um andere Daten, die zur
                Abwicklung eines Rechnungs- oder Ratenkaufs notwendig sind. Zur
                Abwicklung des Kaufvertrages notwendig sind auch solche
                personenbezogenen Daten, die im Zusammenhang mit der jeweiligen
                Bestellung stehen. Insbesondere kann es zum wechselseitigen
                Austausch von Zahlungsinformationen, wie Bankverbindung,
                Kartennummer, Gültigkeitsdatum und CVC-Code, Artikelanzahl,
                Artikelnummer, Daten zu Waren und Dienstleistungen, Preise und
                steuerliche Abgaben, Angaben zum früheren Kaufverhalten oder
                sonstige Angaben zur finanziellen Situation der betroffenen
                Person, kommen.
              </Text>
              <Text>
                Die Übermittlung der Daten bezweckt insbesondere die
                Identitätsüberprüfung, die Zahlungsadministration und die
                Betrugsprävention. Der für die Verarbeitung Verantwortliche wird
                Klarna personenbezogene Daten insbesondere dann übermitteln,
                wenn ein berechtigtes Interesse für die Übermittlung gegeben
                ist. Die zwischen Klarna und dem für die Verarbeitung
                Verantwortlichen ausgetauschten personenbezogenen Daten werden
                von Klarna an Wirtschaftsauskunfteien übermittelt. Diese
                Übermittlung bezweckt die Identitäts- und Bonitätsprüfung.
              </Text>
              <Text>
                Klarna gibt die personenbezogenen Daten auch an verbundene
                Unternehmen (Klarna Gruppe) und Leistungserbringer oder
                Subunternehmer weiter, soweit dies zur Erfüllung der
                vertraglichen Verpflichtungen erforderlich ist oder die Daten im
                Auftrag verarbeitet werden sollen.
              </Text>
              <Text>
                Zur Entscheidung über die Begründung, Durchführung oder
                Beendigung einer Vertragsbeziehung erhebt und nutzt Klarna Daten
                und Informationen über das bisherige Zahlungsverhalten der
                betroffenen Person sowie Wahrscheinlichkeitswerte für deren
                Verhalten in der Zukunft (sogenanntes Scoring). Die Berechnung
                des Scorings wird auf der Basis wissenschaftlich anerkannter
                mathematisch-statistischer Verfahren durchgeführt.
              </Text>
              <Text>
                Die betroffene Person hat die Möglichkeit, die Einwilligung zum
                Umgang mit personenbezogenen Daten jederzeit gegenüber Klarna zu
                widerrufen. Ein Widerruf wirkt sich nicht auf personenbezogene
                Daten aus, die zwingend zur (vertragsgemäßen) Zahlungsabwicklung
                verarbeitet, genutzt oder übermittelt werden müssen.
              </Text>
              <Text>
                Die geltenden Datenschutzbestimmungen von Klarna können{' '}
                <a
                  href="https://cdn.klarna.com/1.0/shared/content/policy/data/de_de/data_protection.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  unter
                </a>{' '}
                abgerufen werden.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              19. Zahlungsart: Datenschutzbestimmungen zu Sofortüberweisung als
              Zahlungsart
            </Title>
            <TextWrapper>
              <Text>
                Der für die Verarbeitung Verantwortliche hat auf dieser
                Internetseite Komponenten von Sofortüberweisung integriert.
                Sofortüberweisung ist ein Zahlungsdienst, der eine bargeldlose
                Zahlung von Produkten und Dienstleistungen im Internet
                ermöglicht. Sofortüberweisung bildet ein technisches Verfahren
                ab, durch welches der Online-Händler unverzüglich eine
                Zahlungsbestätigung erhält. So wird ein Händler in die Lage
                versetzt, Waren, Dienstleistungen oder Downloads sofort nach der
                Bestellung an den Kunden auszuliefern.
              </Text>
              <Text>
                Betreibergesellschaft von Sofortüberweisung ist die Klarna Bank
                AB, Sveavägen 46, 111 34 Stockholm, Schweden.
              </Text>
              <Text>
                Wählt die betroffene Person während des Bestellvorgangs in
                unserem Online-Shop als Zahlungsmöglichkeit „Sofortüberweisung“
                aus, werden automatisiert Daten der betroffenen Person an
                Sofortüberweisung übermittelt. Mit einer Auswahl dieser
                Zahlungsoption willigt die betroffene Person in eine zur
                Zahlungsabwicklung erforderliche Übermittlung personenbezogener
                Daten ein.
              </Text>
              <Text>
                Bei der Kaufabwicklung über Sofortüberweisung übermittelt der
                Käufer die PIN und die TAN an die Sofort GmbH. Sofortüberweisung
                führt sodann nach technischer Überprüfung des Kontostandes und
                Abruf weiterer Daten zur Prüfung der Kontodeckung eine
                Überweisung an den Online-Händler aus. Die Durchführung der
                Finanztransaktion wird dem Online-Händler sodann automatisiert
                mitgeteilt.
              </Text>
              <Text>
                Bei den mit Sofortüberweisung ausgetauschten personenbezogenen
                Daten handelt es sich um Vorname, Nachname, Adresse,
                Email-Adresse, IP-Adresse, Telefonnummer, Mobiltelefonnummer
                oder andere Daten, die zur Zahlungsabwicklung notwendig sind.
                Die Übermittlung der Daten bezweckt die Zahlungsabwicklung und
                die Betrugsprävention. Der für die Verarbeitung Verantwortliche
                wird Sofortüberweisung andere personenbezogene Daten auch dann
                übermitteln, wenn ein berechtigtes Interesse für die
                Übermittlung gegeben ist. Die zwischen Sofortüberweisung und dem
                für die Verarbeitung Verantwortlichen ausgetauschten
                personenbezogenen Daten werden von Sofortüberweisung unter
                Umständen an Wirtschaftsauskunfteien übermittelt. Diese
                Übermittlung bezweckt die Identitäts- und Bonitätsprüfung.
              </Text>
              <Text>
                Sofortüberweisung gibt die personenbezogenen Daten
                gegebenenfalls an verbundene Unternehmen und Leistungserbringer
                oder Subunternehmer weiter, soweit dies zur Erfüllung der
                vertraglichen Verpflichtungen erforderlich ist oder die Daten im
                Auftrag verarbeitet werden sollen.
              </Text>
              <Text>
                Die betroffene Person hat die Möglichkeit, die Einwilligung zum
                Umgang mit personenbezogenen Daten jederzeit gegenüber
                Sofortüberweisung zu widerrufen. Ein Widerruf wirkt sich nicht
                auf personenbezogene Daten aus, die zwingend zur
                (vertragsgemäßen) Zahlungsabwicklung verarbeitet, genutzt oder
                übermittelt werden müssen.
              </Text>
              <Text>
                Die geltenden Datenschutzbestimmungen von Sofortüberweisung
                können{' '}
                <a
                  href="https://www.klarna.com/sofort/datenschutz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  unter
                </a>{' '}
                abgerufen werden.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>20. Rechtsgrundlage der Verarbeitung</Title>
            <TextWrapper>
              <Text>
                Art. 6 I lit. a DS-GVO dient unserem Unternehmen als
                Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine
                Einwilligung für einen bestimmten Verarbeitungszweck einholen.
                Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines
                Vertrags, dessen Vertragspartei die betroffene Person ist,
                erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen
                der Fall ist, die für eine Lieferung von Waren oder die
                Erbringung einer sonstigen Leistung oder Gegenleistung notwendig
                sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.
                Gleiches gilt für solche Verarbeitungsvorgänge die zur
                Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa
                in Fällen von Anfragen zur unseren Produkten oder Leistungen.
                Unterliegt unser Unternehmen einer rechtlichen Verpflichtung
                durch welche eine Verarbeitung von personenbezogenen Daten
                erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher
                Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c
                DS-GVO. In seltenen Fällen könnte die Verarbeitung von
                personenbezogenen Daten erforderlich werden, um lebenswichtige
                Interessen der betroffenen Person oder einer anderen natürlichen
                Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein
                Besucher in unserem Betrieb verletzt werden würde und daraufhin
                sein Name, sein Alter, seine Krankenkassendaten oder sonstige
                lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder
                sonstige Dritte weitergegeben werden müssten. Dann würde die
                Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.
              </Text>
              <Text>
                Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f
                DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren
                Verarbeitungsvorgänge, die von keiner der vorgenannten
                Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur
                Wahrung eines berechtigten Interesses unseres Unternehmens oder
                eines Dritten erforderlich ist, sofern die Interessen,
                Grundrechte und Grundfreiheiten des Betroffenen nicht
                überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere
                deshalb gestattet, weil sie durch den Europäischen Gesetzgeber
                besonders erwähnt wurden. Er vertrat insoweit die Auffassung,
                dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die
                betroffene Person ein Kunde des Verantwortlichen ist
                (Erwägungsgrund 47 Satz 2 DS-GVO).
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              21. Berechtigte Interessen an der Verarbeitung, die von dem
              Verantwortlichen oder einem Dritten verfolgt werden
            </Title>
            <TextWrapper>
              <Text>
                Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I
                lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung
                unserer Geschäftstätigkeit zugunsten des Wohlergehens all
                unserer Mitarbeiter und unserer Anteilseigner.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              22. Dauer, für die die personenbezogenen Daten gespeichert werden
            </Title>
            <TextWrapper>
              <Text>
                Das Kriterium für die Dauer der Speicherung von
                personenbezogenen Daten ist die jeweilige gesetzliche
                Aufbewahrungsfrist. Nach Ablauf der Frist werden die
                entsprechenden Daten routinemäßig gelöscht, sofern sie nicht
                mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich
                sind.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              23. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung
              der personenbezogenen Daten; Erforderlichkeit für den
              Vertragsabschluss; Verpflichtung der betroffenen Person, die
              personenbezogenen Daten bereitzustellen; mögliche Folgen der
              Nichtbereitstellung
            </Title>
            <TextWrapper>
              <Text>
                Wir klären Sie darüber auf, dass die Bereitstellung
                personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist
                (z.B. Steuervorschriften) oder sich auch aus vertraglichen
                Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
                Mitunter kann es zu einem Vertragsschluss erforderlich sein,
                dass eine betroffene Person uns personenbezogene Daten zur
                Verfügung stellt, die in der Folge durch uns verarbeitet werden
                müssen. Die betroffene Person ist beispielsweise verpflichtet
                uns personenbezogene Daten bereitzustellen, wenn unser
                Unternehmen mit ihr einen Vertrag abschließt. Eine
                Nichtbereitstellung der personenbezogenen Daten hätte zur Folge,
                dass der Vertrag mit dem Betroffenen nicht geschlossen werden
                könnte. Vor einer Bereitstellung personenbezogener Daten durch
                den Betroffenen muss sich der Betroffene an einen unserer
                Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen
                einzelfallbezogen darüber auf, ob die Bereitstellung der
                personenbezogenen Daten gesetzlich oder vertraglich
                vorgeschrieben oder für den Vertragsabschluss erforderlich ist,
                ob eine Verpflichtung besteht, die personenbezogenen Daten
                bereitzustellen, und welche Folgen die Nichtbereitstellung der
                personenbezogenen Daten hätte.
              </Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>
              24. Bestehen einer automatisierten Entscheidungsfindung
            </Title>
            <TextWrapper>
              <Text>
                Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
                automatische Entscheidungsfindung oder ein Profiling.
              </Text>
              <Text>
                Diese Datenschutzerklärung wurde durch den
                Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft
                für Datenschutz GmbH, die als{' '}
                <a
                  href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Externer Datenschutzbeauftragter Bamberg
                </a>{' '}
                tätig ist, in Kooperation mit dem{' '}
                <a
                  href="https://www.wbs.legal/it-recht/datenschutzrecht/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IT- und Datenschutzrecht Anwalt Christian Solmecke
                </a>{' '}
                erstellt.
              </Text>
            </TextWrapper>
          </BlockInfo>
        </Container>
      </ContentWrapper>
    </Page>
  );
};

export default Policy;