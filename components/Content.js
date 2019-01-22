import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

let Content = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Latest Updates</h1>

                <Helmet
                    title="Latest Updates"
                    meta={[
                        {property: 'og:title', content: 'Latest Updates'},
                        {property: 'og:image', content: 'http://res.cloudinary.com/drdxjay2t/image/upload/v1548165647/Screen_Shot_2019-01-22_at_16.57.43.png'}
                    ]} />

                <Router.RouteHandler />
            </div>
        );
    }
});

export default Content;
