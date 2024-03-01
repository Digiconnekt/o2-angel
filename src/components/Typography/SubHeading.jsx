/* eslint-disable react/prop-types */

const SubHeading = ({ heading, extraClasses }) => {
  return (
    <>
      <h3 className={`text-lg ${extraClasses}`}>{heading}</h3>
    </>
  );
};

export default SubHeading;
