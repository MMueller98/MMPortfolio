import React from "react"
import { Container } from "react-bootstrap"

function Privacy() {
  return (
    <Container className="privacyImpressum">
      <h1>Datenschutzerklärung</h1>

      <p>Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst und halte mich strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.</p>

      <p>Die folgende Erklärung gibt Ihnen einen Überblick darüber, wie ich diesen Schutz gewährleiste und welche Art von Daten zu welchem Zweck erhoben werden.</p>

      <h2>Datenverarbeitung auf dieser Internetseite</h2>
      <p>Auf meinem Server werden automatisch Log Files, die Ihr Browser an mich übermittelt erhoben und gespeichert. Dies sind:</p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
      </ul>

      <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Ich behalte mir vor, diese Daten nachträglich zu prüfen, wenn mir konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.</p>

      <h2>Verwendung von Cookies</h2>
      <p>Diese Website verwendet sogenannte Cookies. Diese dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von mir verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.</p>
    </Container>
  )
}

export default Privacy