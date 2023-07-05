import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

const WorldMap = () => {
  const [viewport, setViewport] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 0,
  });
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZGlwZXNoLWluZ2xlIiwiYSI6ImNsam9vNXZ2bzBsZmEzaHFpem91cmtvNHgifQ.uxTsxWGDmKqZ-Nky7XZOJQ"
      initialViewState={{
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: 0,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {countriesData.map((country:any) => (
        <Marker
          key={country.country}
          longitude={country.countryInfo.long}
          latitude={country.countryInfo.lat}
          anchor="bottom"
        >
          <FaMapMarkerAlt className="h-10 w-10 text-red-600" />
        </Marker>
      ))}
    </Map>
  );
};

export default WorldMap;
