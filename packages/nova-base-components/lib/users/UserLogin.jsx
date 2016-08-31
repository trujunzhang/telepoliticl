import Telescope from 'meteor/nova:lib';
import React from 'react';
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Users from 'meteor/nova:users';

class UserLogin extends Component {

    render() {
        return (
            <div class="modal-overlay v-fullscreen">
                <a class="modal--close v-desktop" href="https://www.producthunt.com/#" title="Close">
                    <span>
                        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z" fill-rule="evenodd"></path>
                        </svg>
                    </span>
                </a>
                <div class="modal--content">
                    <div class="login-fullscreen">
                        <h2 class="login-fullscreen--title">Login to</h2>
                        <p class="login-fullscreen--intro">Product Hunt is a community to share and geek out about the latest products, books, games and podcasts. Join us :)</p>
                        <span>
                            <div class="buttonGroup_1mB5C">
                                <a class="button_2I1re mediumSize_10tzU secondaryBoldText_1PBCf secondaryText_PM80d twitterSolidColor_G22Bs solidVariant_2wWrf" rel="login-with-twitter" href="https://www.producthunt.com/auth/twitter?origin=%2F">
                                    <div class="buttonContainer_wTYxi">Log in with twitter</div>
                                </a>
                                <a class="button_2I1re mediumSize_10tzU secondaryBoldText_1PBCf secondaryText_PM80d facebookSolidColor_pdgXp solidVariant_2wWrf" rel="login-with-facebook" href="https://www.producthunt.com/auth/facebook?origin=%2F">
                                    <div class="buttonContainer_wTYxi">Log in with facebook</div>
                                </a>
                            </div>
                            <p class="login-fullscreen--login-info">We'll never post to Twitter or Facebook without your permission.</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

UserLogin.contextTypes = {
    messages: React.PropTypes.object
};

UserLogin.displayName = "UserLogin";

module.exports = UserLogin;
