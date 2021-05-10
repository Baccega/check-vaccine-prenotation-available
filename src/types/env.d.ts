declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      TELEGRAM_TOKEN: string
      TELEGRAM_USER_ID: string
      CODICE_FISCALE: string
      LAST_6_DIGIT: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
