import React from 'react';
import {
    Annotorious,
    OpenSeadragonAnnotator,
    OpenSeadragonViewer
} from "@annotorious/react";

import '@annotorious/react/annotorious-react.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Annotorious>
          <OpenSeadragonAnnotator>
              <OpenSeadragonViewer options={{
                  titleSources: {
                      type: 'image',
                      url: 'https://cdn1.ozone.ru/s3/multimedia-4/6342191092.jpg'
                  }
              }} />
          </OpenSeadragonAnnotator>
      </Annotorious>
    </div>
  );
}

export default App;
