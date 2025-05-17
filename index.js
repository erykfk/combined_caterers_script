const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

// If modifying these scopes, update the service account permissions in Google Cloud Console
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

/**
 * Creates an event on Google Calendar
 * @param {Object} auth The authenticated Google client
 * @param {Object} eventDetails The event details
 */
async function createCalendarEvent(auth, eventDetails) {
  const calendar = google.calendar({ version: 'v3', auth });
  
  try {
    const event = await calendar.events.insert({
      calendarId: 'primary',
      resource: eventDetails,
    });
    
    console.log('Event created: %s', event.data.htmlLink);
    return event.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}

/**
 * Main function to authenticate and create a calendar event
 */
async function main() {
  try {
    // Load service account credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, 'service-account.json'),
      scopes: SCOPES,
    });

    // Get the authenticated client
    const authClient = await auth.getClient();

    // Example event details
    const eventDetails = {
      summary: 'Test Event',
      description: 'This is a test event created using Google Calendar API',
      start: {
        dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
        timeZone: 'UTC',
      },
      end: {
        dateTime: new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString(), // Tomorrow + 1 hour
        timeZone: 'UTC',
      },
    };

    await createCalendarEvent(authClient, eventDetails);
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main(); 