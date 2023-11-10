import { aqiColors } from "@/constants/AQI_STATUSES";

const aqiStatus = (
    aqiNumber: number,
    data: "color" | "text" | "img"
    ) => {

    if(data === "text"){
        if(aqiNumber < 51) return "Good";
        if(aqiNumber < 101) return "Moderate";
        if(aqiNumber < 151) return "Poor";
        if(aqiNumber < 201) return "Unhealthy";
        if(aqiNumber < 301) return "Severe";
        return "Hazardous";
    }

    else if(data === "img") {
        if(aqiNumber < 51) return "/aqimodel-good.png";
        if(aqiNumber < 101) return "/aqimodel-moderate.png";
        if(aqiNumber < 151) return "/aqimodel-poor.png";
        if(aqiNumber < 201) return "/aqimodel-unhealthy.png";
        if(aqiNumber < 301) return "/aqimodel-severe.png";
        return "/aqimodel-hazardous.png";
    }

    else if(data === "color") {
        if(aqiNumber < 6) return aqiColors[0];
        if(aqiNumber < 11) return aqiColors[1];
        if(aqiNumber < 16) return aqiColors[2];
        if(aqiNumber < 21) return aqiColors[3];
        if(aqiNumber < 31) return aqiColors[4];
        if(aqiNumber < 36) return aqiColors[5];
        if(aqiNumber < 41) return aqiColors[6];
        if(aqiNumber < 46) return aqiColors[7];
        if(aqiNumber < 51) return aqiColors[8];
        if(aqiNumber < 56) return aqiColors[9];
        if(aqiNumber < 61) return aqiColors[10];
        if(aqiNumber < 66) return aqiColors[11];
        if(aqiNumber < 71) return aqiColors[12];
        if(aqiNumber < 76) return aqiColors[13];
        if(aqiNumber < 81) return aqiColors[14];
        if(aqiNumber < 86) return aqiColors[15];
        if(aqiNumber < 91) return aqiColors[16];
        if(aqiNumber < 96) return aqiColors[17];
        if(aqiNumber < 101) return aqiColors[18];

        if(aqiNumber < 111) return aqiColors[19];
        if(aqiNumber < 121) return aqiColors[20];
        if(aqiNumber < 131) return aqiColors[21];
        if(aqiNumber < 141) return aqiColors[22];
        if(aqiNumber < 151) return aqiColors[23];
        if(aqiNumber < 161) return aqiColors[24];
        if(aqiNumber < 171) return aqiColors[25];
        if(aqiNumber < 181) return aqiColors[26];
        if(aqiNumber < 191) return aqiColors[27];
        if(aqiNumber < 201) return aqiColors[28];
    
        if(aqiNumber < 211) return aqiColors[29];
        if(aqiNumber < 221) return aqiColors[30];
        if(aqiNumber < 231) return aqiColors[31];
        if(aqiNumber < 241) return aqiColors[32];
        if(aqiNumber < 251) return aqiColors[33];
        if(aqiNumber < 261) return aqiColors[34];
        if(aqiNumber < 271) return aqiColors[35];
        if(aqiNumber < 281) return aqiColors[36];
        if(aqiNumber < 291) return aqiColors[37];
        if(aqiNumber < 301) return aqiColors[38];
    
        if(aqiNumber < 311) return aqiColors[39];
        if(aqiNumber < 321) return aqiColors[40];
        if(aqiNumber < 331) return aqiColors[41];
        if(aqiNumber < 341) return aqiColors[42];
        if(aqiNumber < 351) return aqiColors[43];
        if(aqiNumber < 361) return aqiColors[44];
        if(aqiNumber < 371) return aqiColors[45];
        if(aqiNumber < 381) return aqiColors[46];
        if(aqiNumber < 391) return aqiColors[47];
        if(aqiNumber < 401) return aqiColors[48];
    
        if(aqiNumber < 411) return aqiColors[49];
        if(aqiNumber < 421) return aqiColors[50];
        if(aqiNumber < 431) return aqiColors[51];
        if(aqiNumber < 441) return aqiColors[52];
        if(aqiNumber < 451) return aqiColors[53];
        if(aqiNumber < 461) return aqiColors[54];
        if(aqiNumber < 471) return aqiColors[55];
        if(aqiNumber < 481) return aqiColors[56];
        if(aqiNumber < 491) return aqiColors[57];
        if(aqiNumber < 501) return aqiColors[58];

        return aqiColors[58]
    }
}

export default aqiStatus