import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getCities } from "../../redux/actions";
import { setListSelected } from "../../redux/actions/ListSelectedActions";

import Skeleton from "react-loading-skeleton";

import cities from "../../constants/cities";

import CardList from "../cardList";
import CardCityDetail from "../../components/cardCityDetail";
import Layout from "../../components/common/layout";
import Loading from "../../components/loading";
import Search from "../../components/search";

import {
  HomeWrapper,
  CityList,
  CityDetail,
  ContainerHome,
} from "./home.styles";

const Home = () => {
  const [listCities, setListCities] = useState(null);
  const listSelectedCities = useSelector((state) => state.cities.listSelected);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities(cities));
  }, []);

  useEffect(() => {
    if (listSelectedCities !== undefined || listSelectedCities) {
      setListCities(listSelectedCities);
      dispatch(setListSelected(listSelectedCities));
    } else {
      null;
    }
  }, [listSelectedCities]);

  return (
    <ContainerHome>
      <Layout>
        <HomeWrapper data-testid="Home-Test">
          {listCities !== undefined && listCities ? (
            <>
              <Search />
              <CityList>
                <CardList />
              </CityList>
              <CityDetail>
                <CardCityDetail />
              </CityDetail>
            </>
          ) : (
            <Skeleton count={1} />
          )}
        </HomeWrapper>
      </Layout>
    </ContainerHome>
  );
};

const HomeConnected = connect((state) => ({
  list: state.svgArr,
}))(Home);

export default HomeConnected;
