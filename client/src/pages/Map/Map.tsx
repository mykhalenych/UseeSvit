import React, {useCallback, useEffect, useState} from 'react';
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import {useSelector} from 'react-redux';

import {selectUserCoords} from '../../redux/common/selectors';
import {useAppDispatch} from '../../redux/store';
import {setUserCoords} from '../../redux/common/commonSlice';
import {containerStyle, libraries} from './constants';

import {MapWrap} from './styles';

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
        libraries,
    });

    const [markersData, setMarkersData] = useState<any[]>([]);

    const coords = useSelector(selectUserCoords);
    const dispatch = useAppDispatch();

    const successCallback = useCallback(
        (position: GeolocationPosition) => {
            dispatch(setUserCoords({lat: position.coords.latitude, lng: position.coords.longitude}));
        },
        [dispatch],
    );

    const handleSetPlaces = useCallback((results: google.maps.places.PlaceResult[]) => {
        setMarkersData((prev) => [
            ...prev,
            ...results.map((item) => ({
                ...item,
                position: {
                    lat: item.geometry?.location?.lat(),
                    lng: item.geometry?.location?.lng(),
                },
            })),
        ]);
    }, []);

    const onLoad = useCallback(
        (map: google.maps.Map) => {
            const service = new google.maps.places.PlacesService(map);

            const pyrmont = {lat: 48.17, lng: 24.5};
            service.nearbySearch(
                {location: pyrmont, radius: 50000, keyword: 'mountain'},

                (
                    results: google.maps.places.PlaceResult[] | null,
                    status: google.maps.places.PlacesServiceStatus,
                    pagination: google.maps.places.PlaceSearchPagination | null,
                ) => {
                    if (status !== 'OK' || !results) return;

                    handleSetPlaces(results);

                    if (pagination && pagination.hasNextPage) {
                        pagination.nextPage();
                    }
                },
            );
        },
        [handleSetPlaces],
    );

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback);
    }, [successCallback]);

    return (
        <MapWrap>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coords}
                    zoom={10}
                    onLoad={onLoad}
                    clickableIcons={false}
                    options={{
                        scrollwheel: true,
                        streetViewControl: false,
                        zoomControl: false,
                        mapTypeControlOptions: {
                            position: 7.0,
                            style: 2.0,
                        },
                    }}>
                    {markersData.map((item, index) => (
                        <Marker key={index} position={item.position} />
                    ))}
                    <Marker position={coords} />
                </GoogleMap>
            )}
        </MapWrap>
    );
};

export default Map;
