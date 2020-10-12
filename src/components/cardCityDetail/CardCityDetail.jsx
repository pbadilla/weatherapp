import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  getListCities,
  getStatus,
  getLoadedDataCity,
  getLoadedDataSearch,
  getDataStoreCity,
  getDataStoreSearch,
  getErrorCodeStore,
  getErrorMessageStore,
  getIdCardStore,
} from "./cardCityDetails.selectors";

import CardCity from "../cardCity";
import Warning from "../common/warnings";

const CardCityDetail = () => {
  const [dataFromStore, setDataFromStore] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [originData, setOriginData] = useState(null);
  const [visibleButton, setVisibleButton] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dataStoreCity = useSelector(getDataStoreCity);
  const dataStoreSearch = useSelector(getDataStoreSearch);
  const errorCodeStore = useSelector(getErrorCodeStore);
  const errorMessageStore = useSelector(getErrorMessageStore);
  const idCardStore = useSelector(getIdCardStore);
  const loadedDataCity = useSelector(getLoadedDataCity);
  const loadedDataSearch = useSelector(getLoadedDataSearch);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status !== null) {
      setOriginData(status);
    } else {
      return;
    }

    if (loadedDataCity && status === "cityFromList") {
      setDataFromStore(dataStoreCity);
      setVisibleButton(true);
    }
    if (loadedDataSearch && status === "cityFromSearch") {
      setDataFromStore(dataStoreSearch);
    }
    if (errorCodeStore !== undefined && status === "cityFromSearch") {
      setHasError(true);
      setErrorMessage(errorMessageStore);
    } else {
      setHasError(false);
    }

    setVisibleCard(true);
    setIdCard(idCardStore);
  }, [
    dataStoreCity,
    dataStoreSearch,
    errorCodeStore,
    errorMessageStore,
    idCardStore,
    loadedDataCity,
    loadedDataSearch,
    status,
  ]);

  return (
    <>
      {hasError ? (
        <Warning
          hasIcon="true"
          isVisible={visibleCard}
          message={errorMessage}
        />
      ) : dataFromStore ? (
        <CardCity
          cityName={dataFromStore.name}
          data={dataFromStore}
          hasDeleteButton={visibleButton}
          idCard={idCard}
          isVisible={visibleCard}
        />
      ) : null}
    </>
  );
};

export default CardCityDetail;
