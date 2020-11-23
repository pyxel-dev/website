const Term = () => (
  <main>
    <section className="block">
      <h1>Mentions légales</h1>
      <h2>Informations administratives</h2>
      <ul>
        <li><b>Dénomination social: </b>Pyxel</li>
        <li><b>Siège social: </b> 967 Chemin de Buherle, 31870 Beaumont sur Leze</li>
        <li><b>SASU </b>au capital de 100€</li>
        <li><b>SIRET: </b>881 675 185 00014</li>
        <li><b>RCS: </b>Toulouse</li>
        <li><b>TVA intracommunautaire: </b>FR 79 881675185</li>
        <li><b>Code APE: </b>6202A</li>
      </ul>
      <h2>Données personnelles</h2>
      <p>Les données collectées par Pyxel sont déstinées uniquements à un usage interne. Aucune de ces données n'est vendues ou communiquées à un tiers quelquonque. Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent.</p>
      <h2>Responsable de la publication</h2>
      <ul>
        <li>Kevin Py</li>
      </ul>
      <h2>Reproduction</h2>
      <p>Le contenu est les logos de ce site sont soumis au droit d'auteur. Il est interdit de reproduire, distribuer, transférer ou représenter tout ou partie de ces éléments, sans l'accord préalable et écrit de Pyxel.</p>
    </section>

    <style jsx>{`
      h2 {
        margin: 2rem 0 1rem;
      }
      li {
        list-style-type: disc;
        line-height: 1.5;
      }
  `}</style>
  </main>
);

export default Term;
