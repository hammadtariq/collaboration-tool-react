const apps = [
  {
    id: "0oahijg0i40W0KaGs0h7",
    name: "slack",
    label: "Slack",
    status: "ACTIVE",
    lastUpdated: "2018-11-15T13:16:06.000Z",
    created: "2018-11-15T13:15:51.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        slack_ink: true
      }
    },
    features: [],
    signOnMode: "SAML_2_0",
    credentials: {
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      signing: {
        kid: "6c90z_efRt3umf1bqqhE98EX1crfFHlj6b-r39yViQU"
      }
    },
    settings: {
      app: {
        domain: "http://localhost:3000"
      },
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      },
      signOn: {
        defaultRelayState: null,
        ssoAcsUrlOverride: null,
        audienceOverride: null,
        recipientOverride: null,
        destinationOverride: null
      }
    },
    _links: {
      help: {
        href:
          "https://dev-107244-admin.oktapreview.com/app/slack/0oahijg0i40W0KaGs0h7/setup/help/SAML_2_0/external-doc",
        type: "text/html"
      },
      metadata: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/sso/saml/metadata",
        type: "application/xml"
      },
      appLinks: [
        {
          name: "slack_ink",
          href:
            "https://dev-107244.oktapreview.com/home/slack/0oahijg0i40W0KaGs0h7/19411",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfsg6f6aardo6ZyHu0h7",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahijg0i40W0KaGs0h7/lifecycle/deactivate"
      }
    }
  },
  {
    id: "0oahikobikMKr74YX0h7",
    name: "timeclockonline",
    label: "Timesheets",
    status: "ACTIVE",
    lastUpdated: "2018-11-15T13:21:31.000Z",
    created: "2018-11-15T13:21:26.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        timeclockonline_link: true
      }
    },
    features: [],
    signOnMode: "AUTO_LOGIN",
    credentials: {
      scheme: "EDIT_USERNAME_AND_PASSWORD",
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      revealPassword: true,
      signing: {}
    },
    settings: {
      app: {},
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      }
    },
    _links: {
      appLinks: [
        {
          name: "timeclockonline_link",
          href:
            "https://dev-107244.oktapreview.com/home/timeclockonline/0oahikobikMKr74YX0h7/3393",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfs8zl859aLFdxGoM0h7",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahikobikMKr74YX0h7/lifecycle/deactivate"
      }
    }
  },
  {
    id: "0oahjh1u3kE9Md0TA0h7",
    name: "5maps",
    label: "5 Maps (2)",
    status: "ACTIVE",
    lastUpdated: "2018-11-16T11:27:11.000Z",
    created: "2018-11-16T11:27:06.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        "5maps_link": true
      }
    },
    features: [],
    signOnMode: "BROWSER_PLUGIN",
    credentials: {
      scheme: "EDIT_USERNAME_AND_PASSWORD",
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      revealPassword: true,
      signing: {}
    },
    settings: {
      app: {},
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      }
    },
    _links: {
      appLinks: [
        {
          name: "5maps_link",
          href:
            "https://dev-107244.oktapreview.com/home/5maps/0oahjh1u3kE9Md0TA0h7/13710",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u3kE9Md0TA0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfs45jvv8syvTMq1v0h7",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u3kE9Md0TA0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u3kE9Md0TA0h7/lifecycle/deactivate"
      }
    }
  },
  {
    id: "0oahjh1u4zoZxjp9z0h7",
    name: "aliyun",
    label: "Alibaba Cloud (Aliyun)",
    status: "ACTIVE",
    lastUpdated: "2018-11-16T11:34:18.000Z",
    created: "2018-11-16T11:34:13.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        aliyun_link: true
      }
    },
    features: [],
    signOnMode: "BROWSER_PLUGIN",
    credentials: {
      scheme: "EDIT_USERNAME_AND_PASSWORD",
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      revealPassword: true,
      signing: {}
    },
    settings: {
      app: {
        baseURL: "https://signin.aliyun.com/login.htm"
      },
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      }
    },
    _links: {
      appLinks: [
        {
          name: "aliyun_link",
          href:
            "https://dev-107244.oktapreview.com/home/aliyun/0oahjh1u4zoZxjp9z0h7/aln1c0l1mwmUUHp8v1d8",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u4zoZxjp9z0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfsdomtkyl08SUux70h7",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u4zoZxjp9z0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjh1u4zoZxjp9z0h7/lifecycle/deactivate"
      }
    }
  },
  {
    id: "0oahjhjmdxTxkHhPZ0h7",
    name: "blogger",
    label: "Blogger (2)",
    status: "ACTIVE",
    lastUpdated: "2018-11-16T11:28:31.000Z",
    created: "2018-11-16T11:28:06.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        login: true
      }
    },
    features: [],
    signOnMode: "BROWSER_PLUGIN",
    credentials: {
      scheme: "EDIT_USERNAME_AND_PASSWORD",
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      revealPassword: true,
      signing: {}
    },
    settings: {
      app: {},
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      }
    },
    _links: {
      appLinks: [
        {
          name: "login",
          href:
            "https://dev-107244.oktapreview.com/home/blogger/0oahjhjmdxTxkHhPZ0h7/274",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjmdxTxkHhPZ0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/assets/img/logos/blogger.447b44e66c55d11f3d69c502d7f6d6b2.png",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjmdxTxkHhPZ0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjmdxTxkHhPZ0h7/lifecycle/deactivate"
      }
    }
  },
  {
    id: "0oahjhjta9X9lvrca0h7",
    name: "529quickview",
    label: "529 QuickView",
    status: "ACTIVE",
    lastUpdated: "2018-11-16T11:17:40.000Z",
    created: "2018-11-16T11:17:36.000Z",
    accessibility: {
      selfService: false,
      errorRedirectUrl: null,
      loginRedirectUrl: null
    },
    visibility: {
      autoSubmitToolbar: true,
      hide: {
        iOS: false,
        web: false
      },
      appLinks: {
        "529quickview_link": true
      }
    },
    features: [],
    signOnMode: "AUTO_LOGIN",
    credentials: {
      scheme: "EDIT_USERNAME_AND_PASSWORD",
      userNameTemplate: {
        template: "${source.login}",
        type: "BUILT_IN"
      },
      revealPassword: true,
      signing: {}
    },
    settings: {
      app: {},
      notifications: {
        vpn: {
          network: {
            connection: "DISABLED"
          },
          message: null,
          helpUrl: null
        }
      }
    },
    _links: {
      appLinks: [
        {
          name: "529quickview_link",
          href:
            "https://dev-107244.oktapreview.com/home/529quickview/0oahjhjta9X9lvrca0h7/22457",
          type: "text/html"
        }
      ],
      groups: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjta9X9lvrca0h7/groups"
      },
      logo: [
        {
          name: "medium",
          href:
            "https://op1static.oktacdn.com/bc/globalFileStoreRecord?id=gfs5i0mg29YSTUih50h7",
          type: "image/png"
        }
      ],
      users: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjta9X9lvrca0h7/users"
      },
      deactivate: {
        href:
          "https://dev-107244.oktapreview.com/api/v1/apps/0oahjhjta9X9lvrca0h7/lifecycle/deactivate"
      }
    }
  }
];

const help = {
  slack:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quo repellendus facilis, autem impedit accusamus? Sunt, iusto, officia iste voluptates saepe pariatur animi est nostrum, consequatur excepturi sapiente odit nam?"
};
const appsHelpContent = function(apps) {
  return apps.map(d => {});
};

const Api = {
  allApps: function() {
    return apps;
    // return axiosInstance.get('/apps');
  }
};

export default Api;
