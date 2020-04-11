import React from 'react';
import cardData from "../../card.json";
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Cardlist
**/

const Cardlist = (props) => {
  return(
    <div className="container">Cardlist
        <div className="row">
            {cardData.map((cardList,index) => {
                let setClass = (cardList.title).toLowerCase().replace(/ /g,'');
                return <div className="col-4 card-wrapper mt-2 mb-4">
                    <div className="card pb-0 box">
                    <h4 className="text-left">{cardList.title}</h4>
                    <p className="des text-left">{cardList.description}</p>
                    <div className={'linkBox row bottom-xs ' +setClass}>
                    <NavLink className={'col-12 useLinks ' +setClass} to='/developer/en/api/dummy1/intro'>{cardList.intro}<i class="fa fa-chevron-right"></i></NavLink>
                    <NavLink className="col-12 useLinks" to='/developer/en/api/dummy1/guide'>{cardList.guid} <i class="fa fa-chevron-right"></i></NavLink>
                    <NavLink className="col-12 useLinks" to='/developer/en/api/dummy1/reference'>{cardList.ref} <i class="fa fa-chevron-right"></i></NavLink>
                    </div>
                    </div>
                    </div>
            })}
        </div>
    </div>
   );
 }


export default Cardlist