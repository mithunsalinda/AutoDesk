import React from 'react'
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
export default class FetchAPICard extends React.Component {
    state = {
        loading : true,
        ApiList : []
    };
    componentDidMount(){
        Axios.get('http://localhost:3000/carListData').then( res =>{
            console.log(res);
            this.setState({ ApiList : res.data})
            setTimeout(() =>{
                this.setState ({loading : false});
            },2000)
        })
    }
    render (){
        const {loading} = this.state;

        return     <div className="container">
        {(loading? (
            <div className="curtain">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        ): (
            <div className="row">
            { this.state.ApiList.map((cardList,index) => {
                let setClass = (cardList.title).toLowerCase().replace(/ /g,'');
                return <div className="col-md-6 col-lg-4 col-xs-12 card-wrapper mt-2 mb-4">
                    <div className="card pb-0 box">
                    <h4 className="text-left"><i className={'fa icon-' +setClass}>&nbsp;</i>{cardList.title}</h4>
                    <p className="des text-left">{cardList.description}</p>
                    <div className={'linkBox row bottom-xs ' +setClass}>
                    <NavLink className={'col-12 useLinks ' +setClass} to='/developer/en/api/dummy1/intro'>{cardList.intro}<i className="fa fa-chevron-right"></i></NavLink>
                    <NavLink className="col-12 useLinks" to='/developer/en/api/dummy1/guide'>{cardList.guid} <i className="fa fa-chevron-right"></i></NavLink>
                    <NavLink className="col-12 useLinks" to='/developer/en/api/dummy1/reference'>{cardList.ref} <i className="fa fa-chevron-right"></i></NavLink>
                    </div>
                    </div>
                    </div>
            })}
        </div>
        ))}
        
    </div>
    }
}