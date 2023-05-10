import { connect } from "mongoose";

import CampaignModel from "./compaigns.model";

async function runConnect() {
  await connect("mongodb+srv://adrianomonteirodev:adrianomonteirodev@cluster0.b2gy5pv.mongodb.net/?retryWrites=true&w=majority");

  // const campaign = new CampaignModel({
  //   title: "Assaid",
  //   subtitle: "Entre..."
  // });

  // await campaign.save();

  // console.log(campaign);
  
}

export default runConnect;
