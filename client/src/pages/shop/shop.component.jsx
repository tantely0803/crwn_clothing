import React , { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  collectionOverviewContainer  from '../../components/collections-overview/collection-overview.container';
import  CollectionPageContainer from '../collection/collection.container';

import { fecthCollectionsStart } from '../../redux/shop/shop.action';


const   ShopPage = ({fecthCollectionsStart , match}) => {

    useEffect(() => {
      
        fecthCollectionsStart();

    } , [ fecthCollectionsStart ]);
    
        return(
            <div className="shop-page"> 
              <Route exact path={`${match.path}`}  component={collectionOverviewContainer} />
			  <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }

           
const mapDispatchToProps = dispatch => ({
    fecthCollectionsStart : () =>  dispatch( fecthCollectionsStart())
  })        
       


export default connect ( null , mapDispatchToProps )(ShopPage); 