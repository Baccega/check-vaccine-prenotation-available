import fetch from 'node-fetch'

const CHECK_URL = 'https://vaccinicovid.regione.veneto.it/ulss6/azione/controllocf'
const CHECK_STRING = 'Attenzione non appartieni alle categorie che attualmente possono prenotare'

export async function checkVaccineAvailability(): Promise<boolean> {
  const response = await fetch(CHECK_URL, {
    body: `cod_fiscale=${process.env.CODICE_FISCALE}&num_tessera=${process.env.LAST_6_DIGIT}`,
    method: 'POST',
  })
  const html = await response.text()

  return !html.includes(CHECK_STRING)
}
