import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { setStatus } from "../../redux/actions/StatusActions";
import { getSearchCity } from "../../redux/actions/SearchActions";

import { getListCities } from "../../components/cardCity/cardCity.selectors";

import Skeleton from "react-loading-skeleton";

import { SearchWrapper } from "./search.styles";
import { ButtonSubmit } from "../../components/common/buttons/submit/Submit.styles";

const Search = () => {
  const dispatch = useDispatch();

  const listCities = useSelector(getListCities);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    dispatch(setStatus("cityFromSearch"));
    dispatch(getSearchCity(values.search));
  };

  return (
    <>
      {!listCities ? (
        <Skeleton count={1} height={40} width={300} />
      ) : (
        <SearchWrapper data-testid="search-form-test">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="search"
              ref={register({
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="Enter your location"
            />

            {errors.search && errors.search.message}

            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </form>
        </SearchWrapper>
      )}
    </>
  );
};

export default Search;
