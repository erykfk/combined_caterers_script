# Google Calendar Event Creator

This Node.js script allows you to create events on Google Calendar using the Google Calendar API.

## Prerequisites

- Node.js installed on your system
- A Google Cloud Project with the Google Calendar API enabled
- OAuth 2.0 credentials from Google Cloud Console

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Google Cloud Project:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Calendar API
   - Create OAuth 2.0 credentials (Desktop application)
   - Download the credentials and save them as `credentials.json` in the project root directory

3. First Run:
   - When you run the script for the first time, it will open a browser window
   - Log in with your Google account and grant the necessary permissions
   - The authentication token will be saved locally for future use

## Usage

Run the script using:
```bash
npm start
```

The script will create a test event for tomorrow that lasts one hour. To create different events, modify the `eventDetails` object in `index.js`.

## Event Details Structure

The `eventDetails` object can include the following properties:
- `summary`: Event title
- `description`: Event description
- `start`: Event start time (ISO string with timezone)
- `end`: Event end time (ISO string with timezone)
- `location`: Event location (optional)
- `attendees`: Array of attendee email addresses (optional)

## Security Note

- Never commit your `credentials.json` or `token.json` files to version control
- Add these files to your `.gitignore`
- Keep your credentials secure and don't share them 