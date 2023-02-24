import { useState } from "react";

interface Props {
  initialPageName?: string;
}

export default function usePageManagment({ initialPageName }: Props) {
  const [selectPageName, setPageName] = useState(initialPageName || "");

  const handlePageChange = (pageName: string) => {
    setPageName(pageName);
  };

  return {
    pageName: selectPageName,
    handlePageChange,
  };
}
