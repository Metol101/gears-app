import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
   return (
      <div className='center ma'>
         <div className='absolute mt3'>
            <img id='inputImage' className='br3' alt='' src={imageURL} width='500px' height='auto' />
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
         </div>
      </div>
   );
}

export default FaceRecognition;