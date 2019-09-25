<template>
  <section>
    <FullPage v-if="countries.length === 0">
      <img src="./../assets/loading.gif" alt />
    </FullPage>

    <Container>
      <Grid v-for="country in countries" :key="country.value">
        <CountryLi>
          <Flag
            v-if="country.code"
            :img="`https://www.countryflags.io/${country.code.toLowerCase()}/flat/64.png`"
          />
          <ContryName>{{country.name}}</ContryName>
          <Details>
            <Detail>
              <strong>population:</strong>
              {{country.population}}
            </Detail>
            <Detail>
              <strong>region:</strong>
              {{country.region}}
            </Detail>
            <Detail>
              <strong>capital:</strong>
              {{country.capital}}
            </Detail>

            <Detail>
              <strong>currencies:</strong>
              <Label v-for="curr in country.currencies" :key="curr">{{curr}}</Label>
            </Detail>
            <Detail>
              <strong>languages:</strong>
              <Label v-for="lang in country.languages" :key="lang">{{lang}}</Label>
            </Detail>
          </Details>
        </CountryLi>
      </Grid>
    </Container>
  </section>
</template>

<script>
import { autorun } from "mobx";
import styled from "vue-styled-components";
import loading from "./../assets/loading.gif";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 0 10px;
  align-items: flex-start;
  align-content: flex-start;
`;
export const Grid = styled.div`
  flex-basis: 33.333%;
  max-width: 33.333%;
  padding: 0 10px;
  box-sizing: border-box;
`;

const CountryLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  background: white;
  margin-top: 40px;
  border-radius: 15px;
`;

const Flag_props = {
  img: String
};
const Flag = styled("span", Flag_props)`
  width: 50px;
  height: 50px;
  background-color: #dfdfdf;
  background-image: ${props => `url("${props.img}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 80px;
  border-radius: 50%;
  display: inline-flex;
  margin-bottom: 10px;
  margin-top: -25px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`;

const ContryName = styled.h4`
  font-weight: bolder;
  margin: 0 0 0 0;
  font-size: 24px;
  margin-bottom: 30px;
  margin: 0 10px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 19ch;
`;
const Details = styled.div`
  background: white;
  width: 100%;
  padding: 10px 0;
  border-radius: 15px;
`;
const Detail = styled.div`
  padding: 10px 20px;
  width:calc(100% - 40px);
  color: #333;
  & + & {
    border-top: 1px solid rgba(0,0,0,0.05);
  }
  
  & >strong{
    display:inline-block;
    min-width:100px;
    text
  }
`;
const Label = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #dfdfdf;
  color: #333;
  font-size: 12px;
  margin: 2px;
  padding: 2px 3px;
  border-radius: 2px;
`;
const FullPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 100;
  top: 0;
  left: 0;
`;

export default {
  name: "CountriesList",
  components: {
    CountryLi,
    Flag,
    ContryName,
    Details,
    Detail,
    Label,
    Container,
    Grid,
    FullPage
  },
  props: {
    store: Object
  },
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    autorun(() => {
      this.countries = this.store.countriesList;
    });
  }
};
</script>

<style scoped></style>
