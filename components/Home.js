import React from 'react';
import Helmet from 'react-helmet';

let Home = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="Home"
                    meta={[
                        {property: 'og:title', content: 'Home'},
                        {property: 'og:image', content: 'http://res.cloudinary.com/drdxjay2t/image/upload/v1548165647/Screen_Shot_2019-01-22_at_16.57.43.png'}
                    ]} />
                <h1>Home</h1>
            </div>
        );
    }
});

export default Home;
