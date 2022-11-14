import axios from "axios";

// Back4app
export const province = async () =>
  await axios.get(
    "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province",
    {
      headers: {
        // "X-Parse-Application-Id": "GbHLzworuBjYjjfJdyJQl7RxHa6Xmu4dRUQv690o", // This is your app's application id
        // "X-Parse-REST-API-Key": "zwzg70kTyj20TTZRaU9rwEJGr2vuMW0UQevpw9Od", // This is your app's REST API key
        Token: "36ccac9c-5cf2-11ed-b8cc-a20ef301dcd7",
        "content-type": "application/json",
      },
    }
  );
