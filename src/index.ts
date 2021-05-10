import * as dotenv from 'dotenv'
import { sendTelegramMessage } from './Telegram'
import { createMessage } from './Message'
import { checkVaccineAvailability } from './VaccineAvailability'
import moment from 'moment'

dotenv.config()

async function main() {
  const today = moment()

  const available = await checkVaccineAvailability()

  const message = createMessage({ available, today })

  console.log('Sending Telegram Message:')
  await sendTelegramMessage(message)

  console.log(message)
  console.log('ALL DONE!')
}

main()
