import { Container } from "react-bootstrap";

function Impressum() {
  return (
    <Container className="privacyImpressum">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>Name: Marius Müller<br></br>
        Anschrift: Peter-Lambert-Straße 6, 54292 Trier</p>

      <h2>Kontaktdaten</h2>
      <p>E-Mail: marius.mehring@web.de<br></br>
        Telefon: 0151/50706360</p>

      <h2>Haftungsausschluss</h2>
      <p>Die auf dieser Website bereitgestellten Informationen werden mit großer Sorgfalt erstellt und gepflegt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p>

      <p>Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.</p>

      <h2>Verweise und Links</h2>
      <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>

      <p>Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind.</p>
    </Container>

  );
}

export default Impressum;