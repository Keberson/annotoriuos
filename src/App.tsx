import {
    Annotorious,
    OpenSeadragonAnnotator,
    OpenSeadragonViewer
} from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

import './App.scss';

export default function App() {
    return (
        <Annotorious>
            <OpenSeadragonAnnotator>
                <OpenSeadragonViewer
                    options={{
                        tileSources: {
                            type: 'image',
                            url: '/images/example.jpg',
                        },
                        prefixUrl: '/openseadragon-images/'
                    }}
                    className="openseadragon"
                />
            </OpenSeadragonAnnotator>
        </Annotorious>
    );
}