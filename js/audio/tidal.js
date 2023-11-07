import { rack } from './rack.js';
const tidalsounds = {
    bd: "../../samples/BT0A0D0.wav",
    sn: "../../samples/ST0T0S3.wav",
    hh: "../../samples/000_hh3closedhh.wav",
    cp: "../../samples/HANDCLP0.wav",
    mt: "../../samples/MT0D3.wav",
    ht: "../../samples/HT0D3.wav",
    lt: "../../samples/LT0D3.wav",
};
export default rack(tidalsounds).toDestination();