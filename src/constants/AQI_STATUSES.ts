const AQI_STATUSES = [
    {
      title: "Good",
      id: "good",
      color: "#59B61F",
      range: "0 to 50",
      aqimodelImg: `aqimodel-good.png`
    },
    {
      title: "Moderate",
      id: "moderate",
      color: "#EEC732",
      range: "51 to 100",
      aqimodelImg: `aqimodel-moderate.png`
    },
    {
      title: "Poor",
      id: "poor",
      color: "#EA8C34",
      range: "101 to 200",
      aqimodelImg: `aqimodel-poor.png`
    },
    {
      title: "Unhealthy",
      id: "unhealthy",
      color: "#E95478",
      range: "201 to 300",
      aqimodelImg: `aqimodel-unhealthy.png`
    },
    {
      title: "Severe",
      id: "severe",
      color: "#B33FBA",
      range: "301 to 400",
      aqimodelImg: `aqimodel-severe.png`
    },
    {
      title: "Hazardous",
      id: "hazardous",
      color: "#C92033",
      range: "400+",
      aqimodelImg: `aqimodel-hazardous.png`
    },
  ]

  export default AQI_STATUSES