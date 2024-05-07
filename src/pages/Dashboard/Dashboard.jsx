import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "../../Components/Transaction";
import InfoCard from "../../Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={"6"}
      >
        <GridItem colSpan={{
          base:1,
          lg:2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={"/shapes2.svg"}
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagText="Loans"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard imgUrl={"/Shapes.svg"} 
            text={"Learn more about our real estate, mortgage, and  corporate account services"}
            tagText={"Contacts"}
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
