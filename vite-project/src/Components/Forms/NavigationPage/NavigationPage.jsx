import React from "react";
import { Link } from "react-router-dom";
import "./NavigationPage.scss";
function NavigationPage({ id, setShowall, showall }) {
    console.log(id);
    return (
        <div className='ideas_and_collections_content_navigation'>
            <div
                onClick={() => {
                    setShowall(!showall);
                }}
                className='ideas_and_collections_content_navigation_showall'
            >
                Показать все
            </div>
            <div className='ideas_and_collections_content_navigation_pages'>
                <div className='ideas_and_collections_content_current-page'>
                    <Link to={id} className=''>
                        {id}
                    </Link>
                </div>
                <div className='ideas_and_collections_content_all-page'>
                    <Link to={+id + 1 + ""} className=''>
                        {+id + 1}
                    </Link>
                </div>
                <div className='ideas_and_collections_content_all-page'>
                    <Link to={+id + 2 + ""} className=''>
                        {+id + 2}
                    </Link>
                </div>
                <div className='ideas_and_collections_content_all-page'>
                    <Link to={+id + 3 + ""} className=''>
                        {+id + 3}
                    </Link>
                </div>
                <div className='ideas_and_collections_content_all-page'>
                    <span className=''>...</span>
                </div>
                <div className='ideas_and_collections_content_all-page'>
                    <Link to='10' className=''>
                        10
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationPage;
