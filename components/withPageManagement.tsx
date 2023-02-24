import React, { useState } from "react";

const withPageManagement = <T extends object>(
  WrappedComponent: React.ComponentClass<T>
) => {
  return function (props: T) {
    const [selectedPageName, setPageName] = useState("");

    const handlePageChange = (pageName: string) => {
      if (pageName === selectedPageName) return;
      setPageName(pageName);
    };

    return (
      <>
        <WrappedComponent
          pageName={selectedPageName}
          handlePageChange={handlePageChange}
          {...props}
        />
      </>
    );
  };
};

// const withPageManagement = <T extends object>(
//   WrappedComponent: React.ComponentClass<T>
// ) => {
//   return class extends React.Component<T> {
//     static getInitialProps({ ...ctx }) {
//       const props
//     };
//     constructor(props: T) {
//       super(props);

//     }
//   };
// };

export default withPageManagement;
