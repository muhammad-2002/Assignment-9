import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Leaflet = () => {
  return (
    <div className="relative z-0">
      <MapContainer
        center={[-8.409518, 115.188919]} // Set center to Bali coordinates
        zoom={13}
        className="w-full h-96 sm:h-80 md:h-96 lg:h-128 xl:h-144"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-8.409518, 115.188919]}>
          <Popup>
            Welcome to Bali! <br /> Enjoy your stay.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
