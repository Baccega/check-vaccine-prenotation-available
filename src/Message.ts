import { Moment } from 'moment'

const WARNING_ICON = '⚠️'
const VACCINE_ICON = '💉'
const AVAILABLE_ICON = '🟢'
const NOT_AVAILABLE_ICON = '🔴'

type CreateMessageProps = {
  available: boolean
  today: Moment
}

export function createMessage({ today, available }: CreateMessageProps): string {
  const devWarning = process.env.NODE_ENV === 'development' ? `${WARNING_ICON} DEV  ` : ''
  const formattedToday = today.format('DD MMMM YYYY')

  const statusIcon = available ? AVAILABLE_ICON : NOT_AVAILABLE_ICON

  const rows = [
    `${devWarning}${VACCINE_ICON}${statusIcon} <b>The vaccine is${
      !available ? ' not' : ''
    } available for you today!</b>`,
    `${formattedToday}`,
  ]

  const formattedRows = rows.map((cur) => cur.replace(/\./g, ','))
  return formattedRows.join('\n')
}
