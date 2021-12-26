import React from 'react';

interface VideoProps {
  embedUrl: string;
  width?: any;
  height?: any;
}

export function Video(props: VideoProps) {
  const { embedUrl, width, height } = props;
  return (
    <div className={`xl:rounded-xl ${width}  ${height} `}>
      <iframe
        src={`https://www.youtube.com/embed/${embedUrl}`}
        className="xl:rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
