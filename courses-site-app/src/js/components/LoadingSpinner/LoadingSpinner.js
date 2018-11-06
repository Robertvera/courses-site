import React from 'react';
import './LoadingSpinner.scss'

    const LoadingSpinner = () => (
        <div class="wrap">
        <div class="spinner-wrap">
          <div class="spinner">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>
        </div>
    );

    export default LoadingSpinner;