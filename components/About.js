import React from 'react';
import Helmet from 'react-helmet';

let About = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="About"
                    meta={[
                        {property: 'og:title', content: 'About'},
                        {property: 'og:image', content: 'http://res.cloudinary.com/drdxjay2t/image/upload/v1546683561/pdf-cover.jpg'}
                    ]} />
                <h1>About</h1>
            </div>
        );
    }
});

export default About;
