import React from 'react';

const Iframe = ({ src, title, width, height,style,sandbox }) => {
  return <iframe src={src} title={title} width={width} height={height} frameBorder="0" style={style} sandbox={sandbox}/>;
};

export default Iframe;