import React from 'react';

class About extends React.Component{
	render() {
		return (
			<div className="container" style={containerStyle}>
				<h1 className="display-3">Om Harald Kismul</h1>
				<div className="row">
					<div className="col">
						<div className="col-sm-8 col-md-6 col-lg-4 float-right">
							<img src="/images/other/hk.jpg" className="img-fluid img-thumbnail float-right" alt="Bilde av Harald Kismul" />
						</div>
						<p className="lead"><strong>Harald Nikolai Kismul</strong> (født 13. april 1927 i Bergen, død 13. okt. 2012 i Bergen) var en norsk norsk skulptør og billedkunstner, 
						f.. Gift 1954 med Laila, f. Molvik (1931-2015), senere direktør ved Musikselskabet Harmonien.</p>
						<p>
							Kismul ble utdannet ved Bergen Kunsthåndverkskole 1945-1948 og ble ansatt som teknisk tegner ved Havforskningsinstituttet i Bergen i 1954. 
							Han arbeidet der til han ble pensjonert i 1992, og fikk raskt ansvaret for figurer og tegninger i instituttets publikasjoner. 
							Et av hans største arbeider er dybdekartet over Norskehavs-området 1963, som har vært svært nyttig for oljeindustrien.
						</p>
						<p>
							Men i tillegg til dette arbeidet han hele sitt liv som utøvende kunstner, og etterlot seg en imponerende mengde av kunstverk i ulike genrer. 
							Kantinen på arbeidsplassen sin lyste han opp med en stor frise (1976). Sin utstillingsdebut hadde han på Vestlandsutstillingen i 1948, 
							der han stilte ut en mindre treskulptur av en stående mannsfigur, et arbeid inspirert av både Picasso og afrikansk skulptur. 
							På Kunsthåndverkskolens avgangsutstilling i 1948 stilte han ut en skulptur i farget gips som fremstilte et stående par i en sterkt erotisk omfavnelse, to menneskeliknende figurer, 
							men også med fugle- og andre ikke-menneskelige trekk. Han forklarte valget av materiale med at av gips får man ”ingenting gratis”; materialet er ”dødt”, 
							det kunstneriske elementet skyldtes ene og alene utformingen. I formen var denne figuren helt radikal i norsk sammenheng, ikke bare gjennom den underlige utformingen av figurene, 
							men også gjennom å bryte totalt med skulptur som volum, dvs. som tredimensjonal form. Kunsthistorikeren Dag Sveen har kalt den Norges første modernistiske skulptur, 
							skapt av en 21-årig kunstner i en tid da norsk skulptur var ekstremt konservativ. I 1965 og 1966 tok han på nytt opp det erotiske parmotivet i skulptur. 
							1965-versjonen var hans debut på Statens høstutstilling. 1966-versjonen, ”Gruppe”, er i dag plassert i Reksten-samlingene i Bergen. 
							Den presenterer noen ubestemmelige og fantasifulle figurer, nå i en danseliknende posisjon, utilslørt erotisk og med et element av humor. Den var ikke radikal bare som form, 
							men også i valg av polyester som materiale – nok et stoff som ikke gav noe ”gratis”. Den gang var det et klart ikke-kunst materiale, et valg som signaliserte at dette var moderne skulptur. 
							Blandingen av menneskeliknende, fugle- og andre dyreliknende former viser klart slektskap med surrealismen, også det litt spesielt i norsk skulptur. 
							Også som maler brøt Kismul fra begynnelsen av med tradisjonell realistisk kunst. Det ekstremt ekspresjonistiske maleriet ”Ærens mark” ble utstilt på Vestlandsutstillingen i 1953 
							og ble i en bergensavis karakterisert som ”et sterkt levende stykke tendenskunst; det viser et barn som fødes til en sinnssvak opprustende verden full av krigsmaskiner 
							og marsjerende soldater.” – Koreakrigen var bakgrunnen for bildet. I en mengde malerier varierte Kismul sine erotiske par-motiver, 
							ofte med nesten parodiske former som hadde en underfundig humoristisk virkning. De siste arbeidsårene sine laget han en serie malerier med Bergens-motiver. 
							Da unngikk han med flid all likhet med farge-fotografier; vel er byen med hus og havn gjenkjennelig, men det er fargene, koloritten, som er det vesentlige, ikke detaljene. 
							Ofte søkte han opp det samme bymotivet på skiftende tidspunkt og årstider for å undersøke hvordan annet lys og annen koloritt resulterte i helt forskjellige bilder. 
							Et av disse bildene, med motiv fra Vågen i Bergen og med tittelen ”Lysene tennes”, er gjengitt i Willy Dahl: Fortellingen om Bergen (2000), s. 419.
						</p>
						<p><em>LITTERATUR Aktuell, Oslo, 27.03.1965. La Revue Moderne, Paris, 03.1966. ”Billedkunsten i Bergen. Status 70.” I Tilbakeblikk (ill.). katalog Bergen Kunstforening. 
						Dag Sveen: ”Da modernistisk skulptur kom til Bergen”. Bergens Tidendes kronikk 15. oktober 2011.</em></p>
					</div>
				</div>
			</div>
		);
	}
}

const containerStyle = {
	paddingTop: '20px',
};

export default About;