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
            :img="
              `https://www.countryflags.io/${country.code.toLowerCase()}/flat/64.png`
            "
          />
          <ContryName>{{ country.name }}</ContryName>
          <Details>
            <Detail>
              <strong>population:</strong>
              {{ country.population }}
            </Detail>
            <Detail>
              <strong>region:</strong>
              {{ country.region }}
            </Detail>
            <Detail>
              <strong>capital:</strong>
              {{ country.capital }}
            </Detail>

            <Detail>
              <strong>currencies:</strong>
              <Label v-for="curr in country.currencies" :key="curr">{{
                curr
              }}</Label>
            </Detail>
            <Detail>
              <strong>languages:</strong>
              <Label v-for="lang in country.languages" :key="lang">{{
                lang
              }}</Label>
            </Detail>
          </Details>
        </CountryLi>
      </Grid>
    </Container>
  </section>
</template>

<script>
import { autorun } from "mobx";
import {
  Container,
  Grid,
  CountryLi,
  Flag,
  ContryName,
  Details,
  Detail,
  Label,
  FullPage
} from "./CountriesList.styles";
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
      this.countries = this.store.countriesList.countriesList;
    });
  }
};
</script>

<style scoped></style>
