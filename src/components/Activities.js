import React, { Component } from 'react';
import heart_icon from '../assets/icons/heart.png';
import Rectangle15 from '../assets/images/Rectangle15.png';
import Rectangle16 from '../assets/images/Rectangle16.png';
import Rectangle17 from '../assets/images/Rectangle17.png';
import Rectangle18 from '../assets/images/Rectangle18.png';

export default class Activities extends Component {
  render() {
    return (
      <div className="activities">
        <div className="activity-container">
          <div className="title">
            <img src={heart_icon} alt="heart"></img>
            <span>Activities in your area</span>
          </div>
          <div className="icon-area">
            <img src={Rectangle15} alt="rectangle15" style={{ maxWidth: '200px', width:'100%', height: 'auto' }}></img>
            <img src={Rectangle16} alt="rectangle16" style={{ maxWidth: '200px', width:'100%', height: 'auto' }}></img>
            <img src={Rectangle17} alt="rectangle17" style={{ maxWidth: '200px', width:'100%', height: 'auto' }}></img>
            <img src={Rectangle18} alt="rectangle18" style={{ maxWidth: '200px', width:'100%', height: 'auto' }}></img>
          </div>
        </div>
      </div>
    );
  }
}
