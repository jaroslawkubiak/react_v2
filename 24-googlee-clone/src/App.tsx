import type { Place } from "./api/Place";
import { useState } from "react";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(place) => setPlace(place)} />
      </div>
      <div className="col-span-9 p-2">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
