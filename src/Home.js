import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div>
                <p className="desc">
                    Here is a currency conversion bot. Convert any kind of currency
                    into another currency just by giving the amount, the current
                    currency and the currency you want to convert into.
                </p>
                <img src="http://www.pvhc.net/img137/csfvfnnuhnhhorehnlqg.png" 
                     className="home-photo"/>
            </div>
        )
    }
}

export default Home;