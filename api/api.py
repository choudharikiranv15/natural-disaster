import streamlit as st
import folium
from streamlit_folium import st_folium
import requests  # Add this import

# Function to fetch events with coordinates
def fetch_events_with_coordinates(limit=10):
    url = f"https://www.gdacs.org/xml/feed.aspx?type=events&country=ALL"  # Update this URL as needed
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses
        events = response.json()  # Update based on actual API response format
        # Filter out events that don't have geographical information (geometry)
        return [event for event in events if 'geometry' in event]
    except requests.exceptions.RequestException as e:
        st.error(f"Error fetching events: {e}")
        return []

# Sidebar to select the number of events to display
num_events = st.sidebar.slider("Number of Events", min_value=1, max_value=20, value=10)

# Fetch recent events
events = fetch_events_with_coordinates(limit=num_events)

# Initialize a folium map centered at an approximate global center
m = folium.Map(location=[0, 0], zoom_start=2)

# Define marker colors for different event types
event_type_colors = {
    'TC': 'blue',   # Tropical Cyclone
    'FL': 'green',  # Flood
    'DR': 'orange',  # Drought
    'EQ': 'red'     # Earthquake
}

# Add events to the map
for event in events:
    latitude = event['geometry']['coordinates'][1]
    longitude = event['geometry']['coordinates'][0]
    event_type = event.get('eventtype', 'Unknown')
    event_name = event.get('eventname', 'Unknown Event')
    severity = event.get('severity', 'N/A')
    event_date = event.get('fromdate', 'Unknown Date')

    # Create a popup message
    popup_text = (f"Event: {event_name}<br>"
                  f"Type: {event_type}<br>"
                  f"Severity: {severity}<br>"
                  f"Date: {event_date}")

    # Determine marker color based on event type
    color = event_type_colors.get(event_type, 'gray')

    # Add a marker to the map
    folium.Marker(
        location=[latitude, longitude],
        popup=folium.Popup(popup_text, max_width=300),
        icon=folium.Icon(color=color, icon='info-sign')
    ).add_to(m)

# Display the map using Streamlit's st_folium
st_folium(m, width=725, height=500)
