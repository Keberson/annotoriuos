import {
    OpenSeadragonAnnotator,
    OpenSeadragonViewer
} from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

export default function App() {
    return (
        <OpenSeadragonAnnotator>
            <OpenSeadragonViewer options={{
                tileSources: {
                    type: 'image',
                    url: 'D:\\projects\\pet-project-annotorious\\src\\openseadragon-images\\example_1.json'
                }
            }} />
        </OpenSeadragonAnnotator>
    );
}