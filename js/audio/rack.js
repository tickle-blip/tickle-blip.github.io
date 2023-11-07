import {Players} from "tone";

export function rack(samples, options = {}) {
    options = { volume: -12, attack: 0.05, ...options };
    let players = new Players(samples, options);

    const s = {
        customSymbols: Object.keys(samples),
        triggerAttackRelease: (key, duration, time, velocity) => {
            if (!players.has(key)) {
                console.warn(`key ${key} not found for playback`);
                return;
            }
            const player = players.player(key);
            player.start(time,0,duration);
            //player.stop(time + duration);
        },
        connect: (dest) => {
            players.connect(dest);
            return s;
        },
        toDestination: () => {
            players.toDestination();
            return s;
        },
    };
    return s;
}