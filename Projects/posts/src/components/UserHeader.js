import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  } else {
    return <div>{user.name}</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
