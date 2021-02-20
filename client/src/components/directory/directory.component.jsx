import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// after moving data in redux
const  Directory = ({ sections }) =>  (


            <div className="directory-menu">
            
            {
                 sections.map(( { id , ...otherSectionsProps } ) => ( 

                    <MenuItem key={id} { ...otherSectionsProps }  ></MenuItem  >    

                 ))
            }
            
            </div>

);

const mapStateToProps = createStructuredSelector ({
    sections : selectDirectorySections
});

export default connect(mapStateToProps)( Directory ) ;