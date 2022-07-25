import PropTypes from 'prop-types';

function Section({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
