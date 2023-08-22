import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({draw, height, width}) => {
    const canvasRef = React.useRef();
    React.useEffect(() => {        
    

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');   
        draw(context);  
                        
    
    }, []);
  return (
    <canvas
    ref={canvasRef} 
    width={width}  
    height={height} 
    />
  )
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired, // ADDED
  width: PropTypes.number.isRequired, // ADDED
};
export default Canvas;