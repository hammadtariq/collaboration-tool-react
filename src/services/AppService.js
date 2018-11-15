import axiosInstance from '../utils/AuthInterceptor'


const apps = [
    {
        "id": "0oahijg0i40W0KaGs0h7",
        "name": "slack",
        "label": "Slack",
        "status": "ACTIVE",
        "lastUpdated": "2018-11-15T13:16:06.000Z",
        "created": "2018-11-15T13:15:51.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": true,
            "hide": {
                "iOS": false,
                "web": false
            },
            "appLinks": {
                "slack_ink": true
            }
        },
        "features": [],
        "signOnMode": "SAML_2_0",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "6c90z_efRt3umf1bqqhE98EX1crfFHlj6b-r39yViQU"
            }
        },
        "settings": {
            "app": {
                "domain": "http://localhost:3000"
            },
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "signOn": {
                "defaultRelayState": null,
                "ssoAcsUrlOverride": null,
                "audienceOverride": null,
                "recipientOverride": null,
                "destinationOverride": null
            }
        },
        "_links": {
            "help": {
                "href": "https://dev-107244-admin.oktapreview.com/app/slack/0oahijg0i40W0KaGs0h7/setup/help/SAML_2_0/external-doc",
                "type": "text/html"
            },
            "metadata": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/sso/saml/metadata",
                "type": "application/xml"
            },
            "appLinks": [
                {
                    "name": "slack_ink",
                    "href": "https://dev-107244.oktapreview.com/home/slack/0oahijg0i40W0KaGs0h7/19411",
                    "type": "text/html"
                }
            ],
            "groups": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfsg6f6aardo6ZyHu0h7",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/users"
            },
            "deactivate": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oahikobikMKr74YX0h7",
        "name": "timeclockonline",
        "label": "Timesheets",
        "status": "ACTIVE",
        "lastUpdated": "2018-11-15T13:21:31.000Z",
        "created": "2018-11-15T13:21:26.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": true,
            "hide": {
                "iOS": false,
                "web": false
            },
            "appLinks": {
                "timeclockonline_link": true
            }
        },
        "features": [],
        "signOnMode": "AUTO_LOGIN",
        "credentials": {
            "scheme": "EDIT_USERNAME_AND_PASSWORD",
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "revealPassword": true,
            "signing": {}
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            }
        },
        "_links": {
            "appLinks": [
                {
                    "name": "timeclockonline_link",
                    "href": "https://dev-107244.oktapreview.com/home/timeclockonline/0oahikobikMKr74YX0h7/3393",
                    "type": "text/html"
                }
            ],
            "groups": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfs8zl859aLFdxGoM0h7",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/users"
            },
            "deactivate": {
                "href": "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/lifecycle/deactivate"
            }
        }
    }
];

const Api = {

    allApps: function() {
        return apps;
        // return axiosInstance.get('/apps');
    }
};

export default Api;