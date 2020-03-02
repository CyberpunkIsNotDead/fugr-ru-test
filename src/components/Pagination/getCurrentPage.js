const getCurrentPage = (props) => (
  props.match.params.page ? props.match.params.page : 1
);

export default getCurrentPage;
