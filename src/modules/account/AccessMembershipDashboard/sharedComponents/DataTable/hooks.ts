import { useState, useEffect } from "react";
import DataTable from ".";

export const useSelectable = (data: any, onCheck?: (row: any) => void) => {
  const [dataState, setDataState] = useState<DataTable[]>([]);
  const [rowSelected, setRowSelected] = useState<any[]>([]);

  const handleCheckBox = (e: any, row: any) => {
    e.preventDefault();
    row.isSelected = e.target.checked;
    dataState.forEach((dataRow: any) => {
      if (dataRow.id === row.id) {
        dataRow.isSelected = e.target.checked;
      }
    });
    if (e.target.checked) {
      setRowSelected([...rowSelected, row]);
    } else {
      setRowSelected([...rowSelected.filter((item) => item.isSelected)]);
    }
    setDataState([...dataState]);
    onCheck && onCheck(row);
  };

  useEffect(() => {
    if (data.length > 0) {
      setDataState([...data]);
    }
  }, [data]);

  const handleAllCheckBox = (e: any) => {
    e.preventDefault();
    dataState.forEach((row: any) => {
      row.isSelected = e.target.checked;
    });
    if (e.target.checked) {
      setRowSelected([...dataState]);
    } else {
      setRowSelected([]);
    }
    setDataState([...dataState]);
    onCheck && onCheck(dataState);
  };

  const handleUnSelecteAll = () => {
    dataState.forEach((row: any) => {
      row.isSelected = false;
    });
    setRowSelected([]);
    setDataState([...dataState]);
  };

  const allChecked =
    dataState.length > 0
      ? dataState.every((row) => row.isSelected === true)
      : false;
  const isIndeterminate =
    dataState.some((row) => row.isSelected) && !allChecked;

  return {
    rowSelected,
    dataState,
    handleCheckBox,
    handleAllCheckBox,
    handleUnSelecteAll,
    allChecked,
    isIndeterminate,
  };
};
