import React, { Component } from "react";

import { Select, Icon } from "antd";
import debounce from "lodash/debounce";

const Option = Select.Option;

class Search extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false
  };

  fetchUser = value => {
    console.log("fetching user", value);
    const data = this.props.data.filter(d =>
      d.label.toUpperCase().includes(value.toUpperCase())
    );
    console.log("filtered arr", data);
    this.setState({ data, fetching: false });
  };

  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false
    });
  };

  render() {
    const { fetching, data, value } = this.state;
    const { placeholder, style } = this.props;
    return (
      <Select
        showSearch
        value={value}
        placeholder={placeholder}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.fetchUser.bind(this)}
        onChange={this.handleChange}
        style={style}
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        suffix={<Icon type="close-circle" />}
      >
        {data.map(d => (
          <Option
            style={{ padding: 10 }}
            key={d.id}
            value={d.label}
            onClick={() => window.open(d._links.appLinks[0].href, "_blank")}
          >
            <span
              style={{
                width: 60,
                padding: 10
              }}
            >
              <img
                style={{ maxWidth: 50, height: 20 }}
                src={d._links.logo[0].href}
              />
            </span>
            <span style={{ padding: "20 0 20 0" }}>{d.label}</span>
          </Option>
        ))}
      </Select>
    );
  }
}

export default Search;
