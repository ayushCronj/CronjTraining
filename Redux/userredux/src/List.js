import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";

class List extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {users.map(user => (
          <li key={product.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  users: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(List);
