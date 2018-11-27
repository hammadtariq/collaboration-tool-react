import axiosInstance from "../utils/AuthInterceptor";

const help = {
  "0oahgopxncFkjcqi40h7": "",
  "0oahikobikMKr74YX0h7":
    "Time tracking software in the cloud for billing and payroll. It's easy & affordable.",
  "0oahjh1u3kE9Md0TA0h7":
    "Enhance your perspective with geographic reference Extract the data you need…quickly Formulate new strategies with map based facts Communicate with visual power",
  "0oahjh1u4zoZxjp9z0h7":
    "Alibaba Cloud, also known as Aliyun, is a Chinese cloud computing company, a subsidiary of Alibaba Group. Alibaba Cloud provides cloud computing services to online businesses and Alibaba's own e-commerce ecosystem. Alibaba Cloud's international operations are registered and headquartered in Singapore.",
  "0oahjhjmdxTxkHhPZ0h7":
    "Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. The blogs are hosted by Google and generally accessed from a subdomain of blogspot.com",
  "0oahjhjta9X9lvrca0h7":
    "With 529 QuickView, you have one-stop access for answers to your clients' account questions with data that is easily downloadable to your desktop. You see the same screens as your clients once they log in, so you can easily conduct online transactions including contributions, qualified withdrawals, allocation changes, exchanges, and transfers (with client approval).",
  "0oahijg0i40W0KaGs0h7":
    "Slack is a cloud-based set of proprietary team collaboration tools and services, founded by Stewart Butterfield. Slack began as an internal tool used by his company, Tiny Speck, in the development of Glitch, a now defunct online game. The name is an acronym for Searchable Log of All Conversation and Knowledge"
};

const Api = {
  allApps: function(userId) {
    return axiosInstance.get(`/okta/apps?userId=${userId}`);
  },
  addHelpContent: function(apps) {
    const finalApps = apps.map(d => {
      return Object.assign(d, {
        help:
          help[d.id] ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi provident fuga dolorem deserunt, explicabo reprehenderit consectetur repudiandae consequatur, doloribus alias cum vitae voluptatibus ut quis temporibus recusandae error tenetur!"
      });
    });
    return finalApps;
  }
};

export default Api;
