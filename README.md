# ⚙️💉 Check vaccine prenotation available

A script that check the vaccine's prenotation website and sends you a telegram message as a notification when it's available (using a Bot).

## Usage

After cloning you need to create a `.env` file with the following data:

```
NODE_ENV=production                           # Or 'development'

CODICE_FISCALE=YOUR_CODICE_FISCALE            # Your's codice fiscale
LAST_6_DIGIT=YOUR_LAST_6_DIGIT                # The last 6 digit of your's tessera sanitaria

TELEGRAM_TOKEN=YOUR_TELEGRAM_BOT_TOKEN        # Generated with a new bot
TELEGRAM_USER_ID=YOUR_TELEGRAM_USER_ID        # Fetch that using the `/getUpdates` telegram endpoint
```
Then you just:

```bash
yarn
yarn start
```