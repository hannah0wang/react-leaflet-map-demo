/* resources:
 *  https://www.flaticon.com/free-icon/placeholder_684908?term=map&page=1&position=3&origin=tag&related+id=684908
 *  http://leaflet-extras.github.io/leaflet-providers/preview/
 */

import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function App() {
  //markers
  const markers = [
    {
      // geocode: [48.86, 2.3522],
      //Bellevue, WA
      geocode: [47.610378, -122.200676],
      popUp: "Hello, I am pop up 1",
    },
    {
      // geocode: [48.85, 2.3522],
      //U of WA
      geocode: [47.659878, -122.305968],
      popUp: "Hello, I am pop up 2",
    },
    {
      // geocode: [48.855, 2.34],
      //Renton, WA
      geocode: [47.48288, -122.217064],
      popUp: "Hello, I am pop up 3",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38, 38], //size of the icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    /* Map centered in Paris w/ coords 48.8566, 2.3522 */
    // current center Seattle, WA
    <MapContainer center={[47.60621, -122.33207]} zoom={13}>
      /*{" "}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{y}.png"
      />{" "}
      */
      <TileLayer
        attribution="OpenStreetMap France"
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
