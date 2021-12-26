import React from 'react';

// Functional component of a map of recycling centers panama using google map iframe api

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  events: {
    onClick: (event: any) => void;
  };
}

export function Map(props: MapProps) {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API_KEY}&q=${props.center.lat},${props.center.lng}&zoom=${props.zoom}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
