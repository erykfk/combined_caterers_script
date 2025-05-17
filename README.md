# Google Calendar Event Creator

This Node.js script allows you to create events on Google Calendar using the Google Calendar API.

## Prerequisites

- Node.js installed on your system
- A Google Cloud Project with the Google Calendar API enabled
- Service Account credentials from Google Cloud Console

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Google Cloud Project:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Calendar API
   - Go to "IAM & Admin" > "Service Accounts"
   - Create a new service account
   - Create a new key for the service account (JSON format)
   - Download the key and save it as `service-account.json` in the project root directory
   - Share your Google Calendar with the service account email address (it looks like: something@project-id.iam.gserviceaccount.com)

3. Usage:
   - The script will use the service account credentials automatically
   - No browser authentication is required
   - Make sure the service account has access to the calendar you want to modify

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

- Never commit your `service-account.json` file to version control
- Add this file to your `.gitignore`
- Keep your service account credentials secure and don't share them
- Only grant the minimum necessary permissions to the service account 