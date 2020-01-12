import getCandidates from './candidates.mjs';

export default function (p, role) {
    const candidates = getCandidates.call(this, p, role);

    
    for (let i = 2; i <= this.deep; i += 2) {

    }

    return candidates[Math.max(...Object.keys(candidates))];
}