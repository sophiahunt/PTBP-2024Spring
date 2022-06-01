import * as React from 'react';
import Map from '../components/Map';
import './routes.css';

function MapPage(){
    const drawers = {
        Activities: {
            orderCollections: {
                '2/22/22': {
                    '18:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            result: 'none'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            result: 'Loose Bricks'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            result: 'Trash'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            result: 'none'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            result: 'Full Trash'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889514,
                                lng: -81.20129371852886
                            },
                            result: 'none'
                        }
                    ]
                }
            },
            boundariesCollections: {
                '2/29/22': {
                    '16:00': [
                        {
                            standingPoint: {
                                lat: 28.603369329889514,
                                lng: -81.20129371852886
                            },
                            result: 'none'
                        },
                    ]
                }
            },
            lightingCollections: {
                '2/29/22': {
                    '12:00': [
                        {
                            standingPoint: {
                                lat: 28.603369329889514,
                                lng: -81.20129371852886
                            },
                            result: 'none'
                        },
                    ]
                }
            },
            natureCollections: {
                '2/29/22': {
                    '12:00': [
                        {
                            standingPoint: {
                                lat: 28.603369329889514,
                                lng: -81.20129371852886
                            },
                            result: 'Plants'
                        },
                    ]
                }
            },
            soundCollections: {
                '2/29/22': {
                    '14:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '70'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '80'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '33'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '40'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '68.8'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '90'
                        }
                    ]

                },
                '4/1/22': {
                    '12:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '40'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '67'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '44'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '37'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '70'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '75'
                        }
                    ],
                    '14:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '60'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '72'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '39'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '40'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '50'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '40.5'
                        }
                    ]
                },
                '12/2/21': {
                    '12:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '50'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '60'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '29'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '35'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '33.9'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '50'
                        }
                    ],
                    '14:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '70'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '80'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '33'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '40'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '68.8'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '90'
                        }
                    ],
                    '17:00': [
                        {
                            standingPoint: {
                                lat: 28.603797368242464,
                                lng: -81.19945207347551
                            },
                            average: '30'
                        },
                        {
                            standingPoint: {
                                lat: 28.60161204591758,
                                lng: -81.20087900870764
                            },
                            average: '60'
                        },
                        {
                            standingPoint: {
                                lat: 28.601207002735954,
                                lng: -81.19759598512186
                            },
                            average: '40'
                        },
                        {
                            standingPoint: {
                                lat: 28.59915350397974,
                                lng: -81.20035329578052
                            },
                            average: '20'
                        },
                        {
                            standingPoint: {
                                lat: 28.603369329889580,
                                lng: -81.20129371852886
                            },
                            average: '47.8'
                        },
                        {
                            standingPoint: {
                                lat: 28.602728806480098,
                                lng: -81.19716311630009
                            },
                            average: '60'
                        }
                    ]
                }
            }
        },
        Graphs: {
        },
        Data: {
        }
    }

    const center = {lat:28.602846550128262, lng:-81.20006526689143};

    return (
        <div id='MapPage'>
            <Map
                center={center} 
                zoom={17} 
                type={1}
                drawers={drawers}
            />
        </div>
    );
}

export default MapPage;